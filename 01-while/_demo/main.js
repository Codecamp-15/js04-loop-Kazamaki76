// console.log('learm while loop');

// //type of loop 
// // 1 condition loop ตัดสินใจว่าจะรันต่อไหม base on boolean 
// // counting loop 'ตัดสินใจว่าจะรันต่อไหม' จากตัวเลข
// // List loop 'ตัดสินใจว่าจะรันต่อไหม' จากจำนวนของในรายการ
// console.log("starting...")

// let i = 1;

// while ( i <= 20){
//     // loop block
//     if( i % 3 == 0 ){
//     console.log(i);
//     }
//     i++;
// }

// console.log("end...")


// หาร 3 ไม่ลงตัว

// // if (i % 3 !=0) {
//     console.log (i % 3)

// }

// while ( i <= 20)
// if (i % 5 == 0){
//     console.log ('${i} : HighFive' ); 
// } else if (i % 3 == 0 ) {
//     console.log(i);
// }

// i++


// FizzBuzz PRoblem 
// range : 1-20 ;
// divide by 3 ; PRINT Fizz
// divide by 5 ; PRINT Buzz
// divide bu 3 and 5 : PRINT FizzBuzz
// other : PRINT number
//  learn later ///////////////////////////////////////////////////
// while (i <= 20 ) {
//     if (i % 3 === 0 ){
//         console.log('fizz') ;
//     } else {
//         console.log (i)    
//     }
//     if (i % 5 === 0 ){
//         console.log('buzz') ;
//     } else {
//         console.log (i)
//     }
//     i++;
//     console.log ('end')
// }

// เฉลย ฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝ

while (i <= 20 ) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz') ;
    } else if (i % 3 === 0) {
        console.log('Fizz') ;
    } else if (i % 5 === 0) {
        console.log('Buzz') ;
    } else {
        console.log(i) ;
    }
}


    console.log ('end...') ;
