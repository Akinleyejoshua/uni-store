import { request } from "../utils/axios";

export const addOrder = async (body) => request.post("/order/add-order", body);

export const getOrders = async () => request.get("/order/get-orders");

export const updateOrder = async (body) => request.post("/order/edit-order", body);

export async function deleteOrder (body) {
    return request.delete("/order/delete-order", body);
}