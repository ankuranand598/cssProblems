 var data_div = document.getElementById('data');
function storeProduct() {
    let form = document.getElementById('myForm')
    let name = form.name.value;
    let price = form.price.value;
    let image = form.img.value;
    let product = {
        name,
        price,
        image
    };
    let arr;
    arr = localStorage.getItem('locations');
    if (arr == null) {
        arr = [];
    } else {
        arr=JSON.parse(localStorage.getItem('locations'))
    }
    arr.push(product);
    localStorage.setItem('locations', JSON.stringify(arr))
    showProducts()
}
function appendProducts(el){
   
    var div = document.createElement('div');
    let p_name = document.createElement('p');
    p_name.innerHTML=el.name
    let p_price = document.createElement('p');
    p_price.innerHTML = el.price;
    let img = document.createElement('img');
    img.src = el.image;
    let btn = document.createElement('button');
    btn.textContent = 'Add to Cart'
    btn.addEventListener('click', function () {
        addToCart(el)
    })
    btn.style.display='block'
    div.append(img, p_name, p_price, btn);
    data_div.append(div);
    
}
function showProducts() {
    let data = JSON.parse(localStorage.getItem('locations'));
    data_div.innerHTML = null;
    data.forEach(function (el) {
        appendProducts(el)
    })
}
showProducts();
function addToCart(obj) {
    //alert('added')
    let arr1;
    arr1 = localStorage.getItem('product');
    if (arr1 == null) {
        arr1 = [];
    } else{
        arr1 = JSON.parse(localStorage.getItem('product'))
        
    }
   
    arr1.push(obj);
    localStorage.setItem('product', JSON.stringify(arr1));
    alert('added to the cart');
    console.log(arr1);
}
function showProduct() {
    window.location.href='productCart.html'
}