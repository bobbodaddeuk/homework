function filter() {
    let value = document.getElementById("value").value.toUppercase();
    let listInner = document.getElementsByClassName("listInner");
    for (let i = 0; i < listInner.length; i++) {
        title = listInner[i].getElementsByClassName('title');
        if (title[0].innerHTML.toUppercase().indexOf(value) != -1) {
            listInner[i].style.display = "flex";
        } else {
            listInner[i].style.display = "none";
        }
    }
}