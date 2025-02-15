import { Context } from "npm:hono";
import { getAllEvents } from "../application/eventService.ts";

export const getAllEventHandler = async (c: Context) => {
  const events = await getAllEvents();
  return c.json(events);
};
