<div align="center">

[![https://nodei.co/npm/@mgalacyber/file-uploader.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@mgalacyber/file-uploader.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@mgalacyber/file-uploader)
</div>

# FILE UPLOADER

This NPM package, file-uploader, is a versatile and efficient solution for handling file uploads in Node.js applications. It provides a seamless and easy-to-use interface to upload files of various types while offering essential features to enhance the overall user experience.

## Features
- **File Expiry**:
    - Uploaded files are automatically set to expire after 24 hours, ensuring a secure and efficient storage solution. This feature is particularly beneficial for applications that require temporary file storage.

- **Universal File Support:**
    - The file-uploader is designed to support all types of files. Whether it's images, documents, audio, or any other file format, the package seamlessly handles the upload process, providing a versatile solution for a wide range of applications.

## How It Works
The file-uploader is powered by the [Universe API](https://api.universebot.space), which provides a reliable backend infrastructure for handling file uploads.

## Installation
npm:
```bash
$ npm install @mgalacyber/file-uploader
```
yarn:
```bash
$ yarn add @mgalacyber/file-uploader
```

## Simple to Use
## CommonJs (CJS) syntax
```js
const fileUploader = require("@mgalacyber/file-uploader");
```
## ECMAScript Modules (ESM) syntax
```ts
import fileUploader from "@mgalacyber/file-uploader";
```

## Example
```js
const Path = require("path");
const fs = require("fs");

const filePath = Path.join(__dirname, "fileName.extension");
const fileContent = fs.readFileSync(filePath);

fileUploader(fileContent).then((result) => {
    console.log(result);
});
```