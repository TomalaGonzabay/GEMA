function start() {
    if (annyang) {
        annyang.setLanguage("es-CO")
        annyang.start({ autoRestart: true, continuous: false }); 
        console.log("Listening...")
        annyang.addCommands(comandos);
        annyang.debug()
        document.getElementById("btn").style.display = "none"   
}
}

let bandera = false;
annyang.addCallback('soundstart', function () {
    if (!bandera){
        document.getElementById("all2").style.display="block"
        setTimeout(() => {
            voz('Bienvenido de nuevo, amigo')
            bandera = true;
        }, 1000);
    }
    console.log("sound detected")
});

annyang.addCallback('result', function () {
    console.log('sound stopped');
});


const comandos = {
    // SALUDO
    "okey": () => {
        voz("Bienvenido de nuevo, amigo");
    },

    "hey": () => {
        voz("Bienvenido de nuevo, amigo");
    },

    "Buenos días": () => {
        voz("Bienvenido de nuevo, amigo");
    },

    "Buenas tardes": () => {
        voz("Bienvenido de nuevo, amigo");
    },

    "Buenas noches": () => {
        voz("Bienvenido de nuevo, amigo");
    },

    // DESPEDIDA

    "Hasta mañana Gema": () => {
        voz("Hasta mañana, señor");
        annyang.abort()
    },

    "Hasta luego Gema": () => {
        voz("Hasta luego, señor");
        annyang.abort()
    },

    "Adios Gema": () => {
        voz("Hasta luego, señor");
        annyang.abort()
    },

    "apágate": () => {
        voz('ok, hasta luego, amigo')
        annyang.abort();
    },

    "apágate por *tiempo minutos": tiempo => {
        voz('ok, vuelvo en' + tiempo + 'minutos');
        annyang.abort();
        setTimeout(() => {
            annyang.start();
            voz('Hola, he vuelto, ¿me extrañaste?')
        }, tiempo * 60000);
    },

    // PREGUNTAS

    "qué hora es": () => {
        var date = new Date;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        voz('amigo, son las ' + strTime)
    },

    "quién te creo": () => {
        voz("Me crearon los estudiantes de la Academia naval Fragata Guayas. Actualmente soy un prototito de asistente virtual desarrollada en visual studio code y javascritp");
    },

    "qué eres": () => {
        voz("soy un asistente virtual de Fragata Guayas. Mi hogar");
    },

    "cuál es tu nombre": () => {
        voz("mi nombre es Gema");
    },

    "qué fecha es hoy": () => {
        var date = new Date;
        var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        voz("hoy es " + date.getDate() + " de "+ mes[date.getMonth()] + "del" + date.getFullYear());
    },

    "qué día es hoy": () => {
        var date = new Date;
        var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
        voz("hoy es "+ dia[date.getDay()-1]);
    },

    "qué eres": () => {
        voz("Soy un asistente y mi nombre es Gema. Estoy para ayudarte");
    },

    "dónde estas": () => {
        voz("estoy dentro de un conjunto de codigos. ¿Donde estas tú?");
    },

    "en mi casa": () => {
        voz(" oh !, eso es muy bueno. Espero que descanses mucho.");
    },

    "en el colegio": () => {
        voz(" oh !, eso es muy bueno. Espero que estudies mucho");
    },

    "de qué trata el proyecto": () => {
        voz(" Es un proyecto educativo creado por estudiantes de la academia naval fragata Guayas. Este proyecto contiene una informacion importante acerca del uso de plataformas educativas que desarrollan y promueven el aprendizaje significativo.");
    },

    "que es el aprendizaje significativo": () => {
        voz("El aprendizaje significativo es relacional y permanente y esos son sus principales rasgos, ya que de forma continua, el alumno asocia conocimientos nuevos con aquellos que ya posee previamente.");
    },

    "qué es una plataforma educativa": () => {
        voz("Una plataforma educativa es un Sistema de Gestión de Aprendizaje y su función principal es gestionar entornos de aprendizaje a distancia, administrando recursos que faciliten la interacción entre el alumno y el profesor.");
    },
    "qué edad tienes": () => {
        voz("soy muy vieja te lo aseguro jajajajaj");
    },
    "soy feo": () => {
        voz("no, los jovenes son muy bellos jajajaja");
    },


    // ORDENES

    "cuéntame un chiste": () => {
        var chistes = ["¿Por qué las focas del circo miran siempre hacia arriba?, Porque es donde están los focos",
            "¡Estás obsesionado con la comida!, No sé a que te refieres croquetamente",
            "¿Por qué estás hablando con esas zapatillas?, Porque pone converse",
            "¿Sabes cómo se queda un mago después de comer?, magordito",
            "Me da un café con leche corto, Se me ha roto la máquina, cambio",
            "¡Camarero! Este filete tiene muchos nervios, Normal, es la primera vez que se lo comen",
            "Hola, ¿está Agustín?, No, estoy incomodín",
            "¿Cuál es la fruta más divertida?, la naranja ja ja"];

        var ran = Math.floor(Math.random() * chistes.length);
        voz(chistes[ran])
    },

    "reiniciate": () => {
        voz("entendido");
        location.reload();
    },

    "limpia la consola": () => {
        voz("entendido");
        console.clear();
    },

    "busca *busqueda": busqueda => {
        voz("ok, buscando " + busqueda +" para ti");
        window.open("https://www.google.com/search?q=" + busqueda)
    },
    "buscamé *busqueda": busqueda => {
        voz("ok, buscando " + busqueda +" para ti");
        window.open("https://www.google.com/search?q=" + busqueda)
    },
    "Gema buscamé *busqueda": busqueda => {
        voz("ok, buscando " + busqueda +" para ti");
        window.open("https://www.google.com/search?q=" + busqueda)
    },
    "Define *busqueda": busqueda => {
        voz("ok, definiendo" + busqueda +" para ti");
        window.open("https://www.google.com/search?q=" + busqueda)
    },
    "Gema busca *busqueda": busqueda => {
        voz("ok, buscando " + busqueda +" para ti");
        window.open("https://www.google.com/search?q=" + busqueda)
    },
    "oye busca *busqueda": busqueda => {
        voz("ok, buscando " + busqueda +" para ti");
        window.open("https://www.google.com/search?q=" + busqueda)
    },
    "Ponme un video de *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + "para ti");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },
 
    "quiero escuchar *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + "para ti");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },
    "quiero oir *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + "para ti");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },
    "pon la musica de *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + "para ti");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },

    "llama al *telefono": telefono => {
        voz("ok, con gusto llamando al" + telefono);
        window.open("tel:" + telefono)
    },

    "di *frase": frase => {
        voz(frase);
    },
    "dime *frase": frase => {
        voz(frase);
    },
    "escribe *dicto": dicto =>{
        document.getElementById("text").innerHTML = dicto;
    },
    "escribeme *dicto": dicto =>{
        document.getElementById("text").innerHTML = dicto;
    },


    // AMABILIDAD

    "gracias": () => {
        voz("Para servirte");
    },
    "oh gracias": () => {
        voz("Para servirte");
    },
    "muchas gracias": () => {
        voz("Para servirte");
    },
    "muchisimas gracias": () => {
        voz("Para servirte");
    },
    "hey gracias": () => {
        voz("Para servirte");
    },
    "oye gracias": () => {
        voz("Para servirte");
    },

    "ulala": () => {
        voz('Me hace sonrojar, amigo')
    },

    "Cómo estás": () => {
        voz('mejor que ayer, espero que usted tambien lo esté, amigo')
    },

    "Te presento a *nombre": nombre => {
        voz("Hola" + nombre +", mi nombre es Gema, es un placer conocerte");
    },
    "Gema, Te presento a *nombre": nombre => {
        voz("Hola" + nombre +", mi nombre es Gema, es un placer conocerte");
    },

    // LLAMADA A LA ACCIÓN
    
    "Gema": () => {
        voz("aquí estoy");
    },

    "Hey": () => {
        voz("aquí estoy, amigo");
    },

    "Hola": () => {
        voz("aquí estoy, amigo");
    },
    "Holis": () => {
        voz("aquí estoy, amigo");
    },

    "Me puedes ayudar": () => {
        voz("claro que sí");
    },

    "Oye Gema": () => {
        voz("aquí estoy, amigo");
    },

    "Estás ahí": () => {
        voz("aquí estoy");
    },
    "tú gema ": () => {
        voz("aquí estoy");
    },
}

function voz(texto) {
    document.getElementById("all2").style.visibility = "hidden";
    var textoAEscuchar = texto;
    var mensaje = new SpeechSynthesisUtterance();
    mensaje.text = textoAEscuchar;
    mensaje.volume = 1;
    mensaje.rate = 0.9;
    mensaje.pitch = 1;
    
    document.getElementById("all").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("all").style.visibility = "hidden";  
        document.getElementById("all2").style.visibility = "visible";      
    }, 4000);
    speechSynthesis.speak(mensaje);
}