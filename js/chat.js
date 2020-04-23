var lastbubble;
var line = 0;
var timer;
var answer = "";
var mydata = [];
var submitting = false;
/************************************************************************************************** csv to array */
$('document').ready(function() {
	chat();
});


/************************************************************************************************** chatoutput */
function chat(){
  clearTimeout(timer);
  var txt = lines[line]['text']; 

  if(lastbubble != 'support'){
    $('.js-messages').append('<li class="has-avatar"><img class="avatar" src="'+avatar+'" alt="" /><span>'+txt+'</span></li>');
  }
  else{
    $('.js-messages').append('<li><span>'+txt+'</span></li>');
  }
  $('.js-messages').parent().scrollTop($('.js-messages').prop("scrollHeight")*2);
  lastbubble = 'support';

  $('.input > div').hide();

  if( lines[line]['wait'] > 0 && mycheck('')){
    var wait = lines[line]['wait'] *1000;
    line++;
    timer = setTimeout(function(){
      chat();
    }, wait);
  }
}
/************************************************************************************************** listener */
$('.js-next-step, #regform button[type=submit]').bind("click", mycheck);
/************************************************************************************************** check */

function mycheck(e){
if(e != ''){
    switch (lines[line]['interface']) {
      case 'searchgender':
          $(e.target).prev().prop('checked', true);
          line = parseInt(lines[line]['next_true'])-2;
          lastbubble = 'user';
          next(1000);
          return false;
          break;
      case 'city':
         
            line = parseInt(lines[line]['next_true'])-2;
            lastbubble = 'user';
          
          next(1000);
          return false;
          break;
      case 'date':
          
            line = parseInt(lines[line]['next_true'])-2;
            lastbubble = 'user';
            $('.js-check-birthday').parents('.js-step').fadeOut(200, function () {
              $('.js-check-birthday').parents('.js-step').next().fadeIn(100, function() {});
            });
          
          next(1000);
          return false;
          break;
      case 'gender':
          $(e.target).prev().prop('checked', true);
          line = parseInt(lines[line]['next_true'])-2;
          lastbubble = 'user';
          next(1000);
          return false;
          break;
      case 'join':

          break;
      default:
          return true;
      }
  }else{
    return true;
  }
}

function next(t){
  clearTimeout(timer)
  timer = setTimeout(function(){ chat(); }, t);
}

