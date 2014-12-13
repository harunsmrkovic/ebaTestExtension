$(document).ready(function(){
	$('#otp').focus();
	$('#login #submit').click(function(){
		console.log('initiating');
		$.post('https://www.unicreditbank.ba/eba/BHgradjani/prijava.do', {brojTokena: $('#brojTokena').val(), otp: $('#otp').val()}, function(data){
			temp1 = $.parseHTML(data);
			stanje = parseFloat($.trim($(temp1[temp1.length-2]).find('.tblTrue tr.evenRow:first td:nth(2)').text()).replace(',', '.'));
			$('#login').fadeOut(function(){
				$('#stanje').html(stanje).fadeIn();
			});
		});
	});
});