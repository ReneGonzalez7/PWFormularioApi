function createProductElement( SRC, TITLE, DESCRIPTION, onClick ) {
    
    const container = document.createElement("div");
    container.classList.add("m-3");
    container.classList.add("p-0");
    container.classList.add("col-11");
    container.classList.add("col-sm-5");
    container.classList.add("col-xl-3");

    const shadow = document.createElement("div");
    shadow.classList.add("shadow-lg");
    shadow.classList.add("rounded");
    shadow.classList.add("bg-light");

    const image  = document.createElement("img");
    image.src    = SRC;
    image.style  = "object-fit: cover; height: 300px";
    image.classList.add("w-100");
    image.classList.add("rounded");

    const textContainer = document.createElement("div");
    textContainer.style = "height: 150px";
    textContainer.classList.add("row");
    textContainer.classList.add("justify-content-center");

    const title = document.createElement("span");
    title.innerHTML = TITLE;
    title.style = "font-size: 20px";
    title.classList.add("text-center");
    title.classList.add("text-capitalize");
    
    const description = document.createElement("p");
    description.innerHTML = DESCRIPTION;
    description.classList.add("p-2");
    description.classList.add("col-11");
    description.classList.add("text-justify");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("col-11");
    buttonContainer.classList.add("row");
    buttonContainer.classList.add("justify-content-beetween");

    const flag = document.createElement("div");
    flag.classList.add("col");

    const buyButton     = document.createElement("button");
    buyButton.onclick   = ()=>{
        onClick( SRC, TITLE, DESCRIPTION );
    };
    buyButton.innerHTML = "Comprar";
    buyButton.classList.add("my-2");
    buyButton.classList.add("col-3");
    buyButton.classList.add("badge");
    buyButton.classList.add("badge-pill");
    buyButton.classList.add("badge-primary");
    buyButton.classList.add("d-flex");
    buyButton.classList.add("justify-content-center");
    buyButton.classList.add("align-items-center");

    container.appendChild(shadow);
    shadow.appendChild(image);
    shadow.appendChild(textContainer);
    textContainer.appendChild(title);
    textContainer.appendChild(description);
    textContainer.appendChild(buttonContainer);
    buttonContainer.appendChild(flag);
    buttonContainer.appendChild(buyButton);

    return container;
}

function abrirFicha( SRC, TITLE, DESCRIPTION ){
    document.getElementById("fichaImage").src =SRC;
    document.getElementById("fichaTitle").innerHTML =TITLE;
    document.getElementById("fichaDescription").innerHTML =DESCRIPTION;

    const ficha = document.getElementById("fichaContainer")
    ficha.classList.remove("d-none");

    const catalogo = document.getElementById("catalogoContainer")
    catalogo.classList.add("d-none");

}

responseData = ( responseText, PAGINA )=>{
    const resp = JSON.parse(responseText);

    for ( let x = 0; x < 4; x++ ){
        console.log( resp["hits"][x] );

        const dataContent = resp["hits"][x]["tags"].split(",");

        let description = "Este producto contiene ";
        for ( let x = 4*PAGINA-4; x < dataContent.length; x++ ){
            if(x == dataContent.length-1 && x != 0) description += " y "
            description += dataContent[x] ;
            if(x < dataContent.length-2) description += ","
        }

        document.getElementById("catalogo").appendChild(
            createProductElement(
                resp["hits"][x]["webformatURL"], 
                dataContent[0], 
                description,
                abrirFicha));
    }
}

const keyWord = "comida";
getImageBySearch(keyWord, 1);

function cambiarPagina( pagina ){
    
    document.getElementById("catalogo").innerHTML = "";
    
    getImageBySearch(keyWord, pagina);
}