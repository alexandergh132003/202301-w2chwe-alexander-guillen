const splitCells = (list, part) => {
  const splitCells = [];
  for (let position = 0; position < list.length; position += part) {
    splitCells.push(list.slice(position, position + part));
  }

  return splitCells;
};

export default splitCells;
