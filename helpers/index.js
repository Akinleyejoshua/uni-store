export const save = (key, val) => {
    try {
        window?.localStorage?.setItem(key, val);
    } catch (err) {

    }
}

export const get = (key) => {
    try {
        return window?.localStorage?.getItem(key);
    } catch (err) {

    }
}

export const formatNumber = (n) => {
    n = parseInt(n);
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

export const formatTime = (val) => {

}

export const splitTime = (val) => {
    const splitAll = val?.split(" ");
    const date = splitAll[0]?.split("/");
    // const time = splitAll[1]?.split(":");
    // const ampm = splitAll[2];

    const month = date[0];
    const day = date[1];
    const year = date[2];

    // const hr = time[0];
    // const min = time[1];
    // const sec = time[2];

    return {
        month, day, year
    }
}