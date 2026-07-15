export function age(planet: string, seconds: number): number {
  let earthYears : number = seconds/(60*60*24*365.25);
  return Number((earthYears/planetmap[planet.toLowerCase()]).toFixed(2));
}
const planetmap: Record<string, number> = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};