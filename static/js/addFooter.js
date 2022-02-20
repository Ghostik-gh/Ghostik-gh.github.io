/* 
Fotter можно добавлять только в файл с блоком main
иначе отображаться будет некоректно
*/
let footer = document.createElement('footer');
footer.className = "card-footer";
footer.innerHTML = `<div class="container">
<span class="text-muted">released by @ghostik-gh</span>
</div>`;
const main = document.body.children[0];
main.after(footer);