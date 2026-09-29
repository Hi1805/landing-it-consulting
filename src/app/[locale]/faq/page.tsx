import Link from 'next/link';
import { ChevronDown, ArrowLeft } from 'lucide-react';

type FAQItem = { question: string; answer: React.ReactNode };
type FAQSection = { title: string; items: FAQItem[] };

const content: Record<
  'en' | 'vi',
  { title: string; back: string; intro: string; sections: FAQSection[] }
> = {
  en: {
    title: 'Frequently Asked Questions',
    back: 'Back to home',
    intro: 'Everything you need to know about IT Consultant Challenge 2026.',
    sections: [
      {
        title: 'Competition Format',
        items: [
          {
            question: 'How is the competition conducted?',
            answer: (
              <>
                The competition has three knockout rounds:{' '}
                <strong>Idea Submission</strong> (19–26 October, online
                proposal), <strong>MVP Build-a-thon</strong> (2–9 November,
                development and online MVP submission), and{' '}
                <strong>Pitching</strong> (16–21 November, change request,
                refinement, and final pitch). The Organiser determines how many
                teams advance after each round based on participation and
                submission quality. Selected finalists present their demo on 21
                November.
              </>
            ),
          },
          {
            question: 'Where does the competition take place?',
            answer:
              'Rounds 1 and 2 are fully online. The final is held onsite at Netcompany Ho Chi Minh City for local teams and online for teams outside Ho Chi Minh City.',
          },
          {
            question: 'Will the case study be released early?',
            answer:
              'No. It will be emailed to every team when Round 1 officially begins to ensure fairness.',
          },
        ],
      },
      {
        title: 'Eligibility',
        items: [
          {
            question: 'Who can participate?',
            answer:
              'Students and young technology enthusiasts interested in software development, digital solutions, and IT consulting. Each team has up to three members.',
          },
          {
            question: 'Can we change team members after registration?',
            answer: 'Yes, provided that the Organiser is notified.',
          },
          {
            question: 'Is English required?',
            answer:
              'No. English proficiency is an advantage because the case study, official communications, and presentation slides are provided or prepared in English.',
          },
        ],
      },
      {
        title: 'Submission',
        items: [
          {
            question: 'What do we need to submit?',
            answer:
              'Requirements vary by round and will be communicated before each stage. Please check your email and the internal announcement channel regularly.',
          },
          {
            question: 'Can we modify a submission after the deadline?',
            answer: 'No, unless the Organiser announces otherwise.',
          },
        ],
      },
      {
        title: 'AI Usage',
        items: [
          {
            question: 'Are AI tools allowed?',
            answer:
              'Yes. Teams may use AI to improve productivity, but must understand, validate, and own everything they submit. An AI journal provided by the Organiser must be submitted after Round 2.',
          },
          {
            question: 'Can we use open-source libraries or templates?',
            answer:
              'Yes, provided their licenses are respected and the team clearly identifies which parts they developed.',
          },
          {
            question: 'Are there technology-stack restrictions?',
            answer: 'No. Choose the stack that best fits your solution.',
          },
          {
            question: 'Do we need a production-ready system?',
            answer:
              'No. A functional MVP demonstrating core functionality, business value, and feasibility is expected.',
          },
        ],
      },
      {
        title: 'Judging',
        items: [
          {
            question: 'How are submissions evaluated?',
            answer:
              'Before each round, the Organiser will email the judging criteria, as determined by the Organiser, and the results. Every team member should register with a valid email and check it regularly.',
          },
          {
            question: 'How will the use of AI be evaluated?',
            answer:
              'AI should be used as a supporting tool, not as a substitute for the team’s thinking and ownership. The Organiser values teams that use AI responsibly, validate AI-generated content, and assess the feasibility of their product. Teams should understand and be able to defend every part of their submission, and should avoid using presentation slides that are entirely AI-generated.',
          },
        ],
      },
      {
        title: 'Prizes',
        items: [
          {
            question: 'How are prizes awarded?',
            answer: (
              <>
                The top three teams receive VND 60 million, VND 30 million, and
                VND 15 million in cash prizes. Outstanding teams also receive
                scholarships from Engineer Pro and DuaEdu. Cash prizes are split
                equally among team members and sent as Got It e-vouchers. Learn
                how to use them{' '}
                <a
                  className='text-primary underline'
                  href='https://www.gotit.vn/how-to-use'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
                .
              </>
            ),
          },
        ],
      },
      {
        title: 'Intellectual Property',
        items: [
          {
            question: 'Who owns the solution?',
            answer:
              'Teams retain ownership. By participating, teams allow the Organiser to use project summaries, slides, demo videos, and event photos for communication and promotion.',
          },
        ],
      },
      {
        title: 'Support',
        items: [
          {
            question: 'Who can I contact?',
            answer:
              'Reply to the official competition email or contact the Organiser. Please report submission issues as soon as possible; extension requests are reviewed case by case.',
          },
        ],
      },
    ],
  },
  vi: {
    title: 'Câu hỏi thường gặp',
    back: 'Về trang chủ',
    intro: 'Thông tin cần biết về IT Consultant Challenge 2026.',
    sections: [
      {
        title: 'Thể thức cuộc thi',
        items: [
          {
            question: 'Cuộc thi được tổ chức như thế nào?',
            answer: (
              <>
                Cuộc thi gồm ba vòng loại trực tiếp:{' '}
                <strong>Idea Submission</strong> (19/10–26/10, nộp đề xuất
                online), <strong>MVP Build-a-thon</strong> (02/11–09/11, phát
                triển và nộp MVP online), và <strong>Pitching</strong>{' '}
                (16/11–21/11, xử lý yêu cầu thay đổi, hoàn thiện và thuyết
                trình). Ban tổ chức quyết định số đội đi tiếp sau mỗi vòng dựa
                trên số lượng đội thi và chất lượng bài thi. Các đội được chọn
                vào chung kết sẽ demo vào ngày 21/11.
              </>
            ),
          },
          {
            question: 'Cuộc thi diễn ra ở đâu?',
            answer:
              'Vòng 1 và 2 hoàn toàn online. Chung kết diễn ra trực tiếp tại văn phòng Netcompany TP.HCM cho đội tại TP.HCM và online cho đội ở địa phương khác.',
          },
          {
            question: 'Case study có được công bố trước không?',
            answer:
              'Không. Case study được gửi qua email khi Vòng 1 chính thức bắt đầu để bảo đảm công bằng.',
          },
        ],
      },
      {
        title: 'Điều kiện tham gia',
        items: [
          {
            question: 'Ai có thể tham gia?',
            answer:
              'Sinh viên và các bạn trẻ yêu công nghệ, quan tâm phát triển phần mềm, giải pháp số và tư vấn CNTT. Mỗi đội có tối đa ba thành viên.',
          },
          {
            question: 'Có thể đổi thành viên sau đăng ký không?',
            answer: 'Có, với điều kiện thông báo cho Ban tổ chức.',
          },
          {
            question: 'Tiếng Anh có bắt buộc không?',
            answer:
              'Không. Khả năng tiếng Anh là một lợi thế vì case study, thông tin chính thức và slide thuyết trình được cung cấp hoặc chuẩn bị bằng tiếng Anh.',
          },
        ],
      },
      {
        title: 'Bài nộp',
        items: [
          {
            question: 'Mỗi vòng cần nộp gì?',
            answer:
              'Yêu cầu khác nhau theo từng vòng và sẽ được thông báo trước. Hãy kiểm tra email hoặc kênh thông báo nội bộ thường xuyên.',
          },
          {
            question: 'Có thể sửa bài sau hạn chót không?',
            answer: 'Không, trừ khi Ban tổ chức có thông báo khác.',
          },
        ],
      },
      {
        title: 'Sử dụng AI',
        items: [
          {
            question: 'Có được sử dụng công cụ AI không?',
            answer:
              'Có. Đội thi được khuyến khích dùng AI nhưng phải hiểu, kiểm chứng và chịu trách nhiệm cho toàn bộ bài nộp. Sau Vòng 2, đội phải nộp AI journal theo mẫu.',
          },
          {
            question: 'Có được dùng thư viện hoặc template mã nguồn mở?',
            answer:
              'Có, nếu tuân thủ giấy phép và nêu rõ phần nào do đội phát triển.',
          },
          {
            question: 'Có giới hạn công nghệ sử dụng không?',
            answer:
              'Không. Đội được tự do chọn ngôn ngữ, framework và công nghệ phù hợp.',
          },
          {
            question: 'Có cần xây dựng hệ thống hoàn chỉnh không?',
            answer:
              'Không. Đội cần bàn giao MVP thể hiện chức năng cốt lõi, giá trị kinh doanh và tính khả thi.',
          },
        ],
      },
      {
        title: 'Chấm thi',
        items: [
          {
            question: 'Bài thi được đánh giá thế nào?',
            answer:
              'Trước mỗi vòng, Ban tổ chức sẽ email tiêu chí chấm do Ban tổ chức quyết định và kết quả. Mỗi thành viên cần dùng email hợp lệ và kiểm tra thường xuyên.',
          },
          {
            question: 'Ban tổ chức đánh giá việc sử dụng AI như thế nào?',
            answer:
              'AI nên được sử dụng như một công cụ hỗ trợ, không thay thế tư duy và trách nhiệm của đội thi. Ban tổ chức đánh giá cao các đội sử dụng AI có kiểm soát, biết kiểm chứng nội dung do AI tạo và đánh giá tính khả thi của sản phẩm. Đội cần hiểu, giải thích và bảo vệ được toàn bộ bài làm; đồng thời không nên sử dụng slide được tạo 100% bằng AI.',
          },
        ],
      },
      {
        title: 'Giải thưởng',
        items: [
          {
            question: 'Giải thưởng được trao thế nào?',
            answer: (
              <>
                Ba đội đứng đầu nhận giải hiện kim 60, 30 và 15 triệu VNĐ. Các
                đội nổi bật còn nhận học bổng từ Engineer Pro và DuaEdu. Giải
                hiện kim được chia đều cho thành viên và gửi dưới dạng e-voucher
                Got It. Xem hướng dẫn sử dụng{' '}
                <a
                  className='text-primary underline'
                  href='https://www.gotit.vn/how-to-use'
                  target='_blank'
                  rel='noreferrer'
                >
                  tại đây
                </a>
                .
              </>
            ),
          },
        ],
      },
      {
        title: 'Quyền sở hữu trí tuệ',
        items: [
          {
            question: 'Ai sở hữu giải pháp?',
            answer:
              'Đội thi giữ quyền sở hữu. Khi tham gia, đội đồng ý để Ban tổ chức dùng tóm tắt dự án, slide, video demo và ảnh sự kiện cho mục đích truyền thông.',
          },
        ],
      },
      {
        title: 'Hỗ trợ',
        items: [
          {
            question: 'Liên hệ ai khi cần hỗ trợ?',
            answer:
              'Trả lời email chính thức của cuộc thi hoặc liên hệ Ban Tổ Chức. Hãy báo sự cố nộp bài sớm nhất có thể; yêu cầu gia hạn được xem xét theo từng trường hợp.',
          },
        ],
      },
    ],
  },
};

