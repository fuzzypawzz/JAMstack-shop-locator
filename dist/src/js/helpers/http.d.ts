export interface IHttpResponse<T> extends Response {
    parsedBody?: T;
}
export default function http<T>(url: string): Promise<IHttpResponse<T>>;
