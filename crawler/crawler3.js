// await version
// 1. read stock no from file (fs)
// 2. axios.get to request data

// read stock no from stock.txt

// npm i axios
const axios = require("axios");
const fs = require("fs/promises");

(async function () {
  let num = await fs.readFile("stock.txt", "utf-8");
  let data = await axios.get(
    "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
    {
      params: {
        // 設定 query string
        response: "json",
        date: "20220301",
        stockNo: num,
      },
    }
  );
  console.log(data);
})();

// (async function() {
//     let p = new Promise((resolve, reject) => {
//     fs.readFile("stock.txt", "utf-8", (err, stockNo) => {
//         if (err) {
//         reject(err);
//         } else {
//         resolve(stockNo);
//         // https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220301&stockNo=2330
//         }
//     });
//     });

//     let num = await p;
//     let data = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
//         params: {
//             // 設定 query string
//             response: "json",
//             date: "20220301",
//             stockNo: num,
//         },
//     });
//     console.log(data);
// })();

// p.then((stockNo) => {
//   //...
//   return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
//     params: {
//       // 設定 query string
//       response: "json",
//       date: "20220301",
//       stockNo: stockNo,
//     },
//   });
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// //
// (async function() {
//         const response = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
//           params: {
//             // 設定 query string
//             response: "json",
//             date: "20220301",
//             stockNo: stockNo,
//           },
//         });
//         console.log(response);

//     })();
