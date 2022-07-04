let l1 = [3, 6, 8, 0];
let l2 = [3, 6, 8, 0];
let num1 = 0;
let num2 = 0;
for(let i = 0; i < l1.length; i++) {
    num1 += l1[i] * 10**(l1.length - i - 1);
}
for(let i = 0; i < l2.length; i++) {
    num2 += l1[i] * 10**(l2.length - i - 1);
}
let str = String(num1 + num2);
let result = [];
for (let i = 0; i < str.length; i++) {
    result[i] = Number(str[str.length - i - 1]);
}
console.log(result);