// ======================== FEED ========================

let feedImgBlock = document.querySelector("#feedImgBlock");

// let resp = fetch("https://fakerapi.it/api/v1/books?_locale=fr_FR&_quantity=5")
let resp = fetch("https://picsum.photos/v2/list?page=3")
    .then(response => response.json()) // transforme le résultat de l'API en JSON
    .then(data => {
        displayFeedImg(data);
    })

function displayFeedImg(images) {
    let html = '';
    for (let key in images) {
        html += imageHtml(images[key]);
    }
    html += ''
    feedImgBlock.innerHTML = html;
}

function imageHtml(image) {
    let htmlSegment =
        `<div class="image">
            ${image.author}
            <img class="img" src="${image.download_url}">
<!--            <div class="deleteButton">X</div>-->
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

document.getElementById('joliBouton').onclick = () => {
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

// ====================== Bouton pour ajouter une image =============

// ne fait qu'afficher le formulaire déjà présent dans le HTML

const formBox = document.querySelector('#formBox');

document.getElementById('addImgBtn').onclick = () => {
    if (formBox.style.display === "block") {
        formBox.style.display = "none";
    } else {
        formBox.style.display = "block";
    }
}

// ====================== formulaire ajout image ====================
const formImg = document.querySelector('#addImg');
formImg.addEventListener("submit", ev => {
    ev.preventDefault();
    const formData = new FormData(formImg);
    const entries = formData.entries();
    const image = Object.fromEntries(entries);
    const imgNode = document.createElement("div");
    imgNode.innerHTML = imgFormToHtml(image); // <div class="image">
    imgNode.className = "image";
    feedImgBlock.insertBefore(imgNode, feedImgBlock.firstChild);
    formBox.style.display = "none";
    const deleteElement = imgNode.querySelector(".deleteButton");
    deleteElement.addEventListener("click", ev => {
        console.log(ev.target);
        // console.log(ev.target.parentElement);
        const parentElement = ev.target.parentElement;
        feedImgBlock.removeChild(ev.target.parentElement);
    });
})

function imgFormToHtml(image) {
    let htmlSegment =
        `   ${image.auteur}
            <img class="img" src="${image.url}">
            <div class="deleteButton">X</div>`;
    return htmlSegment;
}

// ============ Suppression de n'importe quelle image si on y a mis un bouton .deleteButton ================
// const deleteElements = document.querySelector(".deleteButton");
// console.log(deleteElements);
// deleteElements.addEventListener("click", ev => {
//     console.log(ev.target);
//     // console.log(ev.target.parentElement);
//     const parentElement = ev.target.parentElement;
//     feedImgBlock.removeChild(ev.target.parentElement);
//
// });
