

    var vPreguntas = [
        {
        "Pregunta":"¿Quién 'sabía que no sabía nada'?",
        "Respuestas":{
            "a":"Aristóteles.",
            "b":"Ortega y Gasset.",
            "c":"Socrate."},
        "Respuesta":"c",
        "Explicación": "Sócrates sabía que no sabía nada.",
        "Km":1
        },
        {
        "Pregunta":"¿Qué es un 'ewok'?",
        "Respuestas":{
            "a":"Un libro en formato digital.",
            "b":"Un ser de 'La guerra de las Galaxias'.",
            "c":"El jefe de una nación india."},
        "Respuesta":"b",
        "Explicación": "Los 'ewok' habitan la luna boscosa en la saga de George Lucas.",
        "Km":2
        },
        {
        "Pregunta":"¿En qué lugar del cuerpo se produce la insulina?",
        "Respuestas":{
            "a":"En la hipófisis.",
            "b":"En el páncreas.",
            "c":"En el duodeno."},
        "Respuesta":"c",
        "Explicación": "La insulina se produce en el páncreas.",
        "Km":2
        },
        {
        "Pregunta":"¿De qué estilo arquitectónico es la Catedral de Notre Dame en París?",
        "Respuestas":{
            "a":"Románico.",
            "b":"Gótico.",
            "c":"Barroco."},
        "Respuesta":"b",
        "Explicación": "Notre Dame es de estilo gótico.",
        "Km":1
        },
        {
        "Pregunta":"¿Con qué se fabricaba el pergamino?",
        "Respuestas":{
            "a":"Con piel de animales.",
            "b":"Con tiras de madera.",
            "c":"Con hojas de arbusto."},
        "Respuesta":"a",
        "Explicación": "El pergamino se hacía con piel de res u otros animales.",
        "Km":2
        },
        {
        "Pregunta":"¿Quién 'sabía que no sabía nada'?",
        "Respuestas":{
            "a":"Aristóteles",
            "b":"Ortega y Gasset",
            "c":"Socrate"},
        "Respuesta":"c",
        "Explicación": "Sócrates sabía que no sabía nada.",
        "Km":1
        },
        {
        "Pregunta":"¿Qué es un dáctilo?",
        "Respuestas":{
            "a":"Un paso de baile.",
            "b":"Un pie de métrica.",
            "c":"Un reptil."},
        "Respuesta":"c",
        "Explicación": "El dáctilo es un pie métrico compuesto por una sílaba larga seguida de dos breves.",
        "Km":1
        },
        {
        "Pregunta":"¿Quién fue famoso esposo de Frida Kahlo? ",
        "Respuestas":{
            "a":"José Vasconcelos.",
            "b":"Diego Rivera.",
            "c":"León Trotsky."},
        "Respuesta":"b",
        "Explicación": "Frida Kahlo se casó con el también pintor Diego Rivera.",
        "Km":3
        },
        {
        "Pregunta":"¿Qué atleta se hizo famoso por utilizar una nueva técnica en atletismo?",
        "Respuestas":{
            "a":"Dick Fosbury.",
            "b":"Carl Lewis.",
            "c":"Emil Zátopek."},
        "Respuesta":"a",
        "Explicación": "Dick Fosbury se hizo famoso al atacar de espaldas el listón en salto de altura, es el 'estilo Fosbury'.",
        "Km":3
        },
        {
        "Pregunta":"¿Qué país no tiene al euro como moneda? ",
        "Respuestas":{
            "a":"Portugal.",
            "b":"Suiza.",
            "c":"Francia."},
        "Respuesta":"b",
        "Explicación": "Los suizos siguen fieles a su franco.",
        "Km":1
        },
        {
        "Pregunta":"¿Qué instrumento está expresamente 'bien afinado' en ciertas obras de Bach?",
        "Respuestas":{
            "a":"El clave.",
            "b":"El oboe.",
            "c":"Todos deben estar bien afinados para que suenen bien."},
        "Respuesta":"a",
        "Explicación": "'El clave bien temperado' está formado por preludios y fugas compuestos por Bach.",
        "Km":3
        } 
    ];

  //=======================================================================

    var gTimer ={

        vTime:0,
        vTimerRunningTime:0,
        vTimerRunning:false,
        vTimerId:'',

        TimerTime:function (pTimeInMinutes) {
            this.vTime=parseInt(pTimeInMinutes)*60*1000;
            this.vTimerRunningTime=this.vTime;
        },

        TimerReset:function () {
            this.vTimerRunningTime=this.vTime;
        },
        TimerStart:function (pHtmlObject) {
            
            if(!this.vTimerRunning){
                this.vTimerId = setInterval(this.TimerLeaping, 10);
                this.vTimerRunning = true;
            }
        },
        TimerLeaping:function(){
            
            gTimer.vTimerRunningTime-=10;
            if (gTimer.vTimerRunningTime == 0) {
                clearInterval(gTimer.vTimerId);
            };
            
            $("#GeneralTimer").text(gTimer.msToTime(gTimer.vTimerRunningTime));
        },
        msToTime:function (duration) {
            var milliseconds = parseInt((duration%1000)/100)
                , seconds = parseInt((duration/1000)%60)
                , minutes = parseInt((duration/(1000*60))%60);
                //, hours = parseInt((duration/(1000*60*60))%24);
        
            //hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
        
            return /*hours + ":" + */minutes + ":" + seconds + "." + milliseconds + "0";
        },
        TimerStop: function() {
            clearInterval(this.vTimerId);
            this.vTimerRunning = false;
          },

    };

    var qTimer ={

        vTime:0,
        vTimerRunningTime:0,
        vTimerRunning:false,
        vTimerId:'',

        TimerTime:function (pTimeInMinutes) {
            this.vTime=parseInt(pTimeInMinutes)*1000;
            this.vTimerRunningTime=this.vTime;
        },

        TimerReset:function () {
            this.vTimerRunningTime=this.vTime;
        },
        TimerStart:function (pHtmlObject) {
            
            if(!this.vTimerRunning){
                this.vTimerId = setInterval(this.TimerLeaping, 10);
                this.vTimerRunning = true;
            }
        },
        TimerLeaping:function(){
            
            qTimer.vTimerRunningTime-=10;
            if (qTimer.vTimerRunningTime == 0) {
                clearInterval(qTimer.vTimerId);
                qTimer.TimerReset;
            };
            
            $("#QuestionTimer").text(qTimer.msToTime(qTimer.vTimerRunningTime));
        },
        msToTime:function (duration) {
            var milliseconds = parseInt((duration%1000)/100)
                , seconds = parseInt((duration/1000)%60)
                , minutes = parseInt((duration/(1000*60))%60);
                //, hours = parseInt((duration/(1000*60*60))%24);
        
            //hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
        
            return /*hours + ":" + */minutes + ":" + seconds + "." + milliseconds + "0";
        },
        TimerStop: function() {
            clearInterval(qTimer.vTimerId);
            qTimer.vTimerRunning = false;
          },

    };


    var gMaraton = {
        vQuestion:"",
        vAnswerA:"",
        vAnswerB:"",
        vAnswerC:"",
        vAnswer:"",
        vExplanation:"",
        vKm:"",
        vMeta:48,

        startMarathon:function(){
            gMaraton.vQuestion="_";
            gMaraton.vAnswerA="_";
            gMaraton.vAnswerB="_";
            gMaraton.vAnswerC="_";
            gMaraton.vAnswer="_";
            gMaraton.vExplanation="_";
            gMaraton.vKm="_";
        },

        getQuestion: function(){
            var vQuestionNum =  Math.floor(Math.random() * 10)+1;
            gMaraton.vQuestion=vPreguntas[vQuestionNum].Pregunta;
            gMaraton.vAnswerA=vPreguntas[vQuestionNum].Respuestas.a;
            gMaraton.vAnswerB=vPreguntas[vQuestionNum].Respuestas.b;
            gMaraton.vAnswerC=vPreguntas[vQuestionNum].Respuestas.c;
            gMaraton.vAnswer=vPreguntas[vQuestionNum].Respuesta;
            gMaraton.vExplanation=vPreguntas[vQuestionNum].Explicación;
            gMaraton.vKm=vPreguntas[vQuestionNum].Km;
        },
        isWinner: function(pPlayerProgress){
            var Winner=false;
            if(pPlayerProgress>=gMaraton.vMeta){
                Winner=true;
            };
            return Winner;
        },
    };

    var vStartGeneralTime=30;
    var vStartQuestionTime=5;
    var vPlayerProgress=0;
    var vIgnoranceProgress=0;

    $(document).ready(function() { 

        $("#GeneralTimer").text(gTimer.msToTime(vStartGeneralTime*60*1000));
        $("#QuestionTimer").text(qTimer.msToTime(vStartQuestionTime*1000));
        $("#StartButton").prop('disabled', false);
        $("#ResetButton").prop('disabled', true);
        gMaraton.startMarathon();
        $("#Question").css("visibility", "hidden");
        $("#aText").css("visibility", "hidden");
        $("#bText").css("visibility", "hidden");
        $("#cText").css("visibility", "hidden");
        $("#a").css("visibility", "hidden");
        $("#b").css("visibility", "hidden");
        $("#c").css("visibility", "hidden");
        $("#QuestionTimer").css("visibility", "hidden");

    });
    
    $("#StartButton").on("click", function(){
        $("#StartButton").prop('disabled', true);
        $("#ResetButton").prop('disabled', false);
        gTimer.TimerTime(vStartGeneralTime);
        gTimer.TimerStart();
        gMaraton.getQuestion();
        $("#Question").text(gMaraton.vQuestion);
        $("#aText").text(gMaraton.vAnswerA);
        $("#bText").text(gMaraton.vAnswerB);
        $("#cText").text(gMaraton.vAnswerC);
        qTimer.TimerTime(vStartQuestionTime);
        qTimer.TimerStart();
        $("#Question").css("visibility", "visible");
        $("#aText").css("visibility", "visible");
        $("#bText").css("visibility", "visible");
        $("#cText").css("visibility", "visible");
        $("#a").css("visibility", "visible");
        $("#b").css("visibility", "visible");
        $("#c").css("visibility", "visible");
        $("#a").attr('disabled', false);
        $("#b").attr('disabled', false);
        $("#c").attr('disabled', false);
        $("#QuestionTimer").css("visibility", "visible");
        $("#GameMessage").text("");

    });

    $("#ResetButton").on("click", function (){
        if(confirm("Press a button!")){
            gTimer.TimerStop();
            $("#GeneralTimer").text(gTimer.msToTime(vStartGeneralTime*60*1000));
            $("#StartButton").prop('disabled', false);
            $("#ResetButton").prop('disabled', true);
            $("#0").append($("#BlackToken"));
            $("#0").append($("#YellowToken"));
            vPlayerProgress=0;
            vIgnoranceProgress=0;
            $("#Question").css("visibility", "hidden");
            $("#aText").css("visibility", "hidden");
            $("#bText").css("visibility", "hidden");
            $("#cText").css("visibility", "hidden");
            $("#a").css("visibility", "hidden");
            $("#b").css("visibility", "hidden");
            $("#c").css("visibility", "hidden");
            $("#QuestionTimer").css("visibility", "hidden");
            $("#GameMessage").text("");
        };
        
    });

    $("#a").on("click",function(){
        if(gMaraton.vAnswer=="a"){
            console.log("correcto");
            vPlayerProgress+=parseInt(gMaraton.vKm);
            if(gMaraton.isWinner(vPlayerProgress)){
                vPlayerProgress=48;
                $("#GameMessage").text("Player 1 WINS!!");
                gTimer.TimerStop();
                qTimer.TimerStop();
                $("#a").attr('disabled', true);
                $("#b").attr('disabled', true);
                $("#c").attr('disabled', true);
                $("#StartButton").prop('disabled', false);
                $("#ResetButton").prop('disabled', true);
            };
            $("#YellowToken").detach().appendTo('#'+vPlayerProgress);
        }else{
            console.log("incorrecto");
            vIgnoranceProgress+=parseInt(gMaraton.vKm);
            if(gMaraton.isWinner(vIgnoranceProgress)){
                vIgnoranceProgress=48;
                $("#GameMessage").text("Ignorance WINS!!");
                gTimer.TimerStop();
                qTimer.TimerStop();
                $("#a").attr('disabled', true);
                $("#b").attr('disabled', true);
                $("#c").attr('disabled', true);
                $("#StartButton").prop('disabled', false);
                $("#ResetButton").prop('disabled', true);
            };
            $("#BlackToken").detach().appendTo('#'+vIgnoranceProgress);
        };
        gMaraton.getQuestion();
        $("#Question").text(gMaraton.vQuestion);
        $("#aText").text(gMaraton.vAnswerA);
        $("#bText").text(gMaraton.vAnswerB);
        $("#cText").text(gMaraton.vAnswerC);
        qTimer.TimerReset();
        qTimer.TimerStart();

        $(this).prop('checked', false);
        if(gMaraton){

        };
        
    });

    $("#b").on("click",function(){
        if(gMaraton.vAnswer=="b"){
            console.log("correcto");
            vPlayerProgress+=parseInt(gMaraton.vKm);
            if(gMaraton.isWinner(vPlayerProgress)){
                vPlayerProgress=48;
                $("#GameMessage").text("Player 1 WINS!!");
                gTimer.TimerStop();
                qTimer.TimerStop();
                $("#a").attr('disabled', true);
                $("#b").attr('disabled', true);
                $("#c").attr('disabled', true);
                $("#StartButton").prop('disabled', false);
                $("#ResetButton").prop('disabled', true);
            };
            $("#YellowToken").detach().appendTo('#'+vPlayerProgress);
        }else{
            console.log("incorrecto");
            vIgnoranceProgress+=parseInt(gMaraton.vKm);
            if(gMaraton.isWinner(vIgnoranceProgress)){
                vIgnoranceProgress=48;
                $("#GameMessage").text("Ignorance WINS!!");
                gTimer.TimerStop();
                qTimer.TimerStop();
                $("#a").attr('disabled', true);
                $("#b").attr('disabled', true);
                $("#c").attr('disabled', true);
                $("#StartButton").prop('disabled', false);
                $("#ResetButton").prop('disabled', true);
            };
            $("#BlackToken").detach().appendTo('#'+vIgnoranceProgress);
        }; 
        gMaraton.getQuestion();
        $("#Question").text(gMaraton.vQuestion);
        $("#aText").text(gMaraton.vAnswerA);
        $("#bText").text(gMaraton.vAnswerB);
        $("#cText").text(gMaraton.vAnswerC);
        qTimer.TimerReset();
        qTimer.TimerStart();

        $(this).prop('checked', false);
    });

    $("#c").on("click",function(){
        if(gMaraton.vAnswer=="c"){
            console.log("correcto");
            vPlayerProgress+=parseInt(gMaraton.vKm);
            if(gMaraton.isWinner(vPlayerProgress)){
                vPlayerProgress=48;
                $("#GameMessage").text("Player 1 WINS!!");
                gTimer.TimerStop();
                qTimer.TimerStop();
                $("#a").attr('disabled', true);
                $("#b").attr('disabled', true);
                $("#c").attr('disabled', true);
                $("#StartButton").prop('disabled', false);
                $("#ResetButton").prop('disabled', true);
            };
            $("#YellowToken").detach().appendTo('#'+vPlayerProgress);
        }else{
            console.log("incorrecto");
            vIgnoranceProgress+=parseInt(gMaraton.vKm);
            if(gMaraton.isWinner(vIgnoranceProgress)){
                vIgnoranceProgress=48;
                $("#GameMessage").text("Ignorance WINS!!");
                gTimer.TimerStop();
                qTimer.TimerStop();
                $("#a").attr('disabled', true);
                $("#b").attr('disabled', true);
                $("#c").attr('disabled', true);
                $("#StartButton").prop('disabled', false);
                $("#ResetButton").prop('disabled', true);
            };
            $("#BlackToken").detach().appendTo('#'+vIgnoranceProgress);
        }; 
        gMaraton.getQuestion();
        $("#Question").text(gMaraton.vQuestion);
        $("#aText").text(gMaraton.vAnswerA);
        $("#bText").text(gMaraton.vAnswerB);
        $("#cText").text(gMaraton.vAnswerC);
        qTimer.TimerReset();
        qTimer.TimerStart();
        
        $(this).prop('checked', false);
    });


