export interface IHttpResponse<T> extends Response {
	parsedBody?: T;
}

export default async function http<T>(url: string): Promise<IHttpResponse<T>> {
	const response: IHttpResponse<T> = await fetch(url);
	response.parsedBody = await response.json();

	try {
		response.parsedBody = await response.json();
	} catch (e) {}

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return response;
}
