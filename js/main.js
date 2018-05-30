$('.js-tilt').tilt({
    scale: 1.1
})

		function Ticker( elem ) {
	elem.lettering();
	this.done = false;
	this.cycleCount = 5;
	this.cycleCurrent = 0;
	this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}|[]\\;\':"<>?,./`~'.split('');
	this.charsCount = this.chars.length;
	this.letters = elem.find( 'span' );
	this.letterCount = this.letters.length;
	this.letterCurrent = 0;

	this.letters.each( function() {
		var $this = $( this );
		$this.attr( 'data-orig', $this.text() );
		$this.text( '-' );
	});
}

Ticker.prototype.getChar = function() {
	return this.chars[ Math.floor( Math.random() * this.charsCount ) ];
};

Ticker.prototype.reset = function() {
	this.done = false;
	this.cycleCurrent = 0;
	this.letterCurrent = 0;
	this.letters.each( function() {
		var $this = $( this );
		$this.text( $this.attr( 'data-orig' ) );
		$this.removeClass( 'done' );
	});
	this.loop();
};

Ticker.prototype.loop = function() {
	var self = this;

	this.letters.each( function( index, elem ) {
		var $elem = $( elem );
		if( index >= self.letterCurrent ) {
			if( $elem.text() !== ' ' ) {
				$elem.text( self.getChar() );
				$elem.css( 'opacity', Math.random() );
			}
		}
	});

	if( this.cycleCurrent < this.cycleCount ) {
		this.cycleCurrent++;
	} else if( this.letterCurrent < this.letterCount ) {
		var currLetter = this.letters.eq( this.letterCurrent );
		this.cycleCurrent = 0;
		currLetter.text( currLetter.attr( 'data-orig' ) ).css( 'opacity', 1 ).addClass( 'done' );
		this.letterCurrent++;
	} else {
		this.done = true;
	}

	if( !this.done ) {
		requestAnimationFrame( function() {
			self.loop();
		});
	} else {
		setTimeout( function() {
			self.reset();
		}, 750 );
	}
};

$words = $( '.word' );

