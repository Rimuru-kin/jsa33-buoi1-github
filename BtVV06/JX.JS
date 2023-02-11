function CheckBrower() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}

function doShowAll() {
    if (CheckBrower()) {
        var key = "";
        var list = "<tr><th>Item</th><th>Value</th></tr>\n";
        var i = 0;

        for (i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td><td>" + localStorage.getItem(key) + "</td><tr>\n";

        }
        if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty<i></td></tr>\n";
        }
        document.getElementById('list').innerHTML = list;
    } else {
        alert('Canot save shopping lsit as your browser does not support HtML 5');
    }
}