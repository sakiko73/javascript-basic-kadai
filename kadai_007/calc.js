//変数numを設定
let num = 63; 

//3と5の倍数
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
}
//3の倍数
else if (num % 3 === 0) {
    console.log("3の倍数です");
}
//5の倍数
else if (num % 5 === 0) {
    console.log("5の倍数です");
}
//それ以外は変数numを出力
else {
    console.log(num);
}