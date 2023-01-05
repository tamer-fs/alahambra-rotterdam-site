// all items

var items = [
    [2.75, "Cola", "Koude dranken", "Coca-Cola / Coca-Cola Zero", "images/colaImg.png"],
    [2.75, "Fanta", "Koude dranken", "Fanta", "images/fantaImg.png"],
    [2.75, "orange", "Koude dranken", "Cassis", "images/colaImg.png"],
    [6.75, "Sprite", "Koude dranken", "Sprite", "images/colaImg.png"],
    [3.85, "ice tea", "Koude dranken", "Bitter Lemon", "images/fantaImg.png"],
    [2.75, "ice tea", "Koude dranken", "Fuse Tea Peach", "images/colaImg.png"],
    [2.75, "ice tea", "Koude dranken", "Green tea Mango", "images/colaImg.png"],
    [6.75, "ice tea", "Koude dranken", "Green tea", "images/fantaImg.png"],
    [2.75, "", "Koude dranken", "Tonic", "images/colaImg.png"],
    [2.75, "Water", "Koude dranken", "Chaudfntaine Blauw / Rood", "images/colaImg.png"],
    [8.99, "kinder", "Koude dranken", "Appelsap", "images/fantaImg.png"],
    [2.75, "kinder", "Koude dranken", "Fristi", "images/colaImg.png"],
    [3.00, "", "Mocktails", "Mojito", "images/colaImg.png"],
    [4.23, "", "Mocktails", "Strawberry Mojito", "images/fantaImg.png"],
    [7.75, "", "Mocktails", "Redbull Mojito", "images/colaImg.png"],
    [4.25, "", "Mocktails", "Sangria", "images/colaImg.png"],
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
        var txtContainer = document.createElement('div');
        txtContainer.className = "txt-container"; 
        titleContainer.className = "title-container";
        var type = document.createElement('h3');
        ele.appendChild(type);

        // make and link the text

        main.appendChild(ele);
        ele.appendChild(pic);
        ele.appendChild(txtContainer);
        txtContainer.appendChild(name);
        ele.appendChild(price);

        pic.src = items[i][4];
        name.innerHTML = items[i][3];
        price.innerHTML = "€ " + items[i][0];
        type.innerHTML = items[i][1];
        type.style.display = "none";

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