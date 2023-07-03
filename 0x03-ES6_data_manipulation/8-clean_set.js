export default function cleanSet(aSet, aString) {
  if (!(aSet instanceof Set) || typeof aString !== 'string' || aString === '') {
    return '';
  }
  let newString = '';
  for (const elem of aSet) {
    if (elem.startsWith(aString)) {
      newString = newString.concat('-', elem.slice(aString.length));
    }
  }
  return newString.slice(1);
}
