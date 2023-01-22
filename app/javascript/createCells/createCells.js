const cells = [...document.getElementsByClassName("grid")].map((cell) => {
  cell.style.backgroundColor = Math.random() > 0.8 ? "black" : "white";
  return cell;
});

cells.filter((element) => element === "black");
