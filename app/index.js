import {students} from './students';
console.log(students);
// run();
// constTest();
// templateLiteralTest();
// spreadOperatorTest();
// destructuringAssignmentTest();
// destructuringAssignmentObjTest();
// arrowFunctionTest();
// arraowFunctionTest1();
// mapfunctionTest();
filterTest();

// keyword: let
// 在範圍內可以使用該變數，超出區域範圍即無法讀取該變數
function run() {
    let b = 2;
    console.log(b);
    {
        let b = 3;
        console.log(b);
    }
}

// keyword: const
function constTest(){
  //read only
  //保護變數內容
  //改善效能
  const a = 3000;
  const array = [1,2,3];
  console.log(array);
  array.push(4);
  console.log(array);
  array[0] = 0;
  console.log(array);
  //array = [2,3];
  //console.log(array);
}

// keyword: Template Literal
// ${變數名稱}
function templateLiteralTest(){
  var a = 'hello';
  var b = 'world';
  var c = a + ' ' + b;
  console.log(c);

  let d = `${a} ${b}`;
  console.log(d);
}

// keyword: Spread Operator
// ...
function spreadOperatorTest(){
  let a = [7, 8, 9];
  let b = [6, ...a, 10];
  console.log(b);

  //ES2015
  // var a = [7, 8, 9];
  // var b = [6].concat(a, [10]);
  // console.log(b);

  let z = [1,2,3];
  print(...z);
  //print.apply(undefined, z);

  spreadOperatorPrint(1,2,3,4,5,6,7,8);
}
function print(a,b,c){
  console.log(a,b,c);
}
function spreadOperatorPrint(...z){
  console.log(z);
}

// keyword: Destructuring Assignment
// {變數} = 變數
function destructuringAssignmentTest(){
  let a = [100, 200, 300];
  let [b,c,d] = a;
  console.log(b,c,d);
  let e = [1000,2000, "hi",400];
  let [f,...g] =e;
  console.log('f',f);
  console.log('g',g);
  // var f = e[0],
  // g = e.slice(1);
}
// keyword: Destructuring Assignment (Object)
// {物件欄位,物件欄位...} = 變數
function destructuringAssignmentObjTest(){
  let fullName = {firstName: 'Harry', lastName:　'Chan'};
  // let firstName = fullName.firstName;
  // let lastName = fullName.lastName;

  // 根據物件的名稱對應參數名稱配直
  let {firstName, lastName} = fullName;
  console.log(firstName, lastName);

  // 與物件名稱不符，無法配對到值 undefined
  let {firstName1, lastName1} = fullName;

  fullName.firstName = 'John';
  fullName.lastName = 'Tsai';
  // 從上述假設firstName 已經有配值，不想重新宣告變數firstName1，而是用現有變數接
  // 解法: ()包起來表是同一個scope
  ({firstName, lastName} = fullName);

  console.log(firstName, lastName, firstName1);
}


// keyword: Arrow function
function arrowFunctionTest(){
  const a = () => {
    console.log('Hello World');
  }
  a();
}
function arraowFunctionTest1(){
  let eye = "eye";
  const fire = (e) => {
     return `bulls-${e}`;
   }
   console.log(fire(eye));
}

// keyword: Map function
function mapfunctionTest(){
  let points = [10, 20, 30];
  points = points.map(point => point + 1);
  console.log(points);

  // points = points.map(function (point) {
  //   return point + 1;
  // });
}

// keyword: Filter function
function filterTest(){
  let isPassing = (grade) => {
    return grade >= 80;
  }

  let scores = [90,55,66,79,88,80,81,66,33];
  let passing = scores.filter(isPassing);
  let passingByArrow = scores.filter(score => score >= 80);
  console.log(passing);
  console.log(passingByArrow);
}
// keywords: find() forEach() reduce() some() keys() values()
