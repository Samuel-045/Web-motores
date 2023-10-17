window.onload = function (){
    //função para alterar o titulo da página
    document.addEventListener("visibilitychange", (event)=> {
        if (document.visibilityState==="visible"){
            document.title= "De Bugatti a Rolls-Royce: conheça os 10 carros mais caros do mundo";
        }else{
            document.title= "Hey, continue lendo"
        }
    })

    function checkInputs(){
        var auxErro=false //variaveis para ativar a mensagem de erro geral <-
        var auxErro2=false// <-
        const nameValue = document.getElementById('name').value.trim()
        const emailValue = document.getElementById('email').value.trim()

        if(nameValue === ''){
            document.getElementById("error1").innerHTML="Preencha o campo";
            auxErro = true
        }else if(nameValue.length <3){
            document.getElementById("error1").innerHTML="Nome Inválido";
            auxErro = true
        }else{
            document.getElementById("error1").innerHTML="Nome Válido";
        }

        //'molde'(regex) para fazer a validação do email
        const regex = /^[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,}$/i
        var cond = regex.test(emailValue)

        if(emailValue==""){
            document.getElementById("error2").innerHTML="Preencha o campo";
            auxErro2 = true
        }else if(!cond){
            document.getElementById("error2").innerHTML="Email Inválido"
            auxErro2 = true
        }else{
            document.getElementById("error2").innerHTML="Email válido"
        }

        if(auxErro || auxErro2){
            document.getElementById("errorGeral").innerHTML="<span>Preencha os campos corretamente</span>"
            document.getElementById("finalizacao").innerHTML="<p> </p>"
        }else if(auxErro!= true && auxErro2!=true){
            document.getElementById("errorGeral").innerHTML="<p> </p>"
            document.getElementById("finalizacao").innerHTML="Cadastro realizado "+emailValue;
        }

    }
    
    document.getElementById('form').addEventListener("submit", (event) => {
        event.preventDefault()
        checkInputs()
    })


}


//adicionar uma verificação de data >= 16 anos.
// pesquisar como realizar uma comparação entre datas.