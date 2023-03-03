import { request } from "../utils/axios";

export const getAllProducts = async (category, tag) => request.get(`/product/get-products/`);
// export const getAllProducts = async (category, tag) => request.get(`/product/list-product?tags=${tag}&category=${category}`);

export const addProduct = async (body) => request.post("/product/add-products", body);

export const updateProduct = async (body) => { return request.post("/product/edit-product", body)};