let data_div = document.getElementById('movieDetails');
function addToHome() {
    let film = document.getElementById('movie').value;
    let rating = document.getElementById('rating').value;
    let poster = document.getElementById('poster').value;
    let details = {
        film,
        rating,
        poster
    };
    let arr;
    arr = localStorage.getItem('mDetails');
    if (arr == null) {
        arr = [];
    } else {
        arr=JSON.parse(localStorage.getItem('mDetails'))
    }
    arr.push(details);
    localStorage.setItem('mDetails', JSON.stringify(arr));
    showDetails();
}
function appendDetails(el){
   
    var div = document.createElement('div');
    div.setAttribute('class','movieDiv')
    let p_name = document.createElement('p');
    p_name.innerHTML = el.film;
    let p_price = document.createElement('p');
    p_price.innerHTML = `Rating imdb :${el.rating}`;
    let img = document.createElement('img');
    img.src = el.poster;
    let btn = document.createElement('button');
    btn.textContent = 'put in watchlist'
    btn.addEventListener('click', function () {
        addToWatch(el)
    })
    btn.style.display='block'
    div.append(img, p_name, p_price, btn);
    data_div.append(div);
    
}
function showDetails() {
    let data = JSON.parse(localStorage.getItem('mDetails'));
    data_div.innerHTML = null;
    data.forEach(function (el) {
        appendDetails(el)
    })
}
showDetails();

function addToWatch(el) {
    alert('added')
}