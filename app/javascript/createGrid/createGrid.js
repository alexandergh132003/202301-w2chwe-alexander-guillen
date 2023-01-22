const createGrid = (grids) => {
  const container = document.createElement("div");
  container.classList.add("container");

  for (let rows = 0; rows < grids; rows++) {
    for (let columns = 0; columns < grids; columns++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.style.width = `${360 / grids}px`;
      grid.style.height = `${360 / grids}px`;
      container.append(grid);
    }
  }

  document.body.appendChild(container);
};

export default createGrid;
