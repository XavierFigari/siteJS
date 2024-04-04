// ======================== DROPDOWN ========================

document.getElementById('menuBtn').onclick = () => toggleDropdown(false);

function toggleDropdown(closeOnly) {
    const dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else if (closeOnly === false){
        dropdownContent.style.display = "block";
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        toggleDropdown(true);
    }
}

// ====================== formulaire ====================
const form = document.querySelector('form');
form.addEventListener("submit", ev => {
    ev.preventDefault();
    const formData = new FormData(form);
    const entries = formData.entries();
    const book = Object.fromEntries(entries);
    console.log(book);
    // const array = Array.from(entries).reduce((somme,value) => {
    //     somme[value[0]] = value[1];
    //     return somme;
    // }, {});
    const bookNode = document.createElement('div')
    bookNode.innerHTML = bookFormToHtml(book);
    feedBlock.appendChild(bookNode);
})

// ======================== FEED ========================

let feedBlock = document.querySelector("#feedBlock");

// let resp = fetch("https://fakerapi.it/api/v1/books?_locale=fr_FR&_quantity=5")
let resp = fetch("https://gutendex.com/books?languages=fr")
    .then(response => response.json()) // transforme le résultat de l'API en JSON
    .then(data => {
        displayFeed(data);

    })

function displayFeed(data) {
    let books = data.results;
    let html = '';
    for (let key in books) {
        html += bookHtml(books[key]);
    }
    html += ''
    feedBlock.innerHTML = html;
}

function bookHtml(book) {
    // console.log(book);
    // console.log(book.formats["image/jpeg"]);
    const author = (book.authors.length === 0) ? "inconnu" : book.authors[0].name;
    let htmlSegment =
        `<div class="book">
            <h3>${book.title}</h3>
            <img src="${book.formats["image/jpeg"]}">
            <ul>
                <li>Auteur : ${author}</li>
                <li>Genre : ${book.bookshelves[0]}</li>
            </ul>
         </div>`;
    return htmlSegment;
}

function bookFormToHtml(book) {
    let htmlSegment =
        `<div class="book">
            <h3>${book.titre}</h3>
            <ul>
                <li>Auteur : ${book.Auteur}</li>
                <li>Genre : ${book.Genre}</li>
            </ul>
         </div>`;
    return htmlSegment;
}

// document.addEventListener("DOMContentLoaded", (event) => {
//     console.log("DOM fully loaded and parsed");
// });


// async function printBooks() {
//     const resp = await fetch("https://fakerapi.it/api/v1/books?_locale=fr_FR&_quantity=10");
//     const books = await resp.json();
//     console.log(books);
// }


// let input = document.querySelector("#inputBtn");
// console.log(input)
//
// input.addEventListener("change", (event) => {
//     console.log(event.target.value)
// })

// let input = document.querySelectorAll('.inputForm')
// console.log(input)
//
// let data = {}
// input.forEach(element => {
//     element.addEventListener('input', (e) => {
//
//         data = {...data, [element.name]: e.target.value}
//
//
//         console.log(data)
//     })
//
// })