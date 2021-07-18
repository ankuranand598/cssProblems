var data_div = document.getElementById('div_12');
function slideShow() {
    const arr = ['https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/7cfeea72680777.5bef4d7b798a7.jpg', 'https://www.adweek.com/wp-content/uploads/2019/05/john-wick-poster-qa-hed-page-2019.jpg','https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ca787272680777.5bef4d7b84382.jpg'];
    let div = document.getElementById('div_11');
    let img = document.createElement('img');
    img.setAttribute('class', 'slideImg');
    let i = 0;
    setInterval(function () {
        if (i == arr.length) {
            i = 0;
        }
        img.src = arr[i];
        i++
    },4000)
    div.append(img)
}
slideShow();
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
function arrangeAscend() {
    data_div.innerHTML = null;
    let data = JSON.parse(localStorage.getItem('mDetails'));
   data.sort(function(a, b) {
  return a.rating - b.rating;
   });
    data.forEach(function (el) {
        appendDetails(el)
    })
}
function arrangeDescend() {
    data_div.innerHTML = null;
    let data = JSON.parse(localStorage.getItem('mDetails'));
   data.sort(function(a, b) {
  return b.rating - a.rating;
   });
    data.forEach(function (el) {
        appendDetails(el)
    })
}

