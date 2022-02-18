const token = 'f1633e94c4afd3f856f7766c45aa8557132b132ada93c4f189d33e77af3733053979925efe735d902029b';
// https://oauth.vk.com/authorize?client_id=8074443&display=page&redirect_uri=https://ghostik-gh.github.io&scope=friends&response_type=token&v=5.131&state=123456
// https://api.vk.com/method/friends.getOnline?v=5.131&access_token=dc678159de047caa96002fae5f76f548c75448c7313946b5b743fff06c830c9149f952741c6d828cafe67
const client_id = 8074443;

async function oneMore(){
    var script = document.createElement('SCRIPT');
    script.src = "https://api.vk.com/method/users.get?user_ids=210700286&fields=bdate&access_token=cdf6d25892dbdfcef87bafd8530b57ea7d3caf024fd3486aa056a8dfcaa8352acce85504489999c066055&v=5.131&callback=callbackFunc";
    document.getElementsByTagName("head")[0].appendChild(script);
    function callbackFunc(result) {
        alert(result.response[0].first_name)
    }
}







async function getResponse(){

    let url = 'https://api.vk.com/method/users.get?user_ids=210700286&fields=bdate&access_token=cdf6d25892dbdfcef87bafd8530b57ea7d3caf024fd3486aa056a8dfcaa8352acce85504489999c066055&v=5.131';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','https://ghostik-gh.github.io');

    let response = await fetch(url, {
        mode: 'cors',
        credentials: 'include',
        method: 'GET',
        headers: headers
    });

    if (response.ok) {
        let json = await response.text();
        console.log(response)
        console.log(json)
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
}

// https://api.vk.com/method/users.get?v=5.131&access_token=98ff2f9479e4d457c1b7cedf8f7f88ccfd321c299d60f4c5246cbdfb6fb3c7bb30aebe7e6c9bc3e5cf334

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.text())
//   .then(json => console.log(json))

// , {mode: "no-cors"}

function getResponseF(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','https://ghostik-gh.github.io');

    let response = fetch('https://api.vk.com/method/users.get?v=5.131&access_token=98ff2f9479e4d457c1b7cedf8f7f88ccfd321c299d60f4c5246cbdfb6fb3c7bb30aebe7e6c9bc3e5cf334', {
        mode: 'cors',
        credentials: 'include',
        method: 'GET',
        headers: headers
    });

    if (response.ok) {
        let json = response.text();
        console.log(response)
        console.log(json)
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
}


// function getResponseF(){
//     let url = new URL('https://jsonplaceholder.typicode.com/users');

//     let response = fetch(url);
//     if (response.ok) { // if HTTP-status is 200-299
//         // get the response body (the method explained below)
//         object = response.json();
//         return response;
//     } else {
//         alert("HTTP-Error: " + response.status);
//     }
//     console.log(object)
//     return 0;

//     console.log(response);
//     if (response.ok) { // if HTTP-status is 200-299
//         // get the response body (the method explained below)
//         let object = response.json().then(console.log);
//         console.log(object);
//     } else {
//         console.log("HTTP-Error: " + response.status);
//     }
//     let object = response.json().then(console.log);
//     console.log(object);
// }

// const formGetId = document.getElementById('formUserId');
// formGetId.addEventListener('submit', getFormValue);
// function getFormValue(e){
//     e.preventDefault();
//     userIdName = formGetId.querySelector('[name="id"]');
//     userId = userIdName.value;
//     console.log(userId)
// } // Получили User ID но только внутри функции

async function getToken(){
    let user_token = ''
    const hash = window.location.hash;
    let flag = false
    for (let char of hash){
        if (char == '&') break;
        if (flag) user_token += char;
        if (char == '=') flag = true; 
    }
    if (user_token != '') console.log(user_token)
}
// console.log(params);
// console.log('token --> ', params.get('access_token'));

// fetch('https://api.vk.com/method/users.get?v=5.131&access_token=f1633e94c4afd3f856f7766c45aa8557132b132ada93c4f189d33e77af3733053979925efe735d902029b', {mode: "no-cors"}).then(res => res.json()).then(console.log);

// fetch(url, {mode: "no-cors"}) .then(res => res.json()) .then(console.log);
