// posting function

function showpostinput() {
    document.getElementById('sign-in-btn').classList.add('d-none');
    document.getElementById('logout-button').classList.remove('d-none');
    document.getElementById('logout-button').innerHTML = `${userxy}, Log out`;
    document.getElementById('post-input').classList.remove('d-none');
    document.getElementById('alert-sign-in').classList.add('d-none');
}

function post() {
    let post = document.getElementById('post').value;
    document.getElementById('firstpost').innerHTML += `<div class="card text-center m-3">
<div class="card-header text-left bg-p-hd-fo">
    SEE! This is important for you:
</div>
<div class="card-body bg-text-post">
    <p class="card-text ">${post}</p>

</div>
<div class="card-footer text-muted bg-p-hd-fo">
    ${userxy} ago
</div>
</div>`;
    document.getElementById('post').value = '';
}

// variablen and größen

let user = [];

// sign up easy


function savename() {
    let name = document.getElementById('registry-input').value;
    user.push(name);
    setarray('user', user);
    document.getElementById('registry-input').value = '';
}

// return and log in

function loaduser() {
    storageuser = getarray('user')
    console.log(storageuser);
    varenty = storageuser.find(searchuser);
    if (varenty === undefined) {
        alert('PLS registry');
    } else {
        showpostinput();
    };
    document.getElementById('login-input').value = '';
}

function logout() {
    document.getElementById('sign-in-btn').classList.remove('d-none');
    document.getElementById('logout-button').classList.add('d-none');
    document.getElementById('post-input').classList.add('d-none');
    document.getElementById('alert-sign-in').classList.remove('d-none');
}

function searchuser(storageuser) {
    userxy = document.getElementById('login-input').value;
    console.log('userxy', userxy);
    return storageuser == `${userxy}`;
}


// for (var i = 0; i < people.length; i++) {
//     if (people[i].name === "bob") {
//         break; // we found bob
//     }
// }

// save array / get Arry

function setarray(key, array) {
    localStorage.setItem(key, JSON.stringify(array));

}


function getarray(key) {
    return JSON.parse(localStorage.getItem(key));
}