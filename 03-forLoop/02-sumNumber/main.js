let ans = 0
for( let i = 1; i <= 100; i++){
    ans =  ans + i 
//     if () {
//         console.log(i)
//          } 
}
console.log(ans)  


// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
let ans2 = 0

for (let i = 2; i <= 100; i++ ){
    if (i % 2 == 0 ) ans2 = i + ans2
}
console.log(ans2)  


let ans3 = 0


for (let i = 1; i <= 100; i++ ){
    if (i % 2 !== 0 ) ans3 = i + ans3
}
console.log(ans3)  


// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

let ans4 = 0

for(let i = 1; i <= 100; i++ ) {
    if (i % 2 == 0) {
        // console.log(`$ {i}^2`)
        // ans4 = ans4 + i ** 2; 
    }

    if( i % 3 === 0){
        console.log()

    } 
}
console.log(ans4)






