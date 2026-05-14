import { greeting } from "./greeting.js";

const root = document.getElementById("app");
if (root) {
  const h1 = document.createElement("h1");
  h1.textContent = greeting("world");
  root.appendChild(h1);
}
