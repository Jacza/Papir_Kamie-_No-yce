let x
let i
let papier = function(x,i){
    x = 0
    document.write("Gracz wybral papier\n ")
    losuj(x,i)
    
    return x
}
let kamien = function(x,i){
    x = 1
    document.write("Gracz wybral kamien\n ")
    losuj(x,i)
    
    return x
}
let nozyce = function(x,i){
    x = 2
    document.write("Gracz wybral nozyce\n ")
    losuj(x,i)
    
    return x
}

let losuj = function(x,i){
    i = Math.round(Math.random()*2)
    
    if(i == 0)
        document.write("Komputer wybral papier\n ")
    else if (i == 1)
        document.write("Komputer wybral kamien\n ")
    else 
        document.write("Komputer wybral nozyce\n ")
    
    
    if (x==i){
        document.write("Remis")
    }
    else if (x==0 && i ==1){
        document.write("Wygrales")
    }
    else if (x==0 && i ==2)
        document.write("Przegrales")
    else if (x==1 && i ==2){
        document.write("Wygrales")
    }
    else if (x==1 && i ==0)
        document.write("Przegrales")
    else if (x==2 && i ==0){
        document.write("Wygrales")
    }
    else if (x==2 && i ==1)
        document.write("Przegrales")
    return i, x
}
