console.log("ok")

let förnamn = document.getElementById("förnamn")
let efternmn = document.getElementById("efternmn")
let resultat = document.getElementById("resultat")


function skapaMail (){
    resultat.innerHTML = förnamn.value + "." + efternamn.value + "@gmail.com"
}