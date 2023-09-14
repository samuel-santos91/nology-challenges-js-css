const delayedIncDec = (n, mode, timeout = 2500) => {
  return new Promise((resolve, reject) => {
    if (typeof n !== "number") {
      reject(new Error("n must be a number"));
    }
    if (mode !== "inc" && mode !== "dec") {
      reject(new Error("mode must be either 'inc' or 'dec'"));
    }
    setTimeout(() => {
      if (mode === "inc") {
        resolve(n + 1);
      } else {
        resolve(n - 1);
      }
    }, timeout);
  });
};

delayedIncDec(3, "dec", 1000)
  .then((value) => console.log(value))
  .catch((e) => console.log(e.message));

delayedIncDec(4, "inc")
  .then((value) => console.log(value))
  .catch((e) => console.log(e.message));

delayedIncDec(5, "dec", 5000)
  .then((value) => console.log(value))
  .catch((e) => console.log(e.message));

/////////////////////////////////////////////////////

const delayFilter = (array, callback, timeout = 2500) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      reject(new Error("Array not valid"));
    }
    if (typeof callback !== "function") {
      reject(new Error("Function not valid"));
    }
    setTimeout(() => {
      resolve(array.filter(callback));
    }, timeout);
  });
};

delayFilter([1, 2, 2], (elem) => elem > 1, 1000)
  .then((value) => console.log(value))
  .catch((e) => console.log(e.message));

delayFilter([5, 1, 2], (elem) => elem > 2)
  .then((value) => console.log(value))
  .catch((e) => console.log(e.message));

delayFilter([3, 3, 2], (elem) => elem !== 2, 5000)
  .then((value) => console.log(value))
  .catch((e) => console.log(e.message));
