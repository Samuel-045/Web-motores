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

    var main = document.querySelector('.main')
        var nav = document.getElementById('navegation_header')
        var showsdbr= false
    
        function toggleBar(){ 
            showsdbr= !showsdbr
            if(showsdbr){
                nav.style.marginLeft= '-1.5vw';
                nav.style.animationName= 'showSideBar'; 
                main.style.filter='blur(2px)';     
            }
            else
            {
                nav.style.marginLeft= '-100vw';  
                nav.style.animationName= 'showSideBar2';
                main.style.filter=''; 
            }
        }

        document.querySelector('main').addEventListener('click',event=>(
            toggleBar()
        ))
        document.getElementById('btn1').addEventListener('click',event=>(
            toggleBar()
        ))
        document.getElementById('btn2').addEventListener('click',event=>(
            toggleBar()
        ))

        document.querySelector()

        window.addEventListener('resize', function(event){
            if(window.innerWidth>600 && showsdbr){
                toggleBar();
            }
        });

}