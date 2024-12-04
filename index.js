let correo = document.getElementById("correo");
let  = document.getElementById("seleccionar");
let mensaje = document.getElementById("descripcion");

function servicio(a){
    if(a == 1){
        mensaje.textContent = "Necesito sus servicios de: Análisis de Tendencias Personalizadas"
        seleccionar.value = "Análisis de Tendencias Personalizadas"
    }else if(a == 2){
        mensaje.textContent = "Necesito sus servicios de: Reportes de Viralidad de Contenidos"
        seleccionar.value = "Reportes de Viralidad de Contenidos"
    }else if(a == 3){
        mensaje.textContent = "Necesito sus servicios de: Optimización de Estrategias de Contenido"
        seleccionar.value = "Optimización de Estrategias de Contenido"
    }else if(a == 4){
        mensaje.textContent = "Necesito sus servicios de: Monitoreo de Competencia"
        seleccionar.value = "Monitoreo de Competencia"
    }else if(a == 5){
        mensaje.textContent = "Necesito sus servicios de: Visualización de Datos en Tiempo Real"
        seleccionar.value = "Visualización de Datos en Tiempo Real"
    }else if(a == 6){
        mensaje.textContent = "Necesito sus servicios de: Consultoría en Estrategia de Crecimiento"
        seleccionar.value = "Consultoría en Estrategia de Crecimiento"
    }
}
function enviar_correo(){
    if(correo.value && mensaje.value){
        alert("Su solicitud fue realizada, lo estaremos contactando atraves del Correo: "+correo.value)
    }
    else{
        alert("Favor completar todo los campos, para que sean enviados los datos")
    }
}