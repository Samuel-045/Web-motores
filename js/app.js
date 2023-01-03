window.onload = function (){

    var bttn = document.getElementById("submit")
    var mensagem = document.getElementById("finalizacao")
    var dpsgmail = document.getElementById("gmail")
    var header = document.getElementById("header")
    var navegation_header = document.getElementById("navigation_header")
    var showsidebar= "false"

    document.addEventListener("visibilitychange", (event)=> {
        if (document.visibilityState==="visible"){
            document.title= "De Bugatti a Rolls-Royce: conheça os 10 carros mais caros do mundo";
        }else{
            document.title= "Hey, continue lendo"
        }
    })


   

}