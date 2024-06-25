// Asynchronous programming

// Callbacks

// function fetchData(callbacks) {
//   setTimeout(function () {
//     const data = { message: 'User data is fetch' };
//     callbacks(data);
//   }, 3000);
// }

// function processData(data) {
//   console.log(data);
// }

// console.log('Start');

// fetchData(processData);

// console.log('End');

// Promises

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       const data = { message: 'USer data is not found' };
//       // resolve(data);
//       reject(data);
//     }, 2000);
//   });
// }

// console.log('Start');
// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log('End');

// Async/Await

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(function () {
      const data = { message: 'USer data is found' };
      resolve(data);
    }, 2000);
  });
}

const main = async () => {
  console.log('Start');
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log('Error-', error);
  }
  console.log('End');
};

main();

// Event Loop
