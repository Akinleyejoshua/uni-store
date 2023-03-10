import { decode, sign } from "jsonwebtoken";
import { request } from "../utils/axios";

export const decodeJWT = (token) => {
   return decode(token);
}

export const encodeJWT = (data, key) => {
   return sign(data, `${key}`, {
   });
}

export const getUserData = async (id) => {
   return request.get("/user/" + id, { id });
}

export const updateUserData = async (id, body) => {
   return request.post("/user/" + id, body);
}

export async function addCustomer (body) {
   return request.post("/customer/add-customer", body);
}

export async function getCustomers () {
   return request.get("/customer/get-customers");
}