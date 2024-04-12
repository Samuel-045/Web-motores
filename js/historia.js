window.onload = function(){
    //função para alterar o titulo da página
    document.addEventListener("visibilitychange", (event)=> {
        if (document.visibilityState==="visible"){
            document.title= "De Bugatti a Rolls-Royce: conheça os 10 carros mais caros do mundo";
        }else{
            document.title= "Hey, continue lendo"
        }
    })

    //código para o side bar
    var main = document.querySelector('.main')
    var nav = document.getElementById('navegation_header')
    var assegurador = 1
    function toggleBar(cond){ 
        if(cond){
            nav.style.marginLeft= '-1.5vw';
            nav.style.animationName= 'showSideBar'; 
            main.style.filter='blur(2px)';  
            assegurador=2
        }
        else if(!cond && assegurador==2)
        {
            nav.style.marginLeft= '-100vw';  
            nav.style.animationName= 'showSideBar2';
            main.style.filter=''; 
        }

    }
    
    document.querySelector('main').addEventListener('click',event=>(
        toggleBar(false, assegurador)
    ))
    document.getElementById('btn1').addEventListener('click',event=>(
        toggleBar(true)
        
    ))
    document.getElementById('btn2').addEventListener('click',event=>(
        toggleBar(false, assegurador)
    ))

    window.addEventListener('resize', function(event){
        if(window.innerWidth>600 && showsdbr){
            toggleBar(false, assegurador);
        }
    });
}