$words.each( function() {
	var $this = $( this ),
		ticker = new Ticker( $this ).reset();
	$this.data( 'ticker', ticker  );
});


	window.addEventListener('DOMContentLoaded', function() {

        /* Loader - Remove it to disable loader
        ================================================== */
        jQuery("body").queryLoader2({
            onComplete: function() {
                $("#contpreloader").fadeOut(1000);
                $("#preloaderword").remove();
            },
            onProgress : function(percentage) {
            },
            showbar: "on",
            barColor: "#fff",
            textColor: "#fff",
            backgroundColor: "#212121",
            overlayId: 'qLoverlay',
            barHeight: 12,
            percentage: true,
            deepSearch: true,
            completeAnimation: "fade",
            minimumTime: 500 
        });
    });

	$(document).ready(function () {
		 $("body").niceScroll({
						cursorcolor:"#fff",
						cursorwidth:"10px",
						background:"rgba(20,20,20,0.3)",
						cursorborder:"1px solid #fff",
						cursorborderradius:"5px",
						scrollspeed: 50, // scrolling speed
    					mousescrollstep: 30,
						zindex: 1050
					});

	  $('.mobile-nav-button').on('click', function() {  
	  	if ($('#icono-activo').val() == 0) {
	  		var iconElement = document.getElementById('menu-icon');
			iconate(iconElement, {
		            from: 'fa-bars',
		            to: 'fa-times',
		            animation: 'rotateClockwise'
		        }, function() {
		            isAnimating = false;
		        });
			$('#icono-activo').val(1);
	  	}
	  	else{
	  		var iconElement = document.getElementById('menu-icon');
			iconate(iconElement, {
		            from: 'fa-times',
		            to: 'fa-bars',
		            animation: 'rotateClockwise'
		        }, function() {
		            isAnimating = false;
		        });
			$('#icono-activo').val(0);
	  	}
	  	
	  $('.mobile-menu').toggleClass('mobile-menu--open');
	  return false;
	}); 




		$(function(){

			$("#typed").typed({
				// strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
				stringsElement: $('#typed-strings'),
				typeSpeed: 30,
				backDelay: 500,
				loop: true,
				contentType: 'html', // or text
				// defaults to false for infinite loop
				loopCount: true,
				callback: function(){ foo(); },
				resetCallback: function() { newTyped(); }
			});

			$(".reset").click(function(){
				$("#typed").typed('reset');
			});

		});

		function newTyped(){ /* A new typed object */ }

		function foo(){ console.log("Callback"); }

		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});


	$(function() {
  
  var scrollMagicController = new ScrollMagic();



var tween2 = TweenMax.staggerFromTo('.animation', 1,
    {
        opacity: 0,
    	y: 50,
        x: -50,
    },
    {
        y: 0,
        x: 0,
        opacity: 1
    },
    0.4 /* Stagger duration */
);




  var optimizerScene1 = new ScrollScene({
        triggerElement: '#skills',
        duration: 5000
    })
    .addTo(scrollMagicController)
    .on('leave', function(e) {
        $('body').removeClass('hide-those-stars');
    })
    .on('start', function(e) {
        $('body').addClass('hide-those-stars');
    });
  

 
});



	fillTopper();
    var topperHeight = $(window).height()
    var scrollProgress = 100;
    var topperScrollMagicController = new ScrollMagic({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    var topperTextTween = TweenMax.staggerFromTo('#home h1 span', 0.5,
        {
            y: 25,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1
        },
        0.075
    );

	function getTopperHeight() {
        return topperHeight / 1.5;
    }
	var starScene = new ScrollScene({
        triggerElement: '#home',
        duration: getTopperHeight,
        offset: 0
    })
    .addTo(topperScrollMagicController)
    .setTween(topperTextTween)
    //.setPin('#home')
    .on('progress', function(e) {
        scrollProgress = e.progress * 100 * 2;
        if (scrollProgress <= 5) {
            scrollProgress = 100;
        }
    })


 var camera, scene, renderer, mouseX = 0, mouseY = 0, particles = [];
    initStars();
    function initStars() {
        camera = new THREE.PerspectiveCamera(80, $('#home').width() / $('#home').height(), 1, 4000 );
        camera.position.z = 1000;
        scene = new THREE.Scene();
        scene.add(camera);
        renderer = new THREE.CanvasRenderer();
        renderer.setSize( $('#home').width(), $('#home').height() );
        document.getElementById('home').appendChild( renderer.domElement );
        makeParticles();
        document.addEventListener( 'mousemove', onMouseMove, false );
        setInterval(update,1000/30);
    }
    function update() {
        updateParticles();
        renderer.render( scene, camera );
    }
    function makeParticles() {
        var particle, material;
        for ( var zpos= -1000; zpos < 1000; zpos+=5 ) {
            material = new THREE.ParticleCanvasMaterial( { color: 0xffffff, program: particleRender } );
            particle = new THREE.Particle(material);
            particle.position.x = Math.random() * 1000 - 500;
            particle.position.y = Math.random() * 1000 - 500;
            particle.position.z = zpos;
            particle.scale.x = particle.scale.y = 1;
            scene.add( particle );
            particles.push(particle);
        }
    }
    function particleRender( context ) {
        context.beginPath();
        context.arc( 0, 0, 1, 0,  Math.PI * 2, true );
        context.fill();
    };
    function updateParticles() {
        for(var i=0; i<particles.length; i++) {
            particle = particles[i];
            particle.position.z +=  scrollProgress * 0.1;
            if(particle.position.z>1000) particle.position.z-=2000;
        }
    }
    function onMouseMove( event ) {
        // Do nothing, based on scroll
    }

    function fillTopper() {
    $('#home').height($(window).height());
	}


	    var fecha="11-05-1995";
        // Si la fecha es correcta, calculamos la edad
        var values=fecha.split("-");
        var dia = values[0];
        var mes = values[1];
        var ano = values[2];
 
        // cogemos los valores actuales
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth()+1;
        var ahora_dia = fecha_hoy.getDate();
 
        // realizamos el calculo
        var edad = (ahora_ano + 1900) - ano;
        if ( ahora_mes < mes )
        {
            edad--;
        }
        if ((mes == ahora_mes) && (ahora_dia < dia))
        {
            edad--;
        }
        if (edad > 1900)
        {
            edad -= 1900;
        }
 
        // calculamos los meses
        var meses=0;
        if(ahora_mes>mes)
            meses=ahora_mes-mes;
        if(ahora_mes<mes)
            meses=12-(mes-ahora_mes);
        if(ahora_mes==mes && dia>ahora_dia)
            meses=11;
 
        // calculamos los dias
        var dias=0;
        if(ahora_dia>dia)
            dias=ahora_dia-dia;
        if(ahora_dia<dia)
        {
            ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
            dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
        }
 		if(edad==1){
 			document.getElementById("edadalex").innerHTML=edad+" Year";
 		}
 		else{
 			document.getElementById("edadalex").innerHTML=edad+" Years";
 		}

 		$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
		
	});
});

 		

	}); 

        function enviarContacpage() {
    namesinput = $('#contacpagename').val();
    emailinput = $('#contacpageemail').val();
    telefonoinput = $('#contacpagetel').val();
    contacmsginput = $('#contacpagemessage').val();
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (namesinput == 0 || namesinput == null) {
        alert("Introduzca su nombre.");
        $('#contacpagename').focus();
        return false;
    } else if (!expr.test(emailinput)) {
        alert("Introduzca una direccion valida de Email.");
        $('#contacpageemail').focus();
        return false;
    } else if (telefonoinput == 0 || telefonoinput == null) {
        alert("Introduzca su Telefono de contacto.");
        $('#contacpagetel').focus();
        return false;
    } else if (contacmsginput == 0 || contacmsginput == null) {
        alert("Introduzca su mensaje.");
        $('#contacpagemessage').focus();
        return false;
    }
    datos = {
        "namesinput": namesinput,
        "emailinput": emailinput,
        "telefonoinput": telefonoinput,
        "contacmsginput": contacmsginput
    };
    document.getElementById('contact_form').reset();
    $('#notificacionform').modal('toggle');
    $.ajax({
        contentType: "text/xml;charset=utf-8",
        url: ' https://pruebadategeek.epizy.com/CorreoContacto.php',
        data: datos,
        success: function(data) {
        }
    });
}

jQuery(function(){
        $('#contacpagetel').mask('(+00)0000-00000000');
        

    });

$( "#portfolio a" ).click(function( event ) {
  event.preventDefault();
});

function showportfolio(val){
    $('#portfolio-modal'+val).modal('toggle');
}

window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    mainAudio: 'music/elevator.mp3',
    endAudio: 'music/ding.mp3'
  });
}