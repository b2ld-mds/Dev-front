$(document).ready(function(){
	// $('h1').hide(5000);

	for (var i = 0; i < 10; i++) {
		$('<div class="col-1">' ).appendTo('#effets');
	}

$("#effets div").click(function(){
	$(this).hide( 2000,function(){
//		$(this).remove();
	});
});
	$("#show").click(function(){
		$("#effets div").show("slow");
	});

$("#box1").click(function(){
	$(this).css('background-color','seagreen').hide(4000);
});

$("#box2").click(function(){
	$(this).css('background-color','navy').fadeOut(2000); // ecriture courte avec concaténation
});

$("#box3").click(function(){
	$(this).css('background-color','bisque');	// ecriture longue
	$(this).slideUp("fast");
});

	$('#animate div').click(function(){
		$(this).animate({
			"left":"300px"
		}, 3000);

		$(this).animate({
			"top":"-300px"
		}, 4000).css('background-color','yellow');
	});

	$('li').addClass('alerte');
	$('#no-alerte').click(function(){
		$('li').removeClass();
	});

	$('li a').click(function(){
		$(this).parent('li').removeClass();
	});


	var i = $('li').length + 1;
	//alert(i);
	$('#plus').click(function(){
		$('<li>ligne ' + i + '</li>').appendTo('ul');
		i++;
		if( i > 1){
			$('#moins').show();
		}
		console.log(i);
	});
	$('#moins').click(function(){
		if(i > 1){
			$('li:last').remove();
			i--;
			if(i == 1){
				$(this).hide();
			}
		}
	});

	//TOGLLE EFFECTS
	$('#theToggle').click(function(){
		$('#maBoite').toggleClass('bordure');
	});

	$('#toggle p').click(function(){
		$(this).toggleClass('highligth');
	});

	$('#toglle p').hover(function(){
		$('#maBoite').toggleClass('gris');
	});

	
//	var number = parseFloat(os);
//	console.log(os + number + uom);
//	var index = $('#toggle p'). eq();
//	console.log(index)

	// AGRANDIR OU DIMINUER LA TAILLE DE LA POLICE
	$('button.taille').click(function(){
		var os = $('#toggle p').css('font-size');
		var number = parseFloat(os);
		var uom = os.slice(-2);

		if (this.id=='plusPetit'){
			number /= 1.4;
		} else {
			number *= 1.4;
		}
		console.log(number);
		$('#toggle p').css('font-size', number + uom);
	});

	// PHOTOS

	$('#photos nav li').click(function(){
		var numeroLigne = $(this).index();
		console.log(numeroLigne);
		$('#photos div img').hide(2000);
		$('#photos div img').eq(numeroLigne).show(2000);
	});


});















