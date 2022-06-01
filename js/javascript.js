var entrada = 200;

function resumen() {
    var cant=parseInt(document.getElementById("cantidad").value);
    var cat=parseFloat(document.getElementById("categoria").value);
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var correo=document.getElementById("correo").value;
    var aposition=correo.indexOf("@");  
    var punposition=correo.lastIndexOf("."); 

    if ( nombre=="" || apellido=="" || correo=="" || cant<1 || aposition<1 || punposition<1 || aposition>punposition || isNaN(cant)){
        
        var mensaje="";
        nombre=="" ? (document.getElementById("nombre").style.borderColor="#842430"):document.getElementById("nombre").style.borderColor="#d1d5d8";

        apellido=="" ? (document.getElementById("apellido").style.borderColor="#842430"):document.getElementById("apellido").style.borderColor="#d1d5d8";

        correo=="" ? (document.getElementById("correo").style.borderColor="#842430") : (aposition<1 || punposition<1 || aposition>punposition) ? (document.getElementById("correo").style.borderColor="#842430"):document.getElementById("correo").style.borderColor="#d1d5d8";
        
        isNaN(cant) ? (document.getElementById("cantidad").style.borderColor="#842430"):cant<1 ? (document.getElementById("cantidad").style.borderColor="#842430"):document.getElementById("cantidad").style.borderColor="#d1d5d8";
       
    }
    else if (cant>0){
        let resultado = (cant*entrada)*cat;
        document.getElementById("nombre").style.borderColor="#d1d5d8";
        document.getElementById("apellido").style.borderColor="#d1d5d8";
        document.getElementById("correo").style.borderColor="#d1d5d8";
        document.getElementById("cantidad").style.borderColor="#d1d5d8";
        document.getElementById("total").value= resultado;

    }
}

