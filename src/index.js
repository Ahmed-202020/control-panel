import "./assets/sass/style.scss";
import "normalize.css/normalize.css";

var student = require('./studentName.js');
var student1 = new student("Ahmed" , "Hassan");
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// setTimeout(function(){alert("Hello world")} ,4000);
setTimeout(() =>alert("Hello world2") , 4000);


// studentName("Ahmed" , "Nada")