//定数に代入して2乗の計算結果を出力する(アロー関数)
const arrowSquare = (Num) => {
    const X = Num * Num;
    console.log('アロー関数:' + Num + 'の2乗は、' + X);
}

//宣言した関数「arrowSquare」に、定数に代入する
arrowSquare(3);

//定数に代入して2乗の計算結果を出力する(function関数)
function funSquare(Num){
    const Y = Num * Num;
    console.log('function関数:' + Num + 'の2乗は、' + Y);
}

//宣言した関数「funSquare」に、定数に代入する
funSquare(4);