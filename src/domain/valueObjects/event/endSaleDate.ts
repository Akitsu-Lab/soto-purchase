export class EndSaleDate {
  private readonly _value: Date;
  constructor(value: Date) {
    this._value = value;
  }

  // Getter
  get value(): Date {
    return this._value;
  }
}
