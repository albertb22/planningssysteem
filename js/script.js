$(document).ready(function() {
	$('.button-collapse').sideNav({edge: 'left' });
	$('.modal-trigger').leanModal();
	$('select').material_select();
	$('.datepicker').pickadate({
    	selectMonths: true,
    	selectYears: 25
  	});
});