import type { ImgKey } from './assets';

/* Everything a guest reads lives here, so names, dates and venue can be swapped in one place. */

export const COUPLE = {
  monogram: 'S & D',
  first: 'Sharath',
  second: 'Dhanyashree',
  full: 'Sharath & Dhanyashree',
};

/** Wording from the printed invitation card. */
export const INVITE = {
  graceOf: 'Late Radhamma & Late Chathappan',
  hosts: 'Mrs. Rajitha A.R. & Mr. Ganesh T.C.',
  groomFull: 'Sharath G',
  brideFull: 'Dhanyashree A.V.',
  brideParents: 'Mrs. Sheela K.R. & Mr. Venugopalan A.',
};

export const EVENT = {
  ceremony: {
    title: 'Wedding Ceremony',
    dateLong: 'Sunday, 6 December 2026',
    dow: 'Sun',
    day: 6,
    time: '10 – 11 am',
    place: 'Mahila Samaj',
    town: 'Virajpet',
  },
  reception: {
    title: 'Reception',
    dateLong: 'Sunday, 13 December 2026',
    dow: 'Sun',
    day: 13,
    time: '11 am onwards',
    place: 'Sakshi Convention Hall',
    town: 'Somwarpet',
  },
  dateShort: '6 Dec',
  region: 'Kodagu, Karnataka',
  /** 10 am IST on the wedding day, in UTC, used by the countdown */
  startUtc: Date.UTC(2026, 11, 6, 4, 30),
  calendarUrl:
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sharath+%26+Dhanyashree%27s+wedding&dates=20261206T043000Z/20261206T053000Z&location=Mahila+Samaj,+Virajpet',
  /** Month shown in the save-the-date modal; every `marks` day gets a heart */
  calendar: {
    year: 2026,
    month: 11,
    monthName: 'December',
    marks: [
      { day: 6, label: 'Sun 6 · Wedding ceremony' },
      { day: 13, label: 'Sun 13 · Reception' },
    ],
  },
};

/**
 * Hero name labels: `at` is [x, y, dx, dy] — the face position in the 1200×1800 hero photo,
 * plus a px offset. The `left` label runs leftwards from its point, the `right` one rightwards.
 * `who` is the COUPLE key whose name is shown. In the courtyard photo the bride sits on the left.
 */
export const FACES = {
  left: { who: 'second', at: [724, 927, -60, -80] },
  right: { who: 'first', at: [841, 864, 100, -110] },
} as const;

/** Focus of the hero photo crop (0–1 on each axis). Shared by the CSS crop and the label maths. */
export const HERO_FOCUS = { x: 0.9, y: 0.5 };

export const VOWS = [
  'I take you as my partner, my closest friend, and my home.',
  'I promise to listen before I answer,',
  'to hold your hand on the easy days and the hard ones,',
  'to keep laughing with you,',
  'to honour your family as my own,',
  'to grow with you, and never away from you,',
  'and to choose you again, every morning,',
  'for all the years we’re given.',
];

export const BLESSING = {
  eyebrow: 'A wish for you',
  title: 'Love That Grows',
  verse:
    'May your love be the quiet kind that stays: patient on the hard days, generous on the good ones, and a little deeper with every year you share.',
  cite: 'With love, from all of us',
};

/**
 * "In each other's words": placeholder lines — Sharath & Dhanyashree should replace `text`
 * (and `title` if they like) with their own words. `from` is 'first' (Sharath) or 'second' (Dhanyashree).
 */
type Word = { img: ImgKey; pos: string; alt: string; title: string; text: string; from: 'first' | 'second' };
export const WORDS: Word[] = [
  { img: 'windowseat', pos: '50% 60%', alt: 'Sharath and Dhanyashree reading a book together on the window seat', title: 'Chapter by chapter', text: 'She reads the story out loud, and somehow every page sounds better in her voice.', from: 'first' },
  { img: 'laugh', pos: '50% 50%', alt: 'Sharath laughing into his hand while Dhanyashree smiles at him', title: 'His laugh', text: 'He laughs at his own jokes before he finishes them. I laugh every time anyway.', from: 'second' },
  { img: 'backtoback', pos: '50% 55%', alt: 'Standing back to back under the stone arch', title: 'Right behind me', text: 'Whatever comes next, I know she’s right there with me.', from: 'first' },
  { img: 'courtyard', pos: '50% 50%', alt: 'Reading together in the courtyard, with petals on the steps', title: 'Home', text: 'I stopped looking for home the day I found him.', from: 'second' },
  { img: 'sofa', pos: '50% 50%', alt: 'Sharath and Dhanyashree smiling at each other on the wooden sofa', title: 'Her smile', text: 'She makes every ordinary day feel like a small celebration.', from: 'first' },
  { img: 'sky', pos: '50% 65%', alt: 'Standing together under the trees against the evening sky', title: 'Every morning', text: 'He chooses me again every day, and I’ll keep choosing him.', from: 'second' },
];

/**
 * `map` is what Google Maps searches for. If the pin lands in the wrong place,
 * replace it with the exact place name from Google Maps, or with coordinates
 * like '12.1960,75.8050'.
 */
export const SCHEDULE = [
  { title: 'Wedding Ceremony', when: 'Sun 6 Dec · 10 – 11 am · Mahila Samaj, Virajpet', text: 'Join us as we begin our life together, surrounded by the love and blessings of our families and friends.', map: 'Mahila Samaj, Virajpet, Karnataka' },
  { title: 'Reception', when: 'Sun 13 Dec · 11 am onwards · Sakshi Convention Hall, Somwarpet', text: 'A week later, join us for a day of celebration, laughter and good food as we share the happiness of our new beginning with everyone we love.', map: 'Sakshi Convention Hall, Somwarpet, Karnataka' },
];

/** Shorter timeline shown in the save-the-date modal */
export const DAY_TIMELINE = [
  { time: 'Sun 6 · 10 am', what: 'Wedding ceremony, Mahila Samaj, Virajpet' },
  { time: 'Sun 13 · 11 am', what: 'Reception, Sakshi Convention Hall, Somwarpet' },
];

/** Placeholder blessings — replace `text` and `from` with the families' real words. */
type FamilyBlessing = { title: string; text: string; from: string; img: ImgKey; pos: string };
export const FAMILY_BLESSINGS: FamilyBlessing[] = [
  { title: 'May your home be full of peace', text: 'May your home be full of peace, your table full of laughter, and your hearts full of patience for each other.', from: 'Rajitha & Ganesh, Sharath’s parents', img: 'sofa', pos: '50% 45%' },
  { title: 'Welcome to our family', text: 'We hoped for the right person to walk beside our daughter. Sharath, we are so glad it is you.', from: 'Sheela & Venugopalan, Dhanyashree’s parents', img: 'sky', pos: '50% 65%' },
  { title: 'Love that grows', text: 'Love each other a little more every year, through every season life brings you.', from: 'Your family', img: 'windowseat', pos: '50% 60%' },
  { title: 'Always in your corner', text: 'May you always find happiness in each other, strength in difficult times, and countless reasons to smile together.', from: 'Your brothers & sisters', img: 'laugh', pos: '50% 45%' },
];

export const NAV_LINKS = [
  { href: '#vows', label: 'Our Vows' },
  { href: '#words', label: 'Our Words' },
  { href: '#blessing', label: 'Blessing' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#families', label: 'Family Blessings' },
];
