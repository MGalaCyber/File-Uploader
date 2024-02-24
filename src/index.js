const Fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { fromBuffer } = require("file-type");
const FormData = require("form-data");

async function fileUploader(file) {
    let formData = new FormData();
    const { ext } = await fromBuffer(file);

    formData.append("file", file, "tmp." + ext);

    let getResponse = await Fetch("https://api.universebot.space/upload/add", {
        method: "POST",
        body: formData
    });
    let getResult = await getResponse.json();

    if (getResult.status) {
        return {
            message: getResult.message,
            url: getResult.data.url
        }
    } else {
        return {
            message: getResult.message,
            url: null
        }
    }
};

module.exports = fileUploader;