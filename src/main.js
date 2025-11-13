// src/main.js
import { displayBooks, addBookRow } from "./module/ui.js";
import "../styles.css"
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addBookBtn").addEventListener("click", addBookRow);
  displayBooks();
});
