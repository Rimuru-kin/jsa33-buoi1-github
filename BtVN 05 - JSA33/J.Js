localStorage.setItem('name 1', 'Quang')
localStorage.setItem('name 2', 'Duc')
let name1 = sessionStorage.getItem('name 1');
let name2 = sessionStorage.getItem('name 2');
localStorage.removeItem('name 1')
let name3 = localStorage.setItem('name1', 'Hieu');

localStorage.setItem('name 3', 'Khai')
localStorage.removeItem('name 3');

localStorage.clear();

No1 = "You were the shadow to my light";
No2 = "Did you feel us";
No3 = "Another start";
No4 = "You fade away";
No5 = "Afraid our aim is out of sight";

var Tab1 = function() {
    document.getElementById('line1').innerHTML = No1;
};
setTimeout(Tab1, 1000);
var Tab2 = function() {
    document.getElementById('line2').innerHTML = No2;
};
setTimeout(Tab2, 2000);
var Tab3 = function() {
    document.getElementById('line3').innerHTML = No3;
};
setTimeout(Tab3, 3000);
var Tab4 = function() {
    document.getElementById('line4').innerHTML = No4;
};
setTimeout(Tab4, 4000);
var Tab5 = function() {
    document.getElementById('line5').innerHTML = No5;
};
setTimeout(Tab5, 5000);