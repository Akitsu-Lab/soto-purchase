import { Hono } from "npm:hono";
import { executePurchaseHandler } from "../controller/purchaseController.ts";

const purchaseRoutes = new Hono();
purchaseRoutes.post("/", executePurchaseHandler);
export default purchaseRoutes;
