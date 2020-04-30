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
  'alphabet',
  'sassafras',
  'coding',
  'javascript',
  'computer',
  'blanket',
  'boom',
  'cabinet',
  'mug',
  'begonia',
  'planter',
  'bucket',
  'carpet',
  'princess',
  'coronavirus',
  'pokemon'
];

export function randomWord() {
  const random = Math.floor((Math.random() * masterWordList.length));
  return masterWordList[random];
};