// src/ui.js
import { myLibrary, addBook, deleteBook } from "./library.js";
import { Book } from "./book.js";

export function displayBooks() {
  const container = document.getElementById("tableContainer");

  if (myLibrary.length === 0) {
    container.innerHTML = "<p>No books in library yet.</p>";
    return;
  }

  let tableHTML = `
    <table id="bookTable">
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Pages</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
  `;

  myLibrary.forEach((book, index) => {
    tableHTML += `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.isRead}</td>
        <td><button class="deleteBtn" data-index="${index}">Delete</button></td>
      </tr>
    `;
  });

  tableHTML += "</table>";
  container.innerHTML = tableHTML;

  document.querySelectorAll(".deleteBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      deleteBook(index);
      displayBooks();
    });
  });
}

export function addBookRow() {
  const container = document.getElementById("tableContainer");

  let table = document.getElementById("bookTable");
  if (!table) {
    container.innerHTML = `
      <table id="bookTable">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </table>
    `;
    table = document.getElementById("bookTable");
  }

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td><input type="text" id="titleInput" placeholder="Book title"></td>
    <td><input type="text" id="authorInput" placeholder="Author"></td>
    <td><input type="number" id="pagesInput" placeholder="Pages"></td>
    <td>
      <select id="isReadInput">
        <option value="No">Not Read</option>
        <option value="Yes">Read</option>
      </select>
    </td>
    <td><button id="saveBookBtn">Save</button></td>
  `;
  table.appendChild(newRow);

  document.getElementById("saveBookBtn").addEventListener("click", () => {
    const title = document.getElementById("titleInput").value.trim();
    const author = document.getElementById("authorInput").value.trim();
    const pages = document.getElementById("pagesInput").value.trim();
    const isRead = document.getElementById("isReadInput").value;

    if (!title || !author || !pages) {
      alert("Please fill out all fields!");
      return;
    }

    addBook(new Book(title, author, pages, isRead));
    displayBooks();
  });
}
