import { drawGame } from "./view";

export const controller = model => {
  //model.run( new Date().getTime());
  document.getElementById("start").addEventListener("click", () => {
    model.run();
  });
  document.getElementById("stop").addEventListener("click", () => {
    model.stop();
  });
  document.getElementById("reset").addEventListener("click", () => {
    model.reset();
  });
};
