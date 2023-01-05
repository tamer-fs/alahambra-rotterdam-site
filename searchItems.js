const search = () => {
    const searchbox = document.getElementById("search-box").value.toUpperCase().trim();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("h2");
    const ptype = document.getElementsByTagName("h3");

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];
        let matchType = product[i].getElementsByTagName('h3')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML; 
            let typeValue = matchType.textContent || matchType.innerHTML;
            
            if (textvalue.toUpperCase().trim().indexOf(searchbox) > -1 || typeValue.toUpperCase().trim().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}