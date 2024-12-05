console.log("ok")

let förnamn = document.getElementById("förnamn")
let efternmn = document.getElementById("efternmn")
let resultat = document.getElementById("resultat")


function skapaMail (){
    resultat.innerHTML = förnamn.value + "." + efternamn.value + "@gmail.com"
}

let röd = Math.random () * 255
let grön = Math.random () * 255
let blå = Math.random () * 255

document.body.style.background = "rgb( " + röd + "," + grön + "," + blå + ")"