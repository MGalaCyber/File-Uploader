declare const fileUploader: (file: string) => Promise<{
    status: boolean;
    code: number;
    message: string;
    data: {
        url: string;
        preview: string;
        expires_at: string;
    }
}>;
export = fileUploader;