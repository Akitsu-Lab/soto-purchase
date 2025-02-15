export class IsSelling {
  private readonly _value: boolean;
  constructor(value: boolean) {
    this._value = value;
  }

  // Getter
  get value(): boolean {
    return this._value;
  }
}
