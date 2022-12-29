console.log("[Function?]: True")
loadItems();

var items = [
    [2,75, "Drinks", "Cold", "Coca-Coloa / Coca-Cola Zero"],
    [2,75, "Drinks", "Cold", "Fanta"],
    [2,75, "Drinks", "Cold", "Cassis"]
];

console.log(items.length);

function loadItems() {
    var main = document.getElementById("menu-container");
    var product = document.createElement("h1");

    main.appendChild(product);

    product.innerHTML = items[0][0];
} 