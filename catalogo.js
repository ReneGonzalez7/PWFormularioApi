function createProductElement( SRC, TITLE, DESCRIPTION ) {
    
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
    textContainer.classList.add("row");
    textContainer.classList.add("justify-content-center");

    const title = document.createElement("span");
    title.innerHTML = TITLE;
    title.style = "font-size: 20px";
    title.classList.add("col-11");
    title.classList.add("text-center");
    title.classList.add("badge");
    title.classList.add("badge-primary");
    
    const description = document.createElement("p");
    description.innerHTML = DESCRIPTION;
    description.classList.add("p-2");
    description.classList.add("col-11");
    description.classList.add("text-justify");

    container.appendChild(shadow);
    shadow.appendChild(image);
    shadow.appendChild(textContainer);
    textContainer.appendChild(title);
    textContainer.appendChild(description);

    return container;
}
responseData = ( responseText )=>{
    const resp = JSON.parse(responseText);

    for ( let x = 0; x < 4; x++ ){
        console.log( resp["hits"][x] );
        document.getElementById("catalogo").appendChild(
            createProductElement(
                resp["hits"][x]["pageURL"], 
                "Titulo", 
                "Descripcion de un tamaño mas o menos para probar"));
    }
}
getImageBySearch("comida");
document.getElementById("catalogo").appendChild(createProductElement("https://pixabay.com/get/ga93301148fdb5b3502b4a16340bd3e910512284a33b7dbd5d11c7b9d18a5e8fe2daf2438e3585d0c5c0bc36003544ee1_1920.jpg", "Titulo", "Descripcion de un tamaño mas o menos para probar"));