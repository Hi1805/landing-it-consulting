import { FormField } from '@/components/FormField';
import PersonalRegistrationForm, {
  PersonalRegistrationFormHandle,
} from '@/components/PersonalRegistrationForm';
import { REGISTRATION_CLOSE_DATE } from '@/constants';
import { cn } from '@/lib/utils';
import {
  PersonalForm,
  personalFormInitValue,
} from '@/lib/validators/personalFormSchema';
import {
  TeamForm,
  teamFormInitValue,
  teamFormSchema,
} from '@/lib/validators/teamFormSchema';
import { Form, Formik, FormikHelpers } from 'formik';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface TeamRegistrationFormProps {
  onSubmitSuccess?: () => void;
  onRegistrationExpired?: () => void;
}

export interface MembersFormDataValue extends PersonalForm {
  index: number;
}

export default function TeamRegistrationForm({
  onSubmitSuccess,
  onRegistrationExpired,
}: TeamRegistrationFormProps) {
  const t = useTranslations('root');
  const memberFormsRef = useRef<Map<number, PersonalRegistrationFormHandle>>(
    new Map(),
  );
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
  const [membersFormData, setMembersFormData] = useState<
    MembersFormDataValue[]
  >([
    { index: 0, ...personalFormInitValue },
    { index: 1, ...personalFormInitValue },
    { index: 2, ...personalFormInitValue },
  ]);

  const handleSubmit = async (
    values: TeamForm,
    formikHelpers: FormikHelpers<TeamForm>,
  ) => {
    try {
      if (new Date() >= REGISTRATION_CLOSE_DATE) {
        onRegistrationExpired?.();
        return;
      }

      const memberValidity = await Promise.all(
        membersFormData.map(async (member) => {
          const form = memberFormsRef.current.get(member.index);
          return form ? form.validate() : false;
        }),
      );
      const invalidMemberIndex = memberValidity.findIndex((valid) => !valid);

      if (invalidMemberIndex !== -1) {
        setSelectedMemberIndex(membersFormData[invalidMemberIndex].index);
        toast.error(t('registration.failed.inputError'));
        return;
      }

      await Promise.all(
        membersFormData.map((data) => {
          const url =
            `https://docs.google.com/forms/d/e/1FAIpQLScxKAC9Ww4wevdbu82gMn9rM_FlTurlnYVIFpwQdiOGWPcMfg/formResponse?` +
            `entry.224019388=${encodeURIComponent(values.teamName)}&` +
            `entry.629332802=${encodeURIComponent(membersFormData.length)}&` +
            `entry.1358224807=${encodeURIComponent(data.fullName)}&` +
            `entry.1076600136=${encodeURIComponent(data.expectedGraduationYear)}&` +
            `entry.255642493=${encodeURIComponent(`${data.participantType} | ${data.school}`)}&` +
            `entry.421524129=${encodeURIComponent(data.major)}&` +
            `entry.1071420772=${encodeURIComponent(data.phoneNumber)}&` +
            `entry.1527414272=${encodeURIComponent(data.email)}&`;

          return fetch(url, {
            method: 'POST',
            mode: 'no-cors',
          });
        }),
      );

      onSubmitSuccess?.();
      toast.success(t('registration.success.toastMessage'));
      formikHelpers.resetForm();
    } catch (error) {
      toast.error(t('registration.failed.toastMessage'));
    }
  };

  return (
    <Formik
      initialValues={teamFormInitValue}
      validationSchema={teamFormSchema}
      onSubmit={handleSubmit}
    >
      {({ isValidating, isSubmitting }) => (
        <Form
          className='grid w-full grid-cols-2 gap-4'
          suppressHydrationWarning
        >
          <div className='col-span-2'>
            <FormField
              label={t('registration.team.teamName.label')}
              name='teamName'
              placeholder={t('registration.team.teamName.placeholder')}
              required
            />
          </div>

          <div className='col-span-2'>
            <hr className='border-white' />
            <h3 className='mt-4 w-full text-center text-lg font-bold text-primary'>
              {t('registration.team.memberInfo.title')}
            </h3>
          </div>

          <div className='col-span-2 grid grid-cols-4 gap-4'>
            <div className='col-span-4 flex flex-col items-center border-white sm:col-span-1 sm:border-r'>
              {membersFormData.map((data) => (
                <button
                  key={`member_tab_${data.index}`}
                  type='button'
                  className={cn(
                    'flex w-full justify-between rounded-s-lg border-r-8 border-transparent p-4 text-white transition-all hover:bg-[#ccc]/30',
                    {
                      'border-primary bg-[#ccc]/30':
                        selectedMemberIndex === data.index,
                    },
                  )}
                  onClick={() => setSelectedMemberIndex(data.index)}
                >
                  <span
                    className={cn(
                      {
                        'text-primary': selectedMemberIndex === data.index,
                      },
                      'line-clamp-1 text-left',
                    )}
                  >
                    {data.fullName.trim() === ''
                      ? t('registration.team.memberIndex', {
                          index: data.index + 1,
                        })
                      : data.fullName}
                  </span>
                </button>
              ))}
            </div>
            <div className='col-span-4 sm:col-span-3'>
              {membersFormData.map((data, index) => (
                <PersonalRegistrationForm
                  key={`member_form_${data.index}`}
                  ref={(formHandle) => {
                    if (formHandle) {
                      memberFormsRef.current.set(data.index, formHandle);
                    } else {
                      memberFormsRef.current.delete(data.index);
                    }
                  }}
                  showNotes={false}
                  asChild
                  className={cn({ hidden: selectedMemberIndex !== data.index })}
                  formValues={membersFormData[index]}
                  formIndex={data.index}
                  onChange={setMembersFormData}
                />
              ))}
            </div>
          </div>

          <div className='col-span-2 mt-4'>
            <p className='text-center italic text-primary'>
              {t('registration.team.note')}
            </p>
          </div>
          <div className='col-span-2 mt-4 flex justify-end'>
            <button
              type='submit'
              disabled={isValidating || isSubmitting}
              className={cn(
                'w-auto rounded-md !bg-[#7FFFF7] px-6 py-2 font-semibold text-black shadow-[0_0_2px_#7FFFF7,inset_0_0_2px_#7FFFF7,0_0_5px_#7FFFF7,0_0_15px_#7FFFF7,0_0_30px_#7FFFF7] transition-all hover:opacity-90',
                {
                  'cursor-not-allowed opacity-90': isValidating || isSubmitting,
                },
              )}
            >
              {isValidating || isSubmitting ? (
                <FaSpinner className='animate-spin' />
              ) : (
                t('registration.submit')
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
