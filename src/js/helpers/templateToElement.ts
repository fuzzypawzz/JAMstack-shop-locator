export default function convertTemplateToElement(
	htmlTemplate: string,
	parentElementTag?: string
): Element {
	const parentElement: Element = document.createElement(
		parentElementTag ? parentElementTag : "div"
	);
	parentElement.innerHTML = htmlTemplate;
	return parentElement;
}
