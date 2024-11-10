const axios = require('axios');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

async function fileUploader(file) {
    let form = new FormData();
    const { ext } = await fromBuffer(file);
    form.append('file', file, 'tmp.' + ext);

    return axios.post('https://cdn.universebot.space/api/upload', form, {
        headers: form.getHeaders()
    })
    .then(response => {
        let result = response.data;
        return result;
    })
    .catch(error => {
        return error;
    });
};

module.exports = fileUploader;