export default function FAQPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const lang = locale === 'vi' ? 'vi' : 'en';
  const page = content[lang];
  return (
    <main className='min-h-screen bg-[#071f1d] px-4 py-10 text-white md:py-16'>
      <div className='mx-auto max-w-4xl'>
        <Link
          href={`/${lang}`}
          className='mb-10 inline-flex items-center gap-2 text-sm text-secondary hover:text-primary'
        >
          <ArrowLeft className='h-4 w-4' /> {page.back}
        </Link>
        <p className='mb-3 text-sm font-bold uppercase tracking-[.2em] text-secondary'>
          IT Consultant Challenge 2026
        </p>
        <h1 className='font-montserrat text-4xl font-extrabold text-primary md:text-6xl'>
          {page.title}
        </h1>
        <p className='mt-4 text-white/65'>{page.intro}</p>
        <div className='mt-12 space-y-10'>
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className='mb-4 text-xl font-bold'>{section.title}</h2>
              <div className='space-y-3'>
                {section.items.map((item) => (
                  <details
                    className='group rounded-2xl border border-white/10 bg-white/[.04] p-5 open:bg-white/[.07]'
                    key={item.question}
                  >
                    <summary className='flex cursor-pointer list-none items-center justify-between gap-4 font-semibold'>
                      {item.question}
                      <ChevronDown className='h-5 w-5 shrink-0 text-secondary transition group-open:rotate-180' />
                    </summary>
                    <div className='mt-4 border-t border-white/10 pt-4 leading-7 text-white/70'>
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
