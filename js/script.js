$(document).ready(function () {
    $(`form[name='form']`).on('keydown click', function(ev) {
        
        if ((ev.ctrlKey &&(ev.keyCode === 10 || ev.keyCode === 13)) || ev.type === 'click') {
            
            ev.preventDefault();
            
            let name = $(`input[name='addName']`).val();
            let comment = $(`input[name='addComment']`).val();
            let date = new Date();
            let options = {
                
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                
            };
            let fullDate = date.toLocaleString("ru", options).slice(0, -3);

            if (name.replace(/\s/g,"") !== "" && comment.replace(/\s/g,"") !== ""   ){
            $('<div class="nameAndDate">' + '<div class="nameField">' + name + '</div>' + '<div class="dateField">' + fullDate + '</div>'+ '</div>').appendTo('#allComments');
            $('<div>' + '<div class="commentField">' + comment + '</div>' + '</div>').appendTo('#allComments');

            $(`input[name='addName']`).val('');
            $(`input[name='addComment']`).val('');

            let value = $('.nameAndDate').length;
            
            $('#commentsNumber').html(value);
            
            
            }
        }
      });
});
