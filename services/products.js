import { request } from "../utils/axios";

export const getAllProducts = async (category, tag) => request.get(`/product/get-products/`);
export const getProductById = async (id) => request.get(`/product/get-products?id=${id}`);
// export const getProductById = async (id, category, tag) => request.get(`/product/get-products?id=${id}&tags=${tag}&category=${category}`);

export const addProduct = async (body) => request.post("/product/add-products", body);

export const updateProduct = async (body) => { return request.post("/product/edit-product", body)};