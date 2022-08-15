async function getfile() {
    let objeto = await fetch("file/home.html");
    let text = await objeto.text();
    document.getElementById("contenido").innerHTML = text;
}

async function getfile2(){
    let objeto = await fetch("file/acerca_de.html");
    let text = await objeto.text();
    document.getElementById("contenido").innerHTML = text;
}

async function getfile3(){
    let objeto = await fetch("file/acerca_del.html");
    let text = await objeto.text();
    document.getElementById("contenido").innerHTML = text;
}

async function getfile4(){
    let objeto = await fetch("file/historia.html");
    let text = await objeto.text();
    document.getElementById("contenido").innerHTML = text;
}

async function getfile6(){
    let objeto = await fetch("file/galería.html");
    let text = await objeto.text();
    document.getElementById("contenido").innerHTML = text;
}

async function getfile5(){
    let objeto = await fetch("file/datos.html");
    let text = await objeto.text();
    document.getElementById("contenido").innerHTML = text;
}

function getfile7() {
    $.ajax({
        url: "file/contacto.html", success: function (result) {
            $("#contenido").html(result);
        }
    });
}
