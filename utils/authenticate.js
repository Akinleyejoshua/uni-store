import { get} from "../helpers";

export const authenticate = () => {

    const token = get("token");
    if (token === null || token === undefined || token === "null") {
        return false;
    } else {
        return true;
    }
}