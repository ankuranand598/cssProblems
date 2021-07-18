function slideShow() {
    const arr = ['https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/7cfeea72680777.5bef4d7b798a7.jpg', 'https://www.adweek.com/wp-content/uploads/2019/05/john-wick-poster-qa-hed-page-2019.jpg','https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ca787272680777.5bef4d7b84382.jpg'];
    let div = document.getElementById('div_11');
    let img = document.createElement('img');
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
const users = [];
if (localStorage.getItem('users') == null) {
    localStorage.setItem('users', JSON.stringify(users));
}
function enterHome(e) {
   e.preventDefault();
    let form = document.getElementById('login');
    let email = form.email.value;
    let pwd = form.password.value;
    let div = document.getElementById('div_12');
    let msg = document.createElement('p');
    msg.style.color = 'red';
    let user = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < user.length; i++) {
         
        let e = user[i].email;
        let p = user[i].pwd;
        if (e === email && p === pwd) {
            window.location.href = 'home.html';
            break;
        } else {
            msg.textContent = `invalid Credentials`
             
        }
        div.append(msg)
        
    }
   
    
}