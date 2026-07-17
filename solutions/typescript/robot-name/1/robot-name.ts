export class Robot {
  private static usedNames = new Set<string>();
  private _name : string;
  constructor() {
    this._name = "";
    this.resetName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let name : string;
    do {
      name = "";
      for (let index = 0; index < 2; index++) {
        name += letters.charAt(Math.floor(Math.random()*letters.length));
      }
      for (let index = 0; index < 3; index++) {
        name += numbers.charAt(Math.floor(Math.random()*numbers.length));
      }
    } while (Robot.usedNames.has(name));

    Robot.usedNames.add(name);
    this._name = name;
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }
}
