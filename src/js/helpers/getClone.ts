export default function getClone(id: string): Node {
  let node = document.querySelector(`#${id}`);
		if (!node) {
			throw new Error("Clone base element could not be found");
		}
		// Changed this to be true instead of [true]
		return node.cloneNode(true);
}