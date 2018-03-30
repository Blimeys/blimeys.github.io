$(document).ready(function() {
    $('.grid__item').hover(function(){
        $('.project-description',this).addClass('show');
    },
    function(){
        $('.project-description',this).removeClass('show');
    });
		$('.grid__item').click(function(){
			$('.project-description',this).toggleClass('show');
		})
});
