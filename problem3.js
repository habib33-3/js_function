function make_avg(arr, length) {
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += arr[i];
  }

  let avg = sum / length;

  return avg;
}

let a = [3, 5, 3, 2, 1, 2];
let l = a.length;

let avg = make_avg(a, l);
console.log(avg);
