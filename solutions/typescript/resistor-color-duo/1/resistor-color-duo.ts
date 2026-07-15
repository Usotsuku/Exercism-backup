export function decodedValue(colors:string[]): number {
  const colorsIndex = colors.map(color => (COLORS.indexOf(color)));
  return colorsIndex[0]*10 + colorsIndex[1];
}

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];