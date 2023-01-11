window.onload = function (){
           //função para alterar o titulo da página
    document.addEventListener("visibilitychange", (event)=> {
        if (document.visibilityState==="visible"){
            document.title= "De Bugatti a Rolls-Royce: conheça os 10 carros mais caros do mundo";
        }else{
            document.title= "Hey, continue lendo"
        }
    })

    const form = document.getElementById('form')
    const email = document.getElementById('email')
    const name = document.getElementById('name')

    

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        checkInputs()
    })

    function checkInputs(){
        const nameValue = name.value.trim()
        const emailValue = email.value.trim()

        if(nameValue === ''){
            document.getElementById("error1").innerHTML="Preencha o campo";
        }else if(nameValue.length <3){
            document.getElementById("error1").innerHTML="Nome Inválido";
        }else{
            document.getElementById("error1").innerHTML="Nome Válido";
        }

        if(emailValue === ''){
            document.getElementById("error2").innerHTML="Email Inválido";
        }else{
            document.getElementById("error2").innerHTML="Email Válido";
        }

        if(emailValue != '' && nameValue != '' && nameValue.length>=3){
            document.getElementById("finalizacao").innerHTML="Cadastro realizado "+emailValue;
        }
    }

}
 

