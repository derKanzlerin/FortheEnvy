// posting function

function showpostinput() {
    document.getElementById('sign-in-btn').classList.add('d-none');
    document.getElementById('logout-button').classList.remove('d-none');
    document.getElementById('logout-button').innerHTML = `${userxy}, Log out`;
    document.getElementById('post-input').classList.remove('d-none');
    document.getElementById('alert-sign-in').classList.add('d-none');
}


function post() {
    let newpost = document.getElementById('post').value;
    userpost.push(newpost);
    printpost(newpost)
    document.getElementById('post').value = '';
    removearray(`${userxy}`);
    setarray(`${userxy}`, userpost);
}

function printpost() {
    document.getElementById('firstpost').innerHTML = '';
    for (i = 0; i < userpost.length; i++) {
        console.log(i);
        document.getElementById('firstpost').innerHTML += `<div class="card text-center m-3">
    <div class="card-header text-left bg-p-hd-fo">
        SEE! This is important for you:
    </div>
    <div class="card-body bg-text-post">
        <p class="card-text ">${userpost[i]}</p>
    
    </div>
    <div class="card-footer text-muted bg-p-hd-fo">
        ${userxy} ago
    </div>
    </div>`;
    };
}


// variablen and größen
let userpost = [];

let user = [];

// sign up easy


function savename() {
    let name = document.getElementById('registry-input').value;
    user.push(name);
    setarray('user', user);
    document.getElementById('registry-input').value = '';
}

// return and log in

function checkuser() {
    storageuser = getarray('user');
    if (!storageuser) {
        document.getElementById('registry-input').value = '';
        alert('PLS registry');
    } else {
        loaduser();
    };
    document.getElementById('login-input').value = '';
}

function loaduser() {
    storageuser = getarray('user');
    varenty = storageuser.find(searchuser);
    if (varenty === undefined) {
        alert('PLS registry');
    }
    else {
        showpostinput();
        loadpost();
    };
}

// Load Posts

function loadpost() {
    postsxy = getarray(`${userxy}`);
    userpost.push(postsxy);
    console.log(userpost);
    printpost();
}



function logout() {
    document.getElementById('sign-in-btn').classList.remove('d-none');
    document.getElementById('logout-button').classList.add('d-none');
    document.getElementById('post-input').classList.add('d-none');
    document.getElementById('alert-sign-in').classList.remove('d-none');
    userpost = [];
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

function removearray(key) {
    localStorage.removeItem(key);
}

function setarray(key, array) {
    localStorage.setItem(key, JSON.stringify(array));

}


function getarray(key) {
    return JSON.parse(localStorage.getItem(key));
}