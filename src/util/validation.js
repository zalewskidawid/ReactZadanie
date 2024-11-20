export function isNotEmpty(value) {
  return value.trim() !== '';
}
export function doesNotContainNumbers(value) {
  const regex = /\d/;
  return !regex.test(value); 
}