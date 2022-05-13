function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main');
  json.forEach(jsonData => {
    const h4 = document.createElement('h4');
    h4.innerHTML =jsonData.name;
    main.appendChild(h4);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
