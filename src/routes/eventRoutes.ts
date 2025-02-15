import { Hono } from "npm:hono";
import { getAllEventHandler } from "../controller/eventController.ts";

const eventRoutes = new Hono();
eventRoutes.get("/", getAllEventHandler);
export default eventRoutes;
