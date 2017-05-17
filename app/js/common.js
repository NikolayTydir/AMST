$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".mnu").slideToggle();
		return false;
	});

		$(".mnu").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 1500);
	    });



	$("body h2").animated("fadeInRight");
	$("body h5").animated("fadeInRight");
	$(".section_3 .row-padding").animated("fadeInRight");
	$(".section_5 .logos .logos-wrap, .footer .icons .icon-wrap").animated("zoomIn");


	$(".section_1").waypoint(function() {
		$(".section_1-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 250*index);
		});
	}, {
		offset : "30%"
	});


	$(".section_2").waypoint(function() {
		$(".portfolio-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 300*index);
		});
	}, {
		offset : "20%"
	});




	$(".section_4").waypoint(function() {
		$(".section_4 .team-card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("team-card-off").addClass("team-card-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".form-wrap").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
