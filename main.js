function storeLocation() {
    let form = document.getElementById('myForm');
    let name = form.name.value;
    let rating = form.rating.value;
    let image = form.img.value;

    let location = {
        name,//name : name,
        rating,//rating: rating,
        image//image: image
    }
    //console.log(location) now store data in local storage.
    let arr;//this is for first visit, but for second visit,
    arr = localStorage.getItem('locations');
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('locations'))
    }


    arr.push(location);
    localStorage.setItem('locations', JSON.stringify(arr))
}

function appendLocation(el) {
    var data_div = document.getElementById('data')
    var div = document.createElement('div');
    let p_name = document.createElement('p');
    p_name.innerHTML = el.name;

     let p_rating = document.createElement('p');
    p_rating.innerHTML = el.rating;
     let img = document.createElement('img');
    img.src = el.image;
    let btn = document.createElement('button');
    btn.textContent = 'Add to visited';
    btn.addEventListener('click', function () {
        addtovisited(el);
    })
    btn.style.display="block"
    div.append(p_name, p_rating, img);
    data_div.append(div);
}
function storeLocations() {
    let data = JSON.parse(localStorage.getItem('locations'));
    data.forEach(function (el) {
        appendLocation(el);
    })
}
storeLocations();
function addtovisited(obj){
 let arr;//this is for first visit, but for second visit,
    arr = localStorage.getItem('visited');
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('visited'))
    }


    arr.push(obj);
    localStorage.setItem('visited', JSON.stringify(arr))
}
function showVisited() {
    let data = JSON.parse(localStorage.getItem('visited'));
    //data.innerHTML = 'null';
    data.forEach(function (el) {
        appendLocations(el)
    });
}
showVisited();
