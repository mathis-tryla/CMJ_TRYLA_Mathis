
//hide an element
function hide(element){
    element.style.display='none';
}

//show an element
function show(element){
    element.style.display='block';
}

//colour a background
function colourBkg(id,color){
    document.getElementById(id).style.backgroundColor=color;
}

//know if Game Motor has to be active
function isComputer(){
    var bkg2 = document.getElementById('td_player2');
    if(bkg2.innerHTML=='COMPUTER') return true;
    else return false;
}

//detect computer's pawn's color
function detectCptColor(){
    var bkg2 = document.getElementById('td_player2');
    if(isComputer()){
        if(bkg2.style.backgroundColor=='red') return 'rouge';
        else return 'jaune';
    } 
    else return false;
}

//onmouseover and onmouseout jquery functions
function onmouse(type,color){
    if(type=='over'){
        $(document).on("mouseover","."+color,function() {
            if (position[$(this).data("indice")].n == 5) return; 
            if (!modeDeplacement)
                $("img",$(this)).attr("src","pictures/"+color+"2.png");
            else if (topo[indiceDepart].adj.indexOf($(this).data("indice")) != -1)
                $("img",$(this)).attr("src","pictures/"+color+"2.png");
        });
    }
    else if(type=='out'){
        $(document).on("mouseout","."+color,function() {
            if ((!modeDeplacement) || (indiceDepart != $(this).data("indice")))
                $("img",$(this)).attr("src","pictures/"+color+".png");
        });
    }
}