$(document).on('turbolinks:load', function() {
	// Menu settings
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});

	$('.login-modal-toggle').on('click', function(){
		$('#login-modal').modal('show');
	})

	$('.register-modal-toggle').on('click', function(){
		$('#register-modal').modal('show');
	})
})