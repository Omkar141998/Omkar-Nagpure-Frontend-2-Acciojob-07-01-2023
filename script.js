/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap(){
  //Write your code here
  const PrintDeveloperbyMap = () => {
    const developers = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];
    developers.map(developer => {
      if(developer.profession === "developer") {
        console.log(developer);
      }
    });
  }
}

function PrintDeveloperbyForEach() {
  const PrintDeveloperbyForEach = () => {
    const developers = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];
    developers.forEach(developer => {
      if(developer.profession === "developer") {
        console.log(developer);
      }
    });
  }
}

function addData() {
  //Write your code here
  let data = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];
  data.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(data);
}

function removeAdmin() {
  //Write your code here
  let array = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];
  array = array.filter(obj => obj.profession !== 'admin');
  console.log(array);
}

function concatenateArray() {
  //Write your code here
  let array1 = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];
  let array2 = [{id:4,name:"susan",age:"20",profession:"intern"},{id:5, name:"jill",age:"21", profession:"teacher"},{id:6, name:"bob", age:"22",profession:"designer"}];
  let newArray = array1.concat(array2);
  console.log(newArray)
}

