import surroundingCells from "../surroundingCells/surroundingCells.js";
import splitCells from "./splitCells.js";

const createCells = () => {
  const board = [...document.getElementsByClassName("grid")].map((cell) => {
    cell.style.backgroundColor = Math.random() > 0.5 ? "black" : "white";
    return cell;
  });

  const updateCells = (board) => {
    const nextBoard = [...board];

    const bidimensionalBoard = splitCells(board, 30);

    const surroundingLivingCells = board.map((currentCell) => {
      const surroundingCell = surroundingCells(bidimensionalBoard, currentCell);
      return surroundingCell.filter(
        (cell) => cell.style.backgroundColor === "black"
      );
    });

    for (let i = 0; i < board.length; i++) {
      const currentCell = board[i];
      const aliveCount = surroundingLivingCells[i].length;

      if (currentCell.style.backgroundColor === "black") {
        if (aliveCount < 2 || aliveCount > 3) {
          nextBoard[i].style.backgroundColor = "white";
        }
      } else if (currentCell.style.backgroundColor === "white") {
        if (aliveCount === 3) {
          nextBoard[i].style.backgroundColor = "black";
        }
      }
    }

    board = nextBoard;
  };

  setInterval(() => {
    updateCells(board);
  }, 1000);
};

export default createCells;
