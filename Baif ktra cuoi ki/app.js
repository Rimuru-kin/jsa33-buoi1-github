let menu = ["rau xao", "thit luot", "ga ran"];
localStorage.setItem('menu', 'Thit heo')
let D = sessionStorage.getItem('menu');
let n = prompt("Nguoi dung nhap vao so mon an muon luu:");
n = Number(n);
let i = 1
do {
    let x = prompt(`Moi nguoi dung nhap mon an thu ${i}`);
    menu.push(x);
    i = i + 1;
}
while (i <= n) {
    console.log("Menu mon an hien tai:", menu)
}
let input;
do {
    input = prompt("Moi nguoi dung nhap vao C,R,U,D")
    if (input == 'c') {
        menu.push(prompt("Moi nguoi dung nhap mon an muon them"))
        console.log("Menu mon an muon them la", menu)
    } else if (input == 'r') {
        function myFunction() {
            var subject = ["Rau xao", "Thit luot", "ga ran"];
            var x = document.getElementById("demo");
            x.innerHTML = subject.join();
        }
        console.log("Menu mon an sau khi the la", menu)
    } else if (input == 'u') {
        let vitriUpdate = menu.indexOf(prompt("nguoi dung nhap m"));
        menu[vitriUpdate] = prompt("nguoi dung nhap ten mon an moi")
        console.log("Menu sau khi update", menu)
    } else if (input == 'd') {
        let vitriDelete = menu.indexOf(prompt("nguoi dung muon nhap mon an muon delete:"))
        menu.splice(vitriDelete, 1);
        console.log("Menu mon an sau khi delete la :", menu);
    } else {
        alert("Khong ton tai => thoat vong lap");
    }
}
while (input == 'c' || input == 'r' || input == 'u' || input == 'd')

function getData() {




    fetch('https://pokeapi.co/api/v2/pokemon/ditto')

    .then(res => res.json())
        .then(data => {



            let author = data.results;



            let output = "<h2><center>Get User Data</center></h2>";



            author.forEach(function(lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Phone Number: ${lists.cell}</li>
                            <li class="list-group-item">DOB: ${lists.dob.date}</li>
                            <li class="list-group-item">Age: ${lists.dob.age}</li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">Gender: ${lists.gender}</li>
                            <li class="list-group-item">City: ${lists.location.city}</li>
                            <li class="list-group-item">Country: ${lists.location.country}</li>
                            <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                        </ul>
                    </div>
                </div> `;
            });



            document.getElementById('output').innerHTML = output;


        });
};