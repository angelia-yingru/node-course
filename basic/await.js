// p.then((data) => {
//   console.log('成功');
//   console.log(data);
// }).catch((err) => {
//   console.log('失敗');
//   console.log(err);
// });

(async function () {
    try {
      let result = await p;
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
  
)();