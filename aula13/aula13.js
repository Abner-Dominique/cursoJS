let umaString = "Um \"texto\"";

console.log(umaString);

let aString = "Um \\texto";
console.log(aString);

//             01234567  
let bString = "Um texto";
console.log(bString[4]);

//             01234567  
let cString = "Um texto";
console.log(cString.indexOf('to', 3));
console.log(cString.charAt(6));
console.log(cString.concat(' em um lindo dia.'));
console.log(cString + ' em um lindo dia.');
console.log(`${cString} em um lindo dia.`);

//             0123456789  
let dString = "O rato roeu a roupa do rei de roma.";
console.log(dString.lastIndexOf('m', 3));
console.log(dString.match(/[a-z]/g));
//console.log(dString.search(/x/)); 
//console.log(dString.replace('roma', 'outra'));
console.log(dString.replace(/r/g, '#'));
console.log(dString.length);
console.log(dString.slice(2, 6));
console.log(dString.slice(-5, -1));
console.log(dString.slice(30));
console.log(dString.substring(dString.length - 5, dString.length-1));

//             0123456789  
let eString = "O rato roeu a roupa do rei de roma.";
console.log(eString.split(' ', 3));
console.log(eString.toUpperCase());
console.log(eString.toLowerCase());