var nome_aluno, ano, nota1, nota2, nota3, nota4, media
var aprovado, recuperacao, reprovado

function calcular_media() {
    
    nome_aluno = frmAluno.nome_aluno.value
    ano = parseInt(frmAluno.ano.value)
    nota1 = parseFloat(frmAluno.nota1.value.replace(",","."))
    nota2 = parseFloat(frmAluno.nota2.value.replace(",","."))
    nota3 = parseFloat(frmAluno.nota3.value.replace(",","."))
    nota4 = parseFloat(frmAluno.nota4.value.replace(",","."))
    falta = parseInt(frmAluno.falta.value)

    media = (nota1 += nota2 += nota3 += nota4)/4

    document.getElementById("nomeAluno").innerText = nome_aluno
    document.getElementById("media").innerText = media.toFixed(2)
    document.getElementById("anoLetivo").innerText = ano

    /*
    if(nome_aluno == ""){
        alert("Campo nome do aluno é obrigatório.")
        frmAluno.nome_aluno.focus()
        return false
    } 
    
    if(ano == ""){
        alert("Campo ano letivo é obrigatório.")
        frmAluno.ano.focus()
        return false
    }  
    
    else if(nota1== ""){
        alert("Campo nota 1 é obrigatório.")
        frmAluno.nota1.focus()
        return false
    }  

    else if(nota2 == ""){
        alert("Campo nota 2 é obrigatório.")
        frmAluno.nota2.focus()
        return false
    } 

    else if(nota3 == ""){
        alert("Campo nota 3 é obrigatório.")
        frmAluno.nota3.focus()
        return false
    } 

    else if(nota4 == ""){
        alert("Campo nota 4 é obrigatório.")
        frmAluno.nota4.focus()
        return false
    } 

    else if(falta == ""){
        alert("Campo falta é obrigatório.")
        frmAluno.falta.focus()
        return false
    } 
    
        console.log(nome_aluno)
        console.log(ano)
        console.log(nota1)
        console.log(nota2)
        console.log(nota3)
        console.log(nota4)
        console.log(falta)
    }*/

    if(falta > 15){
        document.getElementById("media").innerText = media.toFixed(2)
        document.getElementById("info").innerText = "Reprovado por número de faltas."
        document.getElementById("img-res").src="img/reprovado_falta.jpg"
    }
    else if(media < 5.0){
        document.getElementById("media").innerText = media.toFixed(2)
        document.getElementById("info").innerText = "Reprovado."
        document.getElementById("img-res").src="img/reprovado.jpg"
    }

    else if(media >= 5.0 && media < 7.00){
        document.getElementById("media").innerText = media.toFixed(2)
        document.getElementById("info").innerText = "Em recuperação."
        document.getElementById("img-res").src="img/recuperacao.jpg"
    }

    else{
        document.getElementById("media").innerText = media.toFixed(2)
        document.getElementById("info").innerText = "Aprovado."
        document.getElementById("img-res").src="img/aprovado.jpg"
    }    
}

function novo(){
    document.querySelector("#nome_aluno").value = ""
    document.querySelector("#ano").value = ""
    document.getElementById("nota1").value = ""
    document.getElementById("nota2").value = ""
    document.getElementById("nota3").value = ""
    document.getElementById("nota4").value = ""
    document.getElementById("falta").value = ""
    document.querySelector("#anoLetivo").innerText = ""
    document.getElementById("nomeAluno").innerText = "Nome do aluno"
    document.querySelector("#media").innerText = ""
    document.querySelector("#info").innerText = ""    
    document.getElementById("img-res").src="img/default.jpg"
    
}