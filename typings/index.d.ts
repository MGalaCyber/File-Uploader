declare const fileUploader: (file: string) => Promise<{ message: string, url: string }>;
export = fileUploader;