function storeProduct() {
    let form = document.getElementById('myForm')
    let name = form.name.value;
    let price = form.price.value;
    let image = form.img.value;
    let product = {
        name,
        price,
        image
    }
    let arr;
    arr = localStorage.getItem('locations');
    if (arr == null) {
        arr = [];
    } else {
        arr=JSON.parse(localStorage.getItem('locations'))
    }
    arr.push(product);
    localStorage.setItem('locations',JSON.stringify(arr))
}