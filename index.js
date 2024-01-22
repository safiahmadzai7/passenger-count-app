// // // // // // document.getElementById("count-el").innerHTML=5;
// // // // // // document.querySelector("#count-el").textContent=7;
// // // // // // document.getElementById("count-el").innerHTML=6;
// // // // // // let myage=22;
// // // // // // console.log(myage);
// // // // // // let number=0;
// // // // // // console.log(number);

// // // // // let myage=1;
// // // // // let dogage=7;
// // // // // let mydogage=myage*dogage;
// // // // // console.log(mydogage);

// // // // let bunospoint=50;
// // // // bunospoint=bunospoint*2;
// // // // console.log(bunospoint);
// // // // bunospoint=bunospoint-25;
// // // // console.log(bunospoint);
// // // // bunospoint=bunospoint/3;
// // // // console.log(bunospoint);

// // // let count=0;
// // // document.getElementById("increment-btn").addEventListener("click",function(){
// // //     count=count+1;
// // //     document.getElementById("count-el").textContent=count;
// // // })

// // // function increment(){
// // //     console.log("the button was clicked");
// // // }
// // function countdown(){
// //     console.log(5)
// //     console.log(4)
// //     console.log(3)
// //     console.log(2)
// //     console.log(1)
// // }
// // countdown();
// // countdown();

// // function logger(){
// //     console.log(42);
// // }
// // logger();
// // let lap1=20;
// // let lap2=20;
// // let lap3=20;

// // function sumoflap(){
// // let total=lap1+lap2+lap3;
// // console.log(total)
// // }

// // sumoflap();

// // let latcom=0;
// // function lapcom(){
// //     latcom=latcom+1;
// // }
// // lapcom();
// // lapcom();
// // lapcom();
// // console.log(latcom);
// let name = "safiullah";
// let greeting = "hello world";
// let namegreeting = name + greeting;
// console.log(namegreeting);
// let firsr_string = "hello messsage";
// let username = "per";
// console.log(firsr_string);
// console.log(username);

// let name = "safi";
// let lastname = "welcome back ";
// let namelastname = lastname + name;
// let h1 = document.getElementById("h1");
// h1.innerText = namelastname;
// h1.innerText = h1.innerText + "imogi";

let count_el = document.getElementById("count-el");
let save_el = document.getElementById("save-el");

let count = 0;
function increment() {
  count = count + 1;
  count_el.textContent = count;
}
function save() {
  let count_num = count + "-";
  save_el.textContent += count_num;
  count = 0;
  count_el.textContent = count;
}
