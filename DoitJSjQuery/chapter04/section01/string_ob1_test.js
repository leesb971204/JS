var t = "Hello Thank you good luck to you";
console.log(t.charAt(16));
console.log(t.indexOf("you"));
console.log(t.indexOf("you", 16));
console.log(t.lastIndexOf("you"));
console.log(t.lastIndexOf("you", 25));
console.log(t.match("luck"));
console.log(t.search("you"));
console.log(t.substr(21, 4));
console.log(t.substring(6, 12));
console.log(t.replace("you", "me"));
console.log(t.toLowerCase());
console.log(t.toUpperCase());
console.log(t.length);

var s = t.split(" ");
console.log(s[0]);
console.log(s[4]);

var str = "A";
var t = str.charCodeAt(0);

console.log(t);
console.log(String.fromCodePoint(65));
