let isi = document.querySelector("#isi");
isi.innerHTML = "<h1>Bakso</h1>" + "<p>Deskripsi Bakso<p>" + "<img src='soto.jfif'>";

isi.innerHTML = "<h1>Rawon</h1>";
isi.innerHTML += "<p>Deskripsi Rawon</p>";
isi.innerHTML += "<img src='soto.jfif'>";

for (let i = 0; i < 10; i++) {
    console.log(i);

    document.querySelector("#paragraf").innerHTML += "<h1>"+i+"</h1>"
    
}

let tabel = document.querySelector("table");
tabel.innerHTML = "<th>nomerw</th>";
// tabel.innerHTML += "<td>1</td>";
// tabel.innerHTML += "<td>2</td>";
// tabel.innerHTML += "<td>3</td>";
// tabel.innerHTML += "<td>4</td>";
// tabel.innerHTML += "<td>5</td>";


for (let soto = 0; soto < 10; soto++) {
    tabel.innerHTML +="<td>"+soto+"</td>";
    
}
