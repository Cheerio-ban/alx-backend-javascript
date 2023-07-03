export default function hasValuesFromArray(aSet, anArray) {
  for (const elem of anArray) {
    if (!aSet.has(elem)) {
      return false;
    }
  }
  return true;
}
