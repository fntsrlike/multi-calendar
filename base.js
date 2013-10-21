$('.btn').click(function() {

  var src = $('#calendar').attr('src');
  src = src.replace('ctz=Asia/Taipei', '');
  
  if ($(this).hasClass('active')) {
    src = src.replace($(this).attr('src'), '');
    $(this).removeClass('active');
  }
  else {
    src = src + $(this).attr('src') + '&';
    $(this).addClass('active');  
  }
  
  src = src + 'ctz=Asia/Taipei';
  
  $('#calendar').attr('src',src);
  
  
});