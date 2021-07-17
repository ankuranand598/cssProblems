var data_div = document.getElementById('data')
var total_div = document.getElementById('data2');
var checkOut = document.getElementById('checkOut');
function appendProducts(el) {
   
    var div = document.createElement('div');
    let p_name = document.createElement('p');
    p_name.innerHTML=el.name
    let p_price = document.createElement('p');
    p_price.innerHTML = el.price;
    let img = document.createElement('img');
    img.src = el.image;
   
    div.append(img, p_name, p_price);
    data_div.append(div);
    
}
function appendCheckout(sum,count) {
    var inputBox = document.createElement('input');
    inputBox.setAttribute('id', 'promo');
    inputBox.placeholder = 'apply promo'
    inputBox.type = 'text'
    
    var txtbtn = document.createElement('button');
    txtbtn.innerText = 'Apply';
    txtbtn.addEventListener('click', function () {
        var txt = document.getElementById('promo').value;   
        if (txt == 'masai30') {
            sum = Number(sum) - Number(sum)*3 / 10;
        }
//changing the value of sum;
        ShowTOtal(sum, count)
        
    })
    var btn = document.createElement('button');
    btn.innerText = 'checkout'
    btn.addEventListener('click', function () {
        window.location.href="checkOut.html"
    } )
    if (inputBox.innerText == 'masai30') {
        //console.log('ip')
    }
    checkOut.append(inputBox,txtbtn,btn)
    //console.log('ip')
    
}

function showCart() {
    let data = JSON.parse(localStorage.getItem('product'));
    data_div.innerHTML = null;
    data.forEach(function (el) {
        appendProducts(el)
    })
}
showCart();
function totalProduct(){
    var arr = JSON.parse(localStorage.getItem('product'))
    var count = 0;
    var sum=0
    for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i].price);
        count++;
    }
    ShowTOtal(sum, count)
    appendCheckout(sum,count);
    
}
totalProduct()
function ShowTOtal(el,c) {
   let p_count = document.createElement('p');
    p_count.innerHTML = `the total no of product: ${c}`;
     let p_sum = document.createElement('p');
    p_sum.innerHTML = `the total amount : rs${el}`;
    total_div.append(p_count, p_sum);

 }
