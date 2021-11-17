
    // console.log(a);
    // // var a;
    // var a = 10;
    // //let b;
    // let b=20;
    // console.log(b);
    // {
    //     var c=10;
    //     console.log(c);
    //     let d=20;
    //     console.console.log(d);
    // }
    //   console.log(c);
    //   console.log(d);
// const a="10";
// //const b;  // error
// //a=20;   //error
// console.log(a);
// // const myArr={
// //     //5000
// //     name: "Rajan",
// // };
// // // myArr=5000
// // myArr.name="Rajan";
// // myArr={   //error
// // name:"Rajan",
// // };
// // console.log(myArr);
// let myString1="abc@xyz.com";
// let myString2="abc@xyz.com";
// console.log(myString1.toUpperCase() ===myString2.toUpperCase());
// //  o/p true
// for(let i=0; i<myString1.length; i++);{
//     console.log(myString1(i));
// }
// let input="abcdafgdbjc";
// let output="";


// for(let i=0; i<input.length;i++)
// {
//     let count=0;
// for(let j=0; j<input.length; j++){
//     if(input[i]===input[j] && i<=j){
//         count++;
//         if(count>1){
//             output=output+input[i];
//             break;
            
//         }

//     }
// }
    
// }
// console.log(output);
// //Array
// let myArr=[1,2,3,4,5,"my String",["A","b"]];
// let myArr=[1,2,3,4,5];
// let myArr1=[1,2,3,4,5];
// isSame=true;
// for(let i=0; i<myArr.length; i++){
//     if(myArr[i]!==myArr1){
//         isSame=False;
//     }
// }
// console.log(myArr===myArr1);
// console.log(isSame);//false
//  let input="India is my country";
//let output="aidnI si ym yrtnuoc";
//  output="";

// function reverseString(value){
//     let returnValue="";
//     for(let i=value.length-1; i>-1; i--){
//         returnValue=returnValue+value[i];
//     }
//     return returnValue;

// }
// let wordString ="";
// for(let i=0; i<input.length; i++){
//   if(input[i]===" "){
//       output=output+reverseString(wordString)+"  ";
//       console.log(wordString);
//       wordString="";
//       continue;
//   }  
//   else{
//       wordString=wordString+input[i];
//       if(i+1===input.length){
//         output=output+reverseString(wordString); 
//           console.log(wordString)
//           wordString="";

//       }
//   }
// // }
// // console.log(output);
// //function
// console.log(addNumbers(10,20));
// console.log(addNumber2);
// //Arrow function
// const addNumbersArrow=(nuber1,number2)=>{
// return number1+number2;
// };
// console.log(addNumbers2(10,20));
// console.log(addNumbersArrow)
//this
// const myObject ={
//     //1000
//     name:"akshya",
//     getName:function (){
//         return this.name;
//     },
// };
// const myNewObject={
//     //20000
//     name: "ankit",
// };
// //myobject.get name-.10000
// const newGetNmae=myObject.getName.bind(myNewObject);
// console.log(myObject.getName());
// console.log(newGetNmae());


// //constructoe function
// function Person(name,age){
//     //chek if called with new key word
//     if(!new.target){
//         return new Person(name,age);

//     }
//     this.name=name;
//     //this.number=1234;
//     this.age=age;
//     //return {name};
//     //return[1234];
// }
// const PersonObject=new Person("Rajan",29);
// const PersonObject1=Person("Rajan",29);//same o/p
// console.log(PersonObject);
// console.log(PersonObject1);
//Destructing
// const a= myArr[0];
// const b= myArr[1];
// const c= myArr[2];
// const D=myArr[3];
//Constracting
//const myArr=[1,2,3,4];
//const a=myArr[0];
// const b=myArr[1];
// const c=myArr[2];
// const d=myArr[3];
// const [a,b,c,d]=myArr; //Sequence is very important 
// console.log(a,b,c,d);
// const myObject={name:"Rajan",age:29,};
// const{age,name}=muObject;
// console.log(name,age);

//spread operator
// const myArr=[1,2,3,4,5];
// const myArrNew=[];
// for(let i=0; i<myArr.length; i++){
//     myArrNew.push(myArr[i]);
// }

// console.log(...myArr);
// myArr.push(6);
// console.log(myArr);
// console.log(myArrNew);
// const myObject={
//     name:"Rajan",
// };
// const myNewObject={ ...myObject};
// console.log(myObject);
// console.log(myNewObject);
// myObject.name="arum";
// console.log(myObject);
// console.log(myNewObject);
function addNumbers( ...args){
    //const =[10,20,30,40,50];
    let result=0;
    for(let i=0;i<args.length; i++){
        result+=args[i];
    }
    return result;
}
console.log(10,20,30,40);