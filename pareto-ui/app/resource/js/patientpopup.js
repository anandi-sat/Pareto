
	$(document).ready(function(){
		$('#selectable tr').click(function(){
			$(this).toggleClass('blue');
		});
		
		$('li').click(function(){
			$(this).toggleClass('actve');
		});
		
		$('div').click(function(){
			$(this).toggleClass('green');
		});


	});
	
	$(document).ready(function(){
		$(".clear-btn").click(function(){
			$("tr").removeClass("actve-blue");
			$("tr").removeClass("blue");
		
	});
	
	$(document).ready(function(){
		
		$('.edit_btn').click(function(){
			$("#addbox").slideDown("slow");
		});
		
		$('#ok').click(function(){
			$("#addbox").slideUp("slow");
		});
			
	});
});
