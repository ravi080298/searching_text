var num = 10;

// const func = () => {
//   let vari = "something"
//   return function another(){
//     console.log("xyz");
//     another()
//   }
// }

// var declare = "declaring";
// function func() {
//   console.log("something");
// }

// var teacher = "yash"
// function otherClass() {
//   var teacher = "priyam"
//   console.log("welcome");
// }
let teacher = "yash";

function otherClass() {
  teacher = "priyam";
  //ask("why?");
  return function ask(question) {
    console.log(teacher, question);
  };
  // ask("why?")
}
//otherClass()("why?");
const askfunction = otherClass();
console.log(askfunction("New"));
console.log(teacher);
