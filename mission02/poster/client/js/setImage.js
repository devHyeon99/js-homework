export function setImage(node, name, alt) {
  node.src = `./assets/${name}.jpeg`;
  node.alt = alt;
}
