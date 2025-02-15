import connection from "../../config/db.ts";
import { customLogger } from "../../main.ts";
import { RowDataPacket } from "npm:mysql2@2.3.3";
import { Event } from "../../domain/model/event.ts";

export const getAllEventsDb = async () => {
  customLogger("Connecting to the database...");
  const [rows] = await connection.query<RowDataPacket[]>(
    "SELECT * FROM `events`",
  );
  // DBレコードを ドメインモデル に変換
  const events = rows.map((row) =>
    new Event(
      row.event_id,
      row.option_count,
      row.winning_number,
      row.prize_money,
      row.is_selling,
      row.end_sale_date,
    )
  );
  events.forEach((event) => {
    customLogger(
      `eventId: ${event.eventId}, optionCount: ${event.optionCount}, winningCount: ${event.winningNumber}, prizeMoney: ${event.prizeMoney}, isSelling: ${event.isSelling}, endSaleDate: ${event.endSaleDate}`,
    );
  });
  return events;
};
