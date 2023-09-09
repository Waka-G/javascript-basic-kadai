//変数numを0から15まで繰り返す
let num = Math.floor(Math.random() * 16);

//変数(num)が3の倍数の場合
if (((num % 3) == 0) && ((num % 5) != 0)){
    console.log('3の倍数です: ' + num);
}
//変数(num)が5の倍数の場合
else if(((num % 3) != 0) && ((num % 5) == 0)){
    console.log('5の倍数です: ' + num);
}

//変数(num)が3と5の倍数の場合
else if(((num % 3) == 0) && ((num % 5) == 0) && (num != 0)){
    console.log('3と5の倍数です: ' + num);
}

//それ以外の場合： 変数(num)を出力する
else{
    console.log('それ以外の数: ' + num);
}







