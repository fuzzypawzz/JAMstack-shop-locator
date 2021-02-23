import convertTemplateToElement from "./templateToElement";

export default function updateDOM(html: string | Element, targetId: string): void {
		const target: any = document.querySelector(`#${targetId}`);
		const element: Element =
			typeof html == "string" ? convertTemplateToElement(html) : html;

		try {
			target.appendChild(element);
		} catch (error) {
			console.warn(
				`Something went wrong when trying to update the DOM. Is target-id: "${targetId}" correct?`
			);
			throw new Error(error);
		}
	}