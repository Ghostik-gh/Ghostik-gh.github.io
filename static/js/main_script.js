
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
let url = new URL('https://api.vk.com/method/users.get?v=5.131&access_token=6c857c7502850f1fd06bd4de84dfdf4bb1a90b77795104e1cc2d29fcff3196dee35247277eefbb6770b9b');

fetch(url) .then(res => res.json()) .then(console.log)
