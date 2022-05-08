let input = [
  { id: 1, title: 'AAAA', price: 100, count: 2 },
  { id: 2, title: 'BBBB', price: 300, count: 1 },
  { id: 3, title: 'CCCC', price: 200, count: 1 },
  { id: 4, title: 'DDDD', price: 500, count: 2 },
];

input.reduce(function(acc,item){acc[item.id]=item.price; return acc;},{});


function add(a, b){
  let result = a + b;
  return result;
}

add(1, 2);

// 箭頭函式
let add = (a, b) => {
  let result = a + b;
  return result;
}

