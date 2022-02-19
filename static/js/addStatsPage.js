let params = new URLSearchParams(window.location.search);
user_token = params.get('access_token');
user_id = params.get('userId');

var script = document.createElement('SCRIPT');
script.src = `https://api.vk.com/method/users.get?user_ids=${user_id}&fields=bdate,verified,screen_name,&access_token=${user_token}&v=5.131&callback=getInfo`;
script.id = "deleteAfterUsing";
document.getElementsByTagName("head")[0].appendChild(script);
script.remove();

async function getListFriends(result){
    const mainDiv = document.body.firstChild.nextSibling.children[0].children[1];
    let countFriends = document.createElement('div');
    countFriends.className = "row mb-3";
    countFriends.innerHTML = `<div class="col-xl-12 themed-grid-col">Friends: ${result.response.count}</div>`;
    mainDiv.after(countFriends);
}


function getInfo(result){
    const mainDiv = document.body.firstChild.nextSibling.children[0];
    console.log(result.response[0]);

    if (result.response[0].verified == 1){
        verifiedUser = `<p class="details2">More stats about user: ${result.response[0].first_name} ${result.response[0].last_name}<i class="fas fa-user-check" title="Пользователь подтвержден"></i></span></p>`;
    } else {verifiedUser = `<p>More stats about user: ${result.response[0].first_name} ${result.response[0].last_name}</p>`}
    mainDiv.insertAdjacentHTML("afterbegin", verifiedUser);
    
    const screen_name = `<div class="row mb-3">
    <div class="col-xl-12 themed-grid-col">Nickname: ${result.response[0].screen_name}</div></div>`
    mainDiv.insertAdjacentHTML("beforeend", screen_name);

    var script = document.createElement('SCRIPT');
    script.src = `https://api.vk.com/method/friends.get?user_id=${user_id}&access_token=${user_token}&v=5.131&callback=getListFriends`;
    script.id = "deleteAfterUsing";
    document.getElementsByTagName("head")[0].appendChild(script);
    script.remove();

    const bdate = `<div class="row mb-3">
    <div class="col-xl-12 themed-grid-col">Birthday: ${result.response[0].bdate}</div></div>`
    mainDiv.insertAdjacentHTML("beforeend", bdate);
    
    const profileButton = `<div class="row">
    <p class="details"><a class="btn btn-secondary" href="https://vk.com/${result.response[0].screen_name}" role="button">Перейти на страницу пользователя</a></p></div>`
    mainDiv.insertAdjacentHTML("beforeend", profileButton);

    const backButton = `<div class="row">
    <p class="details"><a class="btn btn-secondary" href="search_page.html" role="button">Выбрать другого пользователя</a></p></div>`
    mainDiv.insertAdjacentHTML("beforeend", backButton);

}