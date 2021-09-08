$( "body" ).prepend("<input type='text' id='term_to_search' placeholder='Termo a ser pesquisado'><button id='start_search'>Gravar e Iniciar</button>");
    $('body').prepend('<audio id="notificacao" preload="auto"><source src="https://github.com/nosied/Busca-Textal/raw/master/sms-alert-1-daniel_simon.mp3" type="audio/mpeg"></audio>');
    $('body').on('click', '#start_search',function () {
        if($('#term_to_search').val() !== null){
            localStorage.termo = $('#term_to_search').val();
            //location.reload();
        }
    });
    if(localStorage.termo !== null){
        $('#term_to_search').val(localStorage.termo);
        setInterval(function(){
            buscaTermo();
        }, 10000);
    }
    function tiraAcentos(i) {
        return i;
    }
    function buscaTermo(){
        var searchTerm = localStorage.termo;
        var html_limpo = $("html").text().trim();

        var pattern = "([^\\w]*)(" + tiraAcentos(searchTerm) + "|" + searchTerm + ")([^\\w]*)";
        var rg = new RegExp(pattern, "g");
        var match = rg.exec(html_limpo);
        if (match) {
            //console.log(match.length);
            $('#notificacao').trigger('play');
            console.log("Termo "+searchTerm+" encontrado!");
        }
}