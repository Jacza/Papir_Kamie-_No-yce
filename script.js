let x
let i
let papier = function(x,i){
    x = 0
    document.getElementById("a1").innerHTML = "Gracz wybral papier\n "
    losuj(x,i)
    
    return x
}
let kamien = function(x,i){
    x = 1
    document.getElementById("a1").innerHTML = "Gracz wybral kamien\n "
    losuj(x,i)
    
    return x
}
let nozyce = function(x,i){
    x = 2
    document.getElementById("a1").innerHTML = "Gracz wybral nozyce\n "
    losuj(x,i)
    
    return x
}

let losuj = function(x,i){
    i = Math.round(Math.random()*2)
    
    if(i == 0)
        document.getElementById("a2").innerHTML = "Komputer wybral papier\n "
    else if (i == 1)
        document.getElementById("a2").innerHTML = "Komputer wybral kamien\n "
    else 
        document.getElementById("a2").innerHTML = "Komputer wybral nozyce\n "
    
    
    if (x==i){
        document.getElementById("a3").innerHTML = "Remis\n "
    }
    else if (x==0 && i ==1){
        document.getElementById("a3").innerHTML = "Wygrales\n "
    }
    else if (x==0 && i ==2)
        document.getElementById("a3").innerHTML = "Przegrales\n "
    else if (x==1 && i ==2){
        document.getElementById("a3").innerHTML = "Wygrales\n "
    }
    else if (x==1 && i ==0)
        document.getElementById("a3").innerHTML = "Przegrales\n "
    else if (x==2 && i ==0){
        document.getElementById("a3").innerHTML = "Wygrales\n "
    }
    else if (x==2 && i ==1)
        document.getElementById("a3").innerHTML = "Przegrales\n "
    return i, x
}
