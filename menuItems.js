// all items

var items = [
    [2.75, "Drinks", "Koude dranken", "Coca-Coloa / Coca-Cola Zero", "images/colaImg.png"],
    [2.75, "Drinks", "Koude dranken", "Fanta", "images/fantaImg.png"],
    [2.75, "Drinks", "Koude dranken", "Cassis", "images/colaImg.png"],
    [2.75, "Drinks", "Koude dranken", "Sprite", "images/colaImg.png"],
    [2.75, "Drinks", "Koude dranken", "Bitter Lemon", "images/fantaImg.png"],
    [2.75, "Drinks", "Koude dranken", "Fuse Tea Peach", "images/colaImg.png"],
    [2.75, "Drinks", "Koude dranken", "Green tea Mango", "images/colaImg.png"],
    [2.75, "Drinks", "Koude dranken", "Green tea", "images/fantaImg.png"],
    [2.75, "Drinks", "Koude dranken", "Tonic", "images/colaImg.png"],
    [2.75, "Drinks", "Koude dranken", "Chaudfntaine Blauw / Rood", "images/colaImg.png"],
    [2.75, "Drinks", "Koude dranken", "Appelsap", "images/fantaImg.png"],
    [2.75, "Drinks", "Koude dranken", "Fristi", "images/colaImg.png"],
    [2.75, "Drinks", "Mocktails", "Mojito", "images/colaImg.png"],
    [2.75, "Drinks", "Mocktails", "Strawberry Mojito", "images/fantaImg.png"],
    [2.75, "Drinks", "Mocktails", "Redbull Mojito", "images/colaImg.png"],
    [2.75, "Drinks", "Mocktails", "Sangria", "images/colaImg.png"],
];

// start loading in the items

loadItems();

function loadItems() {

    // initializing prefCategory and linking to the main div

    var main = document.getElementById('product-list');
    var prefCategory = items[0][1];

    for (i = 0; i < items.length; i++) {

        // all items to be added

        var ele = document.createElement('div');
        ele.className = "product";
        var name = document.createElement('h2');
        var pic = document.createElement('img');
        var categoryTitle = document.createElement('h1');
        var price = document.createElement('p'); 
        var titleContainer = document.createElement('div');
        titleContainer.className = "title-container";

        // make and link the text

        main.appendChild(ele);
        ele.appendChild(pic);
        ele.appendChild(name);
        ele.appendChild(price);

        pic.src = items[i][4];
        name.innerHTML = items[i][3];
        price.innerHTML = "€ " + items[i][0];

        // give titles for different categories

        if (prefCategory.toUpperCase() != items[i][2].toUpperCase()) {
            main.appendChild(titleContainer);
            titleContainer.appendChild(categoryTitle);
            categoryTitle.innerHTML = items[i][2];
            prefCategory = items[i][2];
            main.appendChild(ele);
        }
    }
} 