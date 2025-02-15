import { Context } from "npm:hono";
import { executePurchase } from "../application/purchaseService.ts";
import { EventId } from "../domain/valueObjects/eventId.ts";
import { AccountId } from "../domain/valueObjects/accountId.ts";
import { SelectedNumber } from "../domain/valueObjects/selectedNumber.ts";
import { Purchase } from "../domain/model/purchase.ts";

export const executePurchaseHandler = async (c: Context) => {
  const {
    eventId: eventIdFromBody,
    accountId: accountIdFromBody,
    selectedNumber: selectedNumberFromBody,
  } = await c.req.json();
  const eventId = new EventId(eventIdFromBody);
  const accountId = new AccountId(accountIdFromBody);
  const selectedNumber = new SelectedNumber(selectedNumberFromBody);

  const purchase = new Purchase(eventId, accountId, selectedNumber);

  await executePurchase(purchase);
  return c.text(`purchase done.`, 201);
};
