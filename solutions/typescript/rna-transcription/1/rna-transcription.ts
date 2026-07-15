const map: Record<string, string> = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export function toRna(dna: string): string {
  return dna
    .split("")
    .map((nucleotide) => {
      if (!(nucleotide in map)) {
        throw new Error("Invalid input DNA.");
      }

      return map[nucleotide];
    })
    .join("");
}