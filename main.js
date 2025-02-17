$(document).ready(function() {

    $('form').submit(function(e) {
        e.preventDefault();

        const valorDoInput = $('input').val();

        if (valorDoInput !== '') {
            $('ul').append(`<li>${valorDoInput}</li>`); 
            $('input').val('');
        }else {
            alert('Preencha o campo para poder adicionar uma tarefa!')
        }
        
    });

    $('ul').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through'); 
    });

    $('ul').on('dblclick', 'li', function() {
        $(this).css('text-decoration', 'none');
    });

}); 