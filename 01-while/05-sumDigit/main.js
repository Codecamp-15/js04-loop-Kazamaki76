console.log('Problem');

let n = +prompt("enter number");
console.log(n);

let count = 0 ;
if (n < 0) n = -n; 

while (n > 1) {
    console.log(n);
    count++;

    n = n / 10 ;
}
console.log(count) ;