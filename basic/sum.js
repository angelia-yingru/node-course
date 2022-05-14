// 回傳 1 + 2 + ... + n 的結果
function sum1(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum = sum + i;
  }
  return sum;
  // return 結果
}


function sum2(n){
  return ((n+1)*n)/2;
}


function sum3(n) {
  [1,2,3,...n].reduce((sum,item) => sum +item,0);
}



console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(10)); // 55
console.log(sum(100)); // 5050 