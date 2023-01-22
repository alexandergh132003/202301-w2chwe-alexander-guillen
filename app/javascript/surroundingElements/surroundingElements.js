const surroundingElements = (listOfValues, value) => {
  const verticalAxis = listOfValues.indexOf(
    listOfValues.find((list) => list.includes(value))
  );
  const horizontalAxis = listOfValues[verticalAxis].indexOf(value);

  const surroundingElements = [];

  for (let y = -1; y <= 1; y++) {
    for (let x = -1; x <= 1; x++) {
      if (
        typeof listOfValues[verticalAxis + y] === "undefined" ||
        typeof listOfValues[verticalAxis + y][horizontalAxis + x] ===
          "undefined"
      ) {
        continue;
      }

      surroundingElements.push(
        listOfValues[verticalAxis + y][horizontalAxis + x]
      );
    }
  }

  return surroundingElements.filter((element) => element !== value);
};

export default surroundingElements;
