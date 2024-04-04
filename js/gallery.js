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
            <img src="${image.download_url}" width="100%">
         </div> `;
    return htmlSegment;
}