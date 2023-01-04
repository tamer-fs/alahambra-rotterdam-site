function previewFile() {
    var file = document.getElementById('file').value; 
    var txtHolder = document.getElementById('file-in-txt');
    var img = document.createElement('img');
    document.body.appendChild(img);

    txtHolder.placeholder = file;
    img.src = file;
    console.log(file);
}