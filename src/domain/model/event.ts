import { EventId } from "../valueObjects/eventId.ts";
import { OptionCount } from "../valueObjects/event/optionCount.ts";
import { WinningNumber } from "../valueObjects/event/winningNumber.ts";
import { PrizeMoney } from "../valueObjects/event/prizeMoney.ts";
import { IsSelling } from "../valueObjects/event/isSelling.ts";
import { EndSaleDate } from "../valueObjects/event/endSaleDate.ts";

export class Event {
  eventId: EventId;
  optionCount: OptionCount;
  winningNumber: WinningNumber;
  prizeMoney: PrizeMoney;
  isSelling: IsSelling;
  endSaleDate: EndSaleDate;

  constructor(
    eventId: EventId,
    optionCount: OptionCount,
    winningNumber: WinningNumber,
    prizeMoney: PrizeMoney,
    isSelling: IsSelling,
    endSaleDate: EndSaleDate,
  ) {
    this.eventId = eventId;
    this.optionCount = optionCount;
    this.winningNumber = winningNumber;
    this.prizeMoney = prizeMoney;
    this.isSelling = isSelling;
    this.endSaleDate = endSaleDate;
  }
}
