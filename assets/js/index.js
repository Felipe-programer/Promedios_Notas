//alert("Si estoy ejecutandome!")
document.getElementById("alumno").value="";
document.getElementById("cNota1").value="";
document.getElementById("cNota2").value="";
document.getElementById("cNota3").value="";

document.getElementById("saveDataBtn").addEventListener("click",function(e){
    e.preventDefault()
    var nota1=document.getElementById("nota1").value
    var nota2=document.getElementById("nota2").value
    var nota3=document.getElementById("nota3").value
    var studentID = document.getElementById("studentId").value
    var studentName = document.getElementById("studentName").value
    console.log(studentID,studentName)
    if(studentID=="" || studentName==""){
        alert("Debe llenar los campos!")
    }else{
        localStorage.setItem(studentID,[studentName,nota1,nota2,nota3])
        alert("Todo quedó guardado!");
        /* limpiar el formulario */
        document.getElementById("nota1").value="";
        document.getElementById("nota2").value="";
        document.getElementById("nota3").value="";
        document.getElementById("studentName").value="";
        document.getElementById("studentId").value="";
    }
    
})

/* Consultar data */

document.getElementById("consultarBtn").addEventListener("click", function(){
    var inputId = document.getElementById("idToConsult").value;
    var dataConsultada = localStorage.getItem(inputId)
    var array = dataConsultada.split(',')
    console.log(dataConsultada);
    
    if(dataConsultada == null){
        alert("Ese dato no existe en el localStorage")
        
    }else{
        document.getElementById("alumno").value = array[0];
        document.getElementById("cNota1").value = array[1];
        document.getElementById("cNota2").value = array[2];
        document.getElementById("cNota3").value = array[3];
        var notPromedio =document.getElementById("promedio")
        var promedio = (parseFloat(array[1])+parseFloat(array[2])+parseFloat(array[3]))/3
        promedio=promedio.toFixed()
        notPromedio.innerHTML = notPromedio.innerHTML + "Su promedio es: " +promedio

        var felicitacion =document.getElementById("estado");
        if(promedio>=3){
            felicitacion.innerHTML = felicitacion.innerHTML+"FELICITACIONES HAS APROBADO";
        }else{
            felicitacion.innerHTML = felicitacion.innerHTML+"LO SENTIMOS HAS DESAPROBADO";
        }
    }
})
