document.addEventListener("DOMContentLoaded", function () {
  //modal functionality
  var modal = document.getElementById("form-modal");
  var btn = document.getElementById("add-book-btn");
  var span = document.getElementsByClassName("close")[0];

  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  const myLibrary = [];

  function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addBookToLibrary();

    // Clear form inputs
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").value = "Read";

    modal.style.display = "none";
  });

  function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readCheckbox = document.getElementById("read");
    const read = readCheckbox.value;

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    displayBook();
  }

  function displayBook() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    myLibrary.forEach((element) => {
      const bookContainer = document.createElement("div");
      bookContainer.classList.add("book-container");
      const heading = document.createElement("h1");
      const p = document.createElement("p");
      const pages = document.createElement("span");
      const button = document.createElement("button");

      heading.textContent = element.title;
      p.textContent = element.author;
      pages.textContent = element.pages + " pages";
      button.textContent = element.isRead;

      // Add an event listener to the button
      button.addEventListener("click", () => {
        // Toggle the value of isRead
        element.isRead = !element.isRead;
        // Update the button text
        button.textContent = element.isRead ? "Read" : "Not Read";
      });

      bookContainer.appendChild(heading);
      bookContainer.appendChild(p);
      bookContainer.appendChild(pages);
      bookContainer.appendChild(button);
      bookList.appendChild(bookContainer);
    });
  }
});
