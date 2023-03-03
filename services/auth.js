import { save } from "../helpers";
import { request } from "../utils/axios";

export const signup = async (body) => {
    return request.post("/auth/signup", body);
}

export const signin = async (body) => {
    return request.post("/auth/signin", body);
}

export const resetPassword = async (id, password) => {
    return request.post("/auth/reset-password/"+ id, {password:password});
}

export const forgotPassword = async (body) => {
    return request.post("/auth/forgot-password", body);
}

export const logoutUser = async () => {
    save("token", null);
    save("user-token", null);
    save("stream-state-draft", null);
    save("0101010-draft", null);
    save("auth", false);
    return true;
}