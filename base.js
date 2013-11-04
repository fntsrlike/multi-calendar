var mult_cal = {};

mult_cal.get_src = function (cal_no) {

  var cal_list = {
    cal_1 : "src=email.nchu.edu.tw_g97uemkjpt68d8su5g8dsjnbi0@group.calendar.google.com&color=%23B1440E&",
    cal_2 : "src=email.nchu.edu.tw_0er204ue8p81vfe22vn1qja6k0@group.calendar.google.com&color=%23B1440E&",
    cal_3 : "src=email.nchu.edu.tw_kgjoa8u95tpju1vcclic8lqpv0@group.calendar.google.com&color=%23B1440E&",
    cal_4 : "src=email.nchu.edu.tw_gfisp3ah88t5d9ue51n1a5l5e4@group.calendar.google.com&color=%23B1440E&",
    cal_5 : "src=email.nchu.edu.tw_5ror2k98ics8okjs6d5kvd2h88@group.calendar.google.com&color=%23B1440E&",
    cal_6 : "src=email.nchu.edu.tw_qgo0r638m2oof342e1ak0k76ks@group.calendar.google.com&color=%23B1440E&",
    cal_7 : "src=email.nchu.edu.tw_coerb69lquagpvcvrr6ljlb85k@group.calendar.google.com&color=%23B1440E&"      
  };

  return cal_list[cal_no];
}


$('.cal').click(function() {

  var mainSrc, calRef, calNo;
  mainSrc = $('#calendar').attr('src').replace('ctz=Asia/Taipei', '');
  calNo = $(this).attr('mult-cal');
  calRef = mult_cal.get_src(calNo);


  if ($(this).hasClass('btn-success')) {
    mainSrc = mainSrc.replace(calRef, '');
    $(this).removeClass('btn-success');
    $(this).addClass('btn-default');  
  }
  else {
    mainSrc = mainSrc + calRef;
    $(this).removeClass('btn-default');
    $(this).addClass('btn-success');  
  }

  mainSrc = mainSrc + 'ctz=Asia/Taipei';
  
  $('#calendar').attr('src', mainSrc);
  
  
});


$('#cal_cancel_all').click(function() {
  $('#calendar').attr('src','https://www.google.com/calendar/embed?ctz=Asia/Taipei');

  $('.cal').each(function(){
    if ($(this).hasClass('btn-success')) {
      $(this).removeClass('btn-success');
      $(this).addClass('btn-default');  
    } 
  });

});

$('#cal_choose_all').click(function() {
  
  var mainSrc, calNo, calRef;
  mainSrc = 'https://www.google.com/calendar/embed?';
  
  $('.cal').each(function(){
    if ($(this).hasClass('btn-default')) {
      $(this).removeClass('btn-default');
      $(this).addClass('btn-success');  
    }  

    calNo   = $(this).attr('mult-cal');
    calRef  = mult_cal.get_src(calNo);
    mainSrc = mainSrc + calRef;
  });
  
  mainSrc = mainSrc + 'ctz=Asia/Taipei';
  
  $('#calendar').attr('src', mainSrc);
});




