

$(".dmenu li a").click(function(){
  
  $(".dm:first-child").html($(this).text()+' <span class="caret"></span>');
  
});

$(".csmenu li a").click(function(){
  
  $(".cs:first-child").html($(this).text()+' <span class="caret"></span>');
  
});
$(".uemenu li a").click(function(){
  
  $(".ue:first-child").html($(this).text()+' <span class="caret"></span>');
  
});
$(".uimenu li a").click(function(){
  
  $(".ui:first-child").html($(this).text()+' <span class="caret"></span>');
  
});
$(".navbar-nav a").click(function(event) {
  if (!$(this).parent().hasClass('dropdown'))
      $(".navbar-collapse").collapse('hide');
});

$(function(){
    $('.tech').hover(function() {
        
      $('.tech').addClass('floater');
    }, function() {
      $('.tech').removeClass('floater');
    })
    
})
$(function(){
    $('.tech1').hover(function() {
        
      $('.tech1').addClass('floater');
    }, function() {
      $('.tech1').removeClass('floater');
    })
    
})
$(function(){
    $('.tech2').hover(function() {
        
      $('.tech2').addClass('floater');
    }, function() {
      $('.tech2').removeClass('floater');
    })
    
})