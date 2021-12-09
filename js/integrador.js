$(document).ready(function(){

    function buscargift(q,limit,path){
        var urlbase = "https://api.giphy.com";

    var data =  {
                api_key :"K1J08Mcahd05nUZe6IfEiVTBJs9cB8Tr",
                q : q,
                limit: limit
                }
                
    var url = urlbase + path;

    $.getJSON(url, data, function (respuesta){

        $(respuesta.data).each(function(){
            var urlgif = this.images.original.url;
            var gif = $('<div class="gifs col-lg-3 col-md-3 col-sm-4 col-xs-12"><img src="'+urlgif+'"alt="gif"></img></div>');
            $("#gifs-container").append(gif);                                  
        });
    });

}

    //$("#form-search").on("submit",function (e){
     //   e.preventdefault();
   // })

    $("#search").on("click",function(){
        var q = $("#busqueda").val();
        if (q == "")
            alert("¡Escribí algo para buscar!");
        
        else
            buscargift(q, 12 ,"/v1/gifs/search");
    
    });
});