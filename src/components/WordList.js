export const masterWordList = [
  'pacific',
  'northwest',
  'oregon',
  'mission',
  'popcorn',
  'ocean',
  'jewel',
  'flower',
  'hibiscus',
  'cider',
  'haru'
];

export function randomWord() {
  const random = Math.floor((Math.random() * masterWordList.length));
  return masterWordList[random];
};