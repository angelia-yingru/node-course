// 回傳 1 + 2 + ... + n 的結果

let sum = 0;
let n = 10;
for(let i = 1; i <= n; i++){
  sum = sum + i;
}



console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(10)); // 55
console.log(sum(100)); // 5050 