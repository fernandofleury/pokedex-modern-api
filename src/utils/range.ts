const range = (start: number, end: number): number[] =>
  Array.from({ length: end + 1 - start }, (v, k) => k + start);

export default range;
