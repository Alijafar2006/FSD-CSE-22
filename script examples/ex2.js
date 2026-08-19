const num=[1,2,3,4,5,6,7,8,9,10];
const even=num.filter((n)=>n%2==0);
console.log("num=",num);
console.log("even=",even);
const square=num.map((n)=>n*n);
console.log("square=",square);
const sum=num.reduce((s,n)=>s+n,5);