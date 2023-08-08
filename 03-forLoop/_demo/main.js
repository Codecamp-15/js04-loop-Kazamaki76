console.log(" learn couting loop");

console.log(" starting....");
// () = parenthesis
// {} = bracket 
// [] = square bracket = ก้ามปู

// for (let i = 0; i < 3;  i++ ) {
//     console.log(" >> Hello");
//     console.log(" >>> Codecamp");
// }

// console.log("end...")

// ex 1 examine syntax
// for(let i = 2;  i <= 20; i = i + 2){
//     if (i % 2 == 0) console.log(i);
//     console.log(i);
// }

// EX 2 FizzBuzz
// for(let i = 1; i <= 20; i = i + 1 ) {
//     if(i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz"); 
//     else if (i % 5 == 0) console.log('Buzz');
//     else if (i % 3 == 0) console.log('Fizz')
//     else console.log(i); 
// }

// console.log('end...')


// EX 3
// for(let i = 1; i <= 20; i = i + 1 ) {
//     if(i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz"); 
//     else if (i % 5 == 0) console.log('Buzz');
//     else if (i % 3 == 0) continue;
//     else console.log(i); 
// }

// console.log('end...')

// EX3B :
// for (let i = 1; i <= 20; i++) {
//     // i = 2 log(2), log(even)
//     if (i % 2 == 0) console.log(i);
//     else continue; // update ค่า และเริ่มรัน loop รอบถัดไป
//     console.log('even');
// }

// EX4 : Concat String

// let str = '';

// for (let i = 1; i <= 10; i++) {
//     // Guard
//     if (i % 3 == 0) continue;
//     str += i;
//     // "" + 1 => "1"
//     // "1" + 2 => "12"
// }
// console.log(str); // "12345678910"

// EX5 : remove vowel (a,e,i,o,u)

// let src = 'codecamp';
// let res = ''; // cdcmp

// src.length ==> 8
// src[0] ==> c
// src[1] ==> o

// for (let i = 0; i < src.length; i++) {
//     // console.log(i, src[i]);
//     let c = src[i];
//     if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') continue;
//     res = res + src[i];
//     // '' + src[0] == '' + 'c' => 'c'
//     // 'c' + src[1] == 'c' + 'o' => 'co'
// }

// console.log(res);

// Advance : Nested Loop;
// Multiplication table

for (let i = 2; i <= 12; i++) {


    console.log(`เริ่มท่องสูตรคูณ ${i}`);
    for (let j = 1; j <= 12; j++) {



        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('\n');
}
console.log('end...');



