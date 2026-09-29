export enum SECTION_IDS {
  HOME = 'home',
  ABOUT = 'about',
  CHALLENGE = 'challenge',
  RULES = 'rules',
  TIMELINE = 'timeline',
  FAQ = 'faq',
  PRIZES = 'prizes',
  SCHEDULE = 'schedule',
  REGISTER = 'register',
  ORGANIZERS = 'organizers',
  HIGHLIGHTS = 'highlights',
  VIDEO_RECAP = 'video-recap',
}

// Registration remains open through 18 October 2026 in Vietnam (UTC+7).
export const REGISTRATION_CLOSE_DATE = new Date('2026-10-19T00:00:00+07:00');
// The official event date has not been announced yet.
export const EVENT_START_DATE = REGISTRATION_CLOSE_DATE;
