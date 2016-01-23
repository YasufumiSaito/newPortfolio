//Fullpage.js
$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['1', '2', '3','4'],
				sectionsColor: ['#8FB98B',"#2c3e50",'#DE564B',"#2c3e50"],
				slidesNavigation: true,
				scrollingSpeed:600,
				continuousVertical: true,
			});
		});

//Typed.js
$(function(){
			$("#typed").typed({
				stringsElement: $('#typed-strings'),
				contentType:"html",
				typeSpeed:20,
				startDelay: 50,
				backSpeed: 50,
				backDelay: 1500,
				showCursor:true,
				loop:true
			})
		});

// Story interactivities
$(function(){
	$("#switch0").click(function(){
		$("#photo0").toggleClass('hidden');
	});
	$("#switch1").click(function(){
		$("#photo1").toggleClass('hidden');
	});	
	$("#switch2").click(function(){
		$("#photo2").toggleClass('hidden');
	});
	$("#switch3").click(function(){
		$("#photo3").toggleClass('hidden');
	});
	$("#switch4").click(function(){
		$("#photo4").toggleClass('hidden');
	});
	$("#switch5").click(function(){
		$("#photo5").toggleClass('hidden');
	});
	$("#switch6").click(function(){
		$("#photo6").toggleClass('hidden');
	});
});	