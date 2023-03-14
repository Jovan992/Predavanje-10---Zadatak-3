var clickMe = () => {
    alert("Welcome!")
}

var promeniText = () => {
    var p1 = document.getElementById("p1");
    p1.style.fontSize = "30px";
    p1.style.background = "white";
    p1.innerHTML = "Text has changed!";
}

var promeniSliku = () => {
    var s1 = document.getElementById("slika1");
    s1.src = "img/do.jpg"
}

var vratiSliku = () => {
    var s1 = document.getElementById("slika1");
    s1.src = "img/hello.jpg"
}

var provera = () => {
    var r1 = document.getElementById("Radio1");
    var r2 = document.getElementById("Radio2");
    var poruka = document.getElementById("span1");
    if (r1.checked) {
        poruka.innerHTML = "Selected Gender: Male";
    }
    else if (r2.checked) {
        poruka.innerHTML = "Selected Gender: Female";
    }
    else {
        poruka.innerHTML = "Selected Gender: None";
    }
}

var zadatak1a = () => {
    window.location.assign("Zadatak1a.html")
}

var nazad = () => {
    window.history.back()
}

var menjaPozadinu = () => {
    interval = setInterval(() => {
        pozadina();
    }, 1000);
}

menjaPozadinu();

var pozadina = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var div1 = document.getElementById("div1");
    div1.style.backgroundColor = "#" + randomColor;
}

var prikaziStavke = () => {
    var par1 = document.getElementById("sp1");
    var par2 = document.getElementById("sp2");
    var par3 = document.getElementById("sp3");
    par1.innerHTML = document.getElementById("fName").value;
    par2.innerHTML = document.getElementById("lName").value;
    par3.innerHTML = document.getElementById("fAnimal").value;
}