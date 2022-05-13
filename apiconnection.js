var API_KEY = '27364782-a485762ae3b1ec09c63eb6131';
var URL_BY_SEARCH = "https://pixabay.com/api/?key="+API_KEY+"&q=";
var URL_BY_ID     = "https://pixabay.com/api/?key="+API_KEY+"&id=";

const HTTP = new XMLHttpRequest();

var PAGINA = 1;

var responseData = ( responseText, pagina )=>{
    console.log( responseText) ;
};

HTTP.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
        responseData(this.responseText, PAGINA);
    }
}

function getImageById( ID ){
    HTTP.open("GET", URL_BY_ID + ID);
    HTTP.send();
}

function getImageBySearch( SEARCH, pagina ){
    PAGINA = pagina;
    HTTP.open("GET", URL_BY_SEARCH + encodeURIComponent(SEARCH));
    HTTP.send()
}