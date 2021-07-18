let data_div = document.getElementById('div_12');
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
function enterSubmit(e) {
    e.preventDefault();
    let notice = document.createElement('p');
    notice.style.color = 'red';
    let myForm = document.getElementById('signUp');
    let name = myForm.name.value;
    
    let phone = myForm.phone.value;
   
    let email = myForm.email.value;
    let pwd = myForm.password.value;
    
        var obj = {
            name,
            phone,
            email,
            pwd,
        };
    if (name == ''||phone==''||email==''||pwd=='') {
        notice.textContent = 'All fields are mandetory.';
       
    } else {
        let arr;
        arr = localStorage.getItem('users');
        if (arr == null) {
            arr = [];
        } else {
            arr = JSON.parse(localStorage.getItem('users'));
        }
    
   
        arr.push(obj);
        localStorage.setItem('users', JSON.stringify(arr));
    }
        data_div.append(notice)
    
}