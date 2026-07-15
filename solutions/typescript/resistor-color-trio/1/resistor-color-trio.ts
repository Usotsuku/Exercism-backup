export function decodedResistorValue(colors: string[]): string {
  const first = COLORS.indexOf(colors[0]);
  const second = COLORS.indexOf(colors[1]);
  const multiplier = COLORS.indexOf(colors[2]);
  let value = (first * 10 + second) * Math.pow(10, multiplier);

  const units = ["ohms", "kiloohms", "megaohms", "gigaohms"];
  let unitIndex = 0;

  while (value >= 1000 && unitIndex < units.length - 1) {
    value /= 1000;
    unitIndex++;
  }

  return `${value} ${units[unitIndex]}`;
}

const COLORS = [
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