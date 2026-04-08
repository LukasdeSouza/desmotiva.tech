declare module 'downloadjs' {
    export default function download(data: string | Blob | MediaSource, filename?: string, mimeType?: string): void;
}