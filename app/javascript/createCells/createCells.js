import surroundingCells from "../surroundingCells/surroundingCells.js";
import splitCells from "./splitCells.js";

const createCells = () => {
  let board = [...document.getElementsByClassName("grid")];

  board = board.map((cell) => {
    cell.style.backgroundColor = Math.random() > 0.5 ? "black" : "white";
    return cell;
  });

  const bidimensionalCells = splitCells(board, 30);

  const livingCells = board.filter(
    (cell) => cell.style.backgroundColor === "black"
  );

  for (const cell of board) {
    const cellOldStatus = cell.style.backgroundColor;

    const surroundingLivingCells = surroundingCells(
      bidimensionalCells,
      cell
    ).filter((element) => livingCells.includes(element));

    if (cellOldStatus === "black") {
      const cellNewStatus =
        surroundingLivingCells.length >= 2 && surroundingLivingCells.length <= 3
          ? "black"
          : "white";

      if (cellOldStatus !== cellNewStatus) {
        cell.style.backgroundColor = cellNewStatus;
        livingCells.splice(livingCells.indexOf(cell), 1);
      }
    }

    if (cellOldStatus === "white") {
      const cellNewStatus =
        surroundingLivingCells.length === 3 ? "black" : "white";

      if (cellOldStatus !== cellNewStatus) {
        cell.style.backgroundColor = cellNewStatus;
        livingCells.push(cell);
      }
    }
  }

  const intervalId = setInterval(() => {
    createCells();

    if (livingCells.length === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
};

export default createCells;
