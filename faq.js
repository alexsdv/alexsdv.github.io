$(function() 
{
	// Level 1
	$('.faq-category h2').click(function(){
		$(this).next().toggle(200);
		$(this).toggleClass('selected');
	});

	// Level 2
	$('.faq-subcategory-title').click(function(){$(this).next().toggle(200)});

	// Level 3
	$('.faq-question').click(function(){$(this).next().toggle(200)});
});