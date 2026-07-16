export function hey(message: string): string {
  const trimmed = message.trim();
  const hasLetters = /[a-z]/i.test(trimmed);
  const isCapital = hasLetters && trimmed === trimmed.toUpperCase();
  const lastChar = trimmed[trimmed.length-1];
  const isEmpty = trimmed.length === 0;
  if (isEmpty) {
    return "Fine. Be that way!";
  } else if (lastChar === "?" && isCapital) {
    return "Calm down, I know what I'm doing!";
  } else if (isCapital) {
    return "Whoa, chill out!";
  } else if (lastChar === "?") {
    return "Sure.";
  } else {
    return "Whatever.";
  }
}
