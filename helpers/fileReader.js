export const documentToBlob = (doc, output) => {
    const file = new FileReader();
    file.readAsDataURL(doc);
    file.onloadend = () => {
        output(file.result, doc);
    }
}

export const videoToBlob = (chunk) => {
    const blob = new Blob(chunk, {type: "video/mp4"});
    return blob;
}

export const videoToDataUrl = (blob, output) => {
    const file = new FileReader();
    file.readAsDataURL(blob);
    file.onloadend = () => {
        output(file.result);
    }
}