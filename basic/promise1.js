// new Promise(executor);
let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function (job, timer) {
  return new Promise((resolve, reject) => {
    // 做非同步工作
    setTimeout(() => {
      let dt = new Date();
      let result = `完成工作: ${job} at ${dt.toISOString()}`;
      resolve(result);
    }, timer);
  });
};

let doBrushPromise = doWork("刷牙", 3000);
// console.log(doWorkPromise);
doBrushPromise
  .then((result) => {
    // 這裡接到成功結果
    console.log(result);

    let doEatPromise = doWork("吃早餐", 5000);
    return doEatPromise;
  })
  .then((result) => {
    console.log(result);

    let doWorkPromise = doWork("寫功課", 3000);
    return doWorkPromise;
  })
  .then((result) => {
    console.log(result);
  });
