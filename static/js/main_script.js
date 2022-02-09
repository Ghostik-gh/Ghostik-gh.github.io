
const token = 'dc678159de047caa96002fae5f76f548c75448c7313946b5b743fff06c830c9149f952741c6d828cafe67';
https://oauth.vk.com/authorize?client_id=8074443&display=page&redirect_uri=https://ghostik-gh.github.io&scope=friends&response_type=token&v=5.131&state=123456
https://api.vk.com/method/friends.getOnline?v=5.131&access_token=dc678159de047caa96002fae5f76f548c75448c7313946b5b743fff06c830c9149f952741c6d828cafe67
const client_id = 8074443;
const home_url = 'https://ghostik-gh.github.io/search_page.html';


const formGetId = document.getElementById('formUserId');
formGetId.addEventListener('submit', getFormValue);
function getFormValue(e){
    e.preventDefault();
    userIdName = formGetId.querySelector('[name="id"]');
    userId = userIdName.value;
} // Получили User ID но только внутри функции 

const params = new URLSearchParams(window.location.search);
console.log(params);
console.log('token --> ', params.get('access_token'));


let url = new URL('https://google.com/search');
url.searchParams.set('q', 'test me!');
// параметр 'q' закодирован

let xhr = new XMLHttpRequest();
xhr.open('GET', url); // https://google.com/search?q=test+me%21

console.log('XHR --> ', xhr)

/*
let url = new URL(`https://api.vk.com/method/friends.getOnline?v=5.131&access_token=${token}`);
console.log(url);
let xhr = new XMLHttpRequest();
xhr.open('GET', url)
xhr.send()
xhr.onload = function() {
    if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else { // если всё прошло гладко, выводим результат
      alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
    }
  };
  
  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      alert(`Получено ${event.loaded} из ${event.total} байт`);
    } else {
      alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
    }
  
  };
  
  xhr.onerror = function() {
    alert("Запрос не удался");
  };
*/


// var xhr = new XMLHttpRequest();
// xhr.open('GET', `https://api.vk.com/method/friends.getOnline?v=5.131&access_token=${token}`, false);
// xhr.send();

// // 4. Если код ответа сервера не 200, то это ошибка
// if (xhr.status != 200) {
//     alert( xhr.status + ': ' + xhr.statusText );
//   } else {
//     alert( xhr.responseText );
// }


// console.log(`https://api.vk.com/method/friends.getOnline?v=5.131&access_token=${token}`)








// VK.Auth.login(function(response) {
//     if (response.session) {
//         VK.Api.call('users.get', { user_ids: 210700286, fields: 'bdate' }, function(r) {
//             if(r.response) {
//             alert(r.response[0].bdate);
//             }
//             });
//       if (response.settings) {
//         /* Выбранные настройки доступа пользователя, если они были запрошены */
//       }
//     } else {
//       /* Пользователь нажал кнопку Отмена в окне авторизации */
//     }
//   });

