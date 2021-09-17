$('.galery_img').click(function(e) {
	var img = e.target.src;
	var modal = '<div class="modal" id="modal"><img src="'+ img + '" class="modal_img"><div class="modal_btn" id="modal_btn">X</div></div>'	
	$('body').append(modal);
	$('#modal_btn').click(function() {
		$('#modal').remove();

	})
});

$(document).keyup(function(e) {
	if (e.which==27) {
		$('#modal').remove();
	}else {
		
	}
})