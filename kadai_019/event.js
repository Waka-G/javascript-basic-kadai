//h2のid名「text」HTML要素を取得し、定数を代入する
const text = document.getElementById('text');

//id名[btn]のHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');


//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() => {
    //ボタンを押したときに文字を変更
    text.textContent = 'ボタンをクリックしました';
})