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

// Confirmations are sent until before 19 October 2026.
export const REGISTRATION_CLOSE_DATE = new Date('2026-10-18T17:00:00Z');
// The official event date has not been announced yet.
export const EVENT_START_DATE = REGISTRATION_CLOSE_DATE;
