import connection from "../../config/db.ts";
import { customLogger } from "../../main.ts";
import { Purchase } from "../../domain/model/purchase.ts";

export const executePurchaseDb = async (
  purchase: Purchase,
) => {
  customLogger("Connecting to the database...");
  try {
    await connection.query(
      "INSERT INTO purchases (event_id, account_id, selected_number) VALUES (?,?,?)",
      [
        purchase.eventId.value,
        purchase.accountId.value,
        purchase.selectedNumber.value,
      ],
    );
  } catch (err) {
    if (err instanceof Error) {
      customLogger("query error:", err.message);
    }
    throw err;
  }
};
