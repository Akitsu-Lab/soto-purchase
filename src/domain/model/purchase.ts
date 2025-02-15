import { AccountId } from "../valueObjects/accountId.ts";
import { EventId } from "../valueObjects/eventId.ts";
import { SelectedNumber } from "../valueObjects/selectedNumber.ts";

export class Purchase {
  eventId: EventId;
  accountId: AccountId;
  selectedNumber: SelectedNumber;

  constructor(
    eventId: EventId,
    accountId: AccountId,
    selectedNumber: SelectedNumber,
  ) {
    this.eventId = eventId;
    this.accountId = accountId;
    this.selectedNumber = selectedNumber;
  }
}
