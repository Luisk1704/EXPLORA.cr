function calculo() {
  try {
    let dias = parseInt(document.getElementById("cant-days").value);
    let personas = parseInt(document.getElementById("cant-pers").value);
    let precio = parseInt(document.getElementById("educational-level").value);

    let total = personas * precio * dias;
    let impuesto = 0.13 * total;
    let neto = total + impuesto;

    if(document.getElementById("cant-days").value == "" || 
    document.getElementById("cant-pers").value == "" || 
    document.getElementById("educational-level").value == "") throw "Debe escribir un valor";

    if(isNaN(dias) || isNaN(personas) || isNaN(precio)) throw "Debe escribir un numero";    

    let factura = "\nCantidad de dias: " + dias;
    factura += "\nCantidad de personas "+personas;
    factura += "\nPrecio destino"+personas;
    factura += "\nTotal: "+total;
    factura += "\nIV: 13%";
    factura += "\nPrecio Neto: "+neto;

    window.alert(factura);
  } catch (error) {
    window.alert("Error: "+error);
    return;
  }
}

function muestravalor() {
  document.getElementById("show").innerHTML = document.getElementById("range").value;
}

function valida() {
  try {
    if (document.getElementById("male").checked && 
    document.getElementById("female").checked) throw "Debe seleccionar un solo genero";
    if (document.getElementById("male").checked == false && 
    document.getElementById("female").checked == false) throw "Debe seleccionar un genero"; 
    if (document.getElementById("name").value == "" || document.getElementById("middlename").value == "" ||
    document.getElementById("lastname").value == "" || document.getElementById("email").value == "") throw "Debe escribir un valor";
    if (document.getElementById("date").value == "") throw "Debe seleccionar una fecha";
    if (document.getElementById("range").value == "0") throw "Debe tener un rango mayor a 0";

    window.alert("Formulario enviado con exito");
    document.getElementById("form").action = "https://formsubmit.co/lamoresvi@est.utn.ac.cr";
    document.getElementById("form").method = "POST";
  } catch (error) {
    window.alert("Error: "+error);
  }
}
