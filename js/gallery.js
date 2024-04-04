// ======================== FEED ========================

let feedImgBlock = document.querySelector("#feedImgBlock");

// let resp = fetch("https://fakerapi.it/api/v1/books?_locale=fr_FR&_quantity=5")
let resp = fetch("https://picsum.photos/v2/list?page=3")
    .then(response => response.json()) // transforme le résultat de l'API en JSON
    .then(data => {
        displayFeedImg(data);

    })

function displayFeedImg(images) {
    console.log(images);
    let html = '';
    for (let key in images) {
        html += imageHtml(images[key]);
    }
    html += ''
    feedImgBlock.innerHTML = html;
}

function imageHtml(image) {
    // console.log(book);
    // console.log(book.formats["image/jpeg"]);
    console.log(image);
    let htmlSegment =
        `<div class="image">
            ${image.author}
            <img class="img" src="${image.download_url}">
         </div> `;
    return htmlSegment;
}

// =========== TOGGLE IMAGE DISPLAY : mosaic or column ==========

// document.getElementById('imgDisplayBtn').onclick = () =>  {
//     const feedImgBlock = document.getElementById("feedImgBlock");
//     const imgDisplayBtn = document.getElementById("imgDisplayBtn");
//     if (feedImgBlock.className === "flex-wrap") {
//         feedImgBlock.className = "flex-column";
//         imgDisplayBtn.innerText = "Afficher en mosaïque";
//     } else {
//         feedImgBlock.className = "flex-wrap";
//         imgDisplayBtn.innerText = "Afficher en colonnes";
//     }
// }

let columnActive = false;

document.getElementById('joliBouton').onclick = () =>  {
    let toggle = document.querySelector('.toggle')
    columnActive = !columnActive
    if (columnActive) {
        toggle.classList.add('active');
        feedImgBlock.className = "flex-column";
    } else {
        toggle.classList.remove('active');
        feedImgBlock.className = "flex-wrap";
    }
}
