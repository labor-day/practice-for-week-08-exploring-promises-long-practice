/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
function num1() {
  return 1;
}

async function num2() {
  return 2;
}

// console.log("num1", num1());
// num2().then(result => console.log(result));



/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here

async function waiting() {
  const value = await num2();
  console.log('waiting', value);
}

//waiting();

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here
async function waitForMyPromise() {
  const promise = new Promise(
    (resolve) => {
      setTimeout(
        () => {
          resolve("done!!!");
        }, 2000
      );
    }
  );

  const result = await promise;
  console.log("my promise is", result);
}

//waitForMyPromise();


/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here
// new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("done!");
//   }, 1500)
// }).then(r => console.log("then my other promise is", r));



/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function log(word) {
  wait(2000).then(() => console.log(word));
}

// log("hello");


/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
const tryRandomPromise = (random) => new Promise((resolve, reject) => {
  if (random > 0.5) {
    resolve("success!!!");
  } else {
    reject("random error");
  }
});

// tryRandomPromise(0)
//   .then(resolution => console.log(resolution))
//   .catch(error => console.log(error));

  for (let i = 1; i < 10; i++) {

    const random = Math.random();

      wait(2000 + random * 1000)
      .then(() => tryRandomPromise(random))
      .then(resolution => console.log(resolution, i))
      .catch(error => console.log(error, i));
  }


/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here

const tryRandomPromiseAsync = async (i) => {
  const random = Math.random();

  await wait(3000 + random * 1000);

  try {
    const result = await tryRandomPromise(random);
    console.log(result, i);
  } catch (error) {
    console.log(error, i);
  }
}

for (let i = 1; i < 10; i++) {
  tryRandomPromiseAsync(i);
}



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log("end of program");
