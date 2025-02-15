import { getAllEventsDb } from "../infrastructure/repository/eventRepository.ts";

export const getAllEvents = async () => {
  return await getAllEventsDb();
};
