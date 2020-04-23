$(function() {
    // next step
    $('.js-step .js-next-step').on('click', function() {
        var $curStep  = $(this).closest('.js-step'),
            $nextStep = $curStep.next('.js-step');    
        goToStep($nextStep, $curStep);
    });
});

function goToStep($eleShown, $eleHidden) {   
    var hiddenClass = 'hidden';    
    $eleShown.removeClass('hidden step-hidden');    
    $eleHidden.addClass(hiddenClass);  
}


