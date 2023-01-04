function previewFile() {
    var file = document.getElementById('file')
    var txtHolder = document.getElementById('file-in-txt');
    var img = document.createElement('img');
    var main = document.getElementById('main');
    img.className = "preview-img";
    main.appendChild(img);
    var fReader = new FileReader();
    fReader.readAsDataURL(file.files[0]);
    fReader.onloadend = function(event){
        img.src = event.target.result;
        txtHolder.placeholder = event.target.result;
    }
}