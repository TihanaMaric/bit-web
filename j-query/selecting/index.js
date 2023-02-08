$('li:first').css('border-bottom','1px solid blue');

var list = $('li');

list.each(function(index,element){
    $(this).text($(this).text().toUpperCase());

    list.on('click',function(){
        $(this).css('color','blueviolet');
    })
})

list.eq(1).css('background-color','blue');