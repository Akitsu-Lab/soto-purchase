import { executePurchaseDb } from "../infrastructure/repository/purchaseRepository.ts";
import { Purchase } from "../domain/model/purchase.ts";

export const executePurchase = async (
  purchase: Purchase,
) => {
  return await executePurchaseDb(purchase);
};
