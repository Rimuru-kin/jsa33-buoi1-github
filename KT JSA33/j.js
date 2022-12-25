function findEven() {
    for (i = 4; i <= number; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
var number = prompt();
findEven();

function numberone() {
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            document.write('1')
        }
        document.write('<br/>')
    }
}


numberone();