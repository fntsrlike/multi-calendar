$('.cal').click(function() {

  var src = $('#calendar').attr('src');
  src = src.replace('ctz=Asia/Taipei', '');
  
  if ($(this).hasClass('btn-success')) {
    src = src.replace($(this).attr('src'), '');
    $(this).removeClass('btn-success');
    $(this).addClass('btn-default');  
  }
  else {
    src = src + $(this).attr('src') + '&';
    $(this).removeClass('btn-default');
    $(this).addClass('btn-success');  
  }
  
  src = src + 'ctz=Asia/Taipei';
  
  $('#calendar').attr('src',src);
  
  
});


$('#cancel_all').click(function() {
  $('#calendar').attr('src','https://www.google.com/calendar/embed?ctz=Asia/Taipei');

  $('.cal').each(function(){
    if ($(this).hasClass('btn-success')) {
      $(this).removeClass('btn-success');
      $(this).addClass('btn-default');  
    } 
  });

});

$('#choose_all').click(function() {
  
  var src = 'https://www.google.com/calendar/embed?ctz=Asia/Taipei'
  src = src.replace('ctz=Asia/Taipei', '');
  
  $('.cal').each(function(){
    if ($(this).hasClass('btn-default')) {
      $(this).removeClass('btn-default');
      $(this).addClass('btn-success');  
    }  

    src = src + $(this).attr('src') + '&';
  });
  
  
  src = src + 'ctz=Asia/Taipei';
  
  $('#calendar').attr('src',src);
});