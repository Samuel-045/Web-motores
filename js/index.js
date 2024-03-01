window.onload = function (){
   
    const respGet = () => JSON.parse(localStorage.getItem('WM-registro')) ?? []
    const respSet = (obj) => localStorage.setItem('WM-registro',JSON.stringify(obj))
    function verificar(email){
        const dados = respGet()
        var cond = true
        dados.forEach(usuario => {
            if(usuario.Obemail == email){
                document.getElementById("error2").innerHTML="Email já está em uso"
                cond = false
            }
        })

        if(cond){
            document.getElementById("error2").innerHTML=" "
        }
        return cond
    }

    function cadastrar(nome, email){
        obj = {
            Obnome : nome,
            Obemail : email
        }

        const dados = respGet()
        dados.push(obj)
        respSet(dados)
    }

    function checkInputs(){
        var auxErro=false //variaveis para ativar a mensagem de erro geral <-
        var auxErro2=false// <-
        const nameValue = document.getElementById('name').value.trim()
        const emailValue = document.getElementById('email').value.trim()

        //'molde'(regex) para fazer a validação do nome
        const RxNome = /^([A-Za-z{ÃãàÀÁáÇçèÈÉéÍíÜüÓóÒòôÔ}]{1,})([\s]?)([A-Za-z{ÃãàÀÁáÇçèÈÉéÍíÜüÓóÒòôÔ}]{0,}?)(\s?)$/
        const condNome= RxNome.test(nameValue)

        if(nameValue === ''){
            document.getElementById("error1").innerHTML="Preencha o campo";
            auxErro = true
        }else if(!condNome){
            document.getElementById("error1").innerHTML="Nome Inválido";
            auxErro = true
        }else{
            document.getElementById("error1").innerHTML=" "
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
            document.getElementById("error2").innerHTML=" "
        }

        const limpaCampos = () => {
            const campos = document.querySelectorAll("input[class='campo']")
            campos.forEach(campo => {
                campo.value=''
            })
        }
        if(auxErro || auxErro2){
            document.getElementById("errorGeral").innerHTML="<span>Preencha os campos corretamente</span>"
            document.getElementById("finalizacao").innerHTML="<p> </p>"
        }else if(auxErro!= true && auxErro2!=true){
            let condCadastro = verificar(emailValue)
            console.log(condCadastro)
            if(condCadastro){    
                cadastrar(nameValue,emailValue)
                document.getElementById("errorGeral").innerHTML="<p> </p>"
                document.getElementById("finalizacao").innerHTML="Cadastro realizado "+nameValue;
                limpaCampos()
            }
            
        }

    }
    
    document.getElementById('form').addEventListener("submit", (event) => {
        event.preventDefault()
        checkInputs()
    })

    //código para o side bar
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

    window.addEventListener('resize', function(event){
        if(window.innerWidth>600 && showsdbr){
            toggleBar();
        }
    });

}