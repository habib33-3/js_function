function make_avg(a, b, c) {
  let sum = a + b + c;
  let avg = sum / 3;
  return avg;
}
let a = 6;
let b = 4;
let c = 7;

let avg = make_avg(a, b, c);

console.log(avg);
