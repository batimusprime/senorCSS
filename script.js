//Happy Face

$('#good').hover(
    function(){ 
        
        $('#mouth').addClass('smile');
        $('.eye').addClass('squint'); 
        $('#browR').addClass('rotateRight');
        $('#browL').addClass('rotateLeft');
    },
       
    function(){ 
        
        $('#mouth').removeClass('smile');
        $('.eye').removeClass('squint');
        $('#browR').removeClass('rotateRight');
        $('#browL').removeClass('rotateLeft');
          
    }
);


//Sad Face

$('#bad').hover(
    
    function(){ 
        
        $('#mouth').addClass('frown');
        $('.eye').addClass('bug');
        $('#browL').addClass('rotateRight');
        $('#browR').addClass('rotateLeft');
        $('.pupil').removeClass('hidden');
    },
    
    function(){ 
        $('#mouth').removeClass('frown');
        $('.eye').removeClass('bug');
        $('.pupil').addClass('hidden');  
        $('#browL').removeClass('rotateRight');
        $('#browR').removeClass('rotateLeft');

    }
);

//Question

$('#question').hover(
    
    function(){
        
        $('#mouth').addClass('smile');
        $('#mouth').addClass('questionMouth');
        $('#browR').addClass('rotateRight');
        $('#browL').addClass('rotateLeft');
        $('.eye').addClass('shrink');

    },
    
    function(){
        
        $('#mouth').removeClass('smile');
        $('#mouth').removeClass('questionMouth');    
        $('#browR').removeClass('rotateRight');
        $('#browL').removeClass('rotateLeft');
        $('.eye').removeClass('shrink');

        
    }

);

//Blink

$('#char').click(function(){

  $('.eye').addClass("squint");
  
  function unblink(){
  
    $('.eye').removeClass("squint")
  
  }
  
    setTimeout(unblink,100);  
  
});


//Rainbow

$('#rainbow').hover(function(){
    
    
            $('#mouth').hide();
            $('#rainmouth').show();
            $('.pupil').removeClass('hidden');
            $('.pupil2').removeClass('hidden');
            $('#browL').addClass('rainbowBrowL');
            $('#browR').addClass('rainbowBrowR');
            $('.eye').addClass('rainbug');
    
},
    
    function(){
       
            $('#mouth').show();
            $('#rainmouth').hide(); 
            $('.pupil').addClass('hidden');
            $('.pupil2').addClass('hidden');
            $('#browL').removeClass('rainbowBrowL');
            $('#browR').removeClass('rainbowBrowR');
            $('.eye').removeClass('rainbug');

}
                
);


