export function format(name: string, num: number): string {
  const lastTwo = num % 100;
  const lastDigit = num % 10;

  let ending = "th";

  if (lastTwo !== 11 && lastTwo !== 12 && lastTwo !== 13) {
    if (lastDigit === 1) {
      ending = "st";
    } else if (lastDigit === 2) {
      ending = "nd";
    } else if (lastDigit === 3) {
      ending = "rd";
    }
  }

  return `${name}, you are the ${num}${ending} customer we serve today. Thank you!`;
}