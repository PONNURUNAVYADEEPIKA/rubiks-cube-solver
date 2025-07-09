document.addEventListener("DOMContentLoaded", () => {
    const cube = new Cube();
    cube.scramble();
    cube.solve();
    cube.render();
  });
  