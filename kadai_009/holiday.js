//祝日の配列
const holidays = ["正月","成人の日","建国記念日",
                "天皇誕生日","春分の日","昭和の日",
                "憲法記念日","みどりの日","こどもの日",
                "海の日","山の日","敬老の日",
                "秋分の日","スポーツの日","文化の日",
                "勤労感謝の日"];

//すべての祝日の数を定数に代入する
const nums = holidays.length;

//for文
console.log('for文の場合: ' + nums);

for(let i = 0; i < nums; i++){
    
    console.log('['+ i + ']'+ holidays[i]);
}


//while文
console.log('while文の場合: ' + nums);

//変数Countを初期化
let Count = 0;
//すべての祝日の数分、繰り返す
while (Count !== nums){
    
    console.log('['+ Count + ']'+ holidays[Count]);
    //Countに１を足して繰り返す
    Count = Count + 1;
}