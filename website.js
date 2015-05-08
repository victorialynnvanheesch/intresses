var main = function () {
  "use strict";
 	
  $(".bla, .tekst").on("click", function(){
    if ($(".bla").text() == "Superformidabel") {
      $(".bla").text("Fantastisch");
    }
    else {
      $(".bla").text("Superformidabel");
    }


    if ($(".tekst").text() == "Volkswagenbusje") {
          $(".tekst").text("Hippiebus");
        }
        else {
          $(".tekst").text("Volkswagenbusje");
        }

    $("body").toggleClass("red");

  });

  $(".interessant").on("click", function(){
    if ($(".interessant").text() == "Wat ik interessant vind!") {
      $(".interessant").text("Wat fascinerend!");
    }
    else {
      $(".interessant").text("Wat ik interessant vind!");
    }

    $("body").toggleClass("bird");

  });

   $(".klik").on("click", function(){
    if ($(".klik").text() == "Wat ik inspirerend vind!") {
      $(".klik").text("Wauwieeeeeee!!!");
    }
    else {
      $(".klik").text("Wat ik inspirerend vind!");
    }

    $("body").toggleClass("in");

  });


  setInterval(function () {

    if ($(".mandala1").hasClass("selected")){  
      $(".mandala2").addClass("selected");
      $(".mandala1").removeClass("selected");
       
    }

  else if ($(".mandala2").hasClass("selected")){ 
      $(".mandala3").addClass("selected");
      $(".mandala2").removeClass("selected");
    }

    else if ($(".mandala3").addClass("selected")){ 
      $(".mandala1").addClass("selected");
      $(".mandala3").removeClass("selected");
    }

  }, 1000);

    setInterval(function () {

    if ($(".motief1").hasClass("selected")){  
      $(".motief2").addClass("selected");
      $(".motief1").removeClass("selected");
       
    }

  else if ($(".motief2").hasClass("selected")){ 
      $(".motief3").addClass("selected");
      $(".motief2").removeClass("selected");
    }

    else if ($(".motief3").addClass("selected")){ 
      $(".motief1").addClass("selected");
      $(".motief3").removeClass("selected");
    }

    }, 300);


    setInterval(function () {

    if ($(".gebouwen1").hasClass("selected")){  
      $(".gebouwen2").addClass("selected");
      $(".gebouwen1").removeClass("selected");
       
    }

  else if ($(".gebouwen2").hasClass("selected")){ 
      $(".gebouwen3").addClass("selected");
      $(".gebouwen2").removeClass("selected");
    }

    else if ($(".gebouwen3").addClass("selected")){ 
      $(".gebouwen1").addClass("selected");
      $(".gebouwen3").removeClass("selected");
    }

    }, 500);


    setInterval(function () {

    if ($(".kopjes1").hasClass("selected")){  
      $(".kopjes2").addClass("selected");
      $(".kopjes1").removeClass("selected");
       
    }

  else if ($(".kopjes2").hasClass("selected")){ 
      $(".kopjes3").addClass("selected");
      $(".kopjes2").removeClass("selected");
    }

    else if ($(".kopjes3").addClass("selected")){ 
      $(".kopjes1").addClass("selected");
      $(".kopjes3").removeClass("selected");
    }

    }, 1000);


    setInterval(function () {

    if ($(".kasten1").hasClass("selected")){  
      $(".kasten2").addClass("selected");
      $(".kasten1").removeClass("selected");
       
    }

  else if ($(".kasten2").hasClass("selected")){ 
      $(".kasten3").addClass("selected");
      $(".kasten2").removeClass("selected");
    }

    else if ($(".kasten3").addClass("selected")){ 
      $(".kasten1").addClass("selected");
      $(".kasten3").removeClass("selected");
    }

    }, 800);

    setInterval(function () {

    if ($(".fantasie1").hasClass("selected")){  
      $(".fantasie2").addClass("selected");
      $(".fantasie1").removeClass("selected");
       
    }

  else if ($(".fantasie2").hasClass("selected")){ 
      $(".fantasie3").addClass("selected");
      $(".fantasie2").removeClass("selected");
    }

    else if ($(".fantasie3").addClass("selected")){ 
      $(".fantasie1").addClass("selected");
      $(".fantasie3").removeClass("selected");
    }

    }, 500);

     setInterval(function () {

    if ($(".festivals1").hasClass("selected")){  
      $(".festivals2").addClass("selected");
      $(".festivals1").removeClass("selected");
       
    }

  else if ($(".festivals2").hasClass("selected")){ 
      $(".festivals3").addClass("selected");
      $(".festivals2").removeClass("selected");
    }

    else if ($(".festivals3").addClass("selected")){ 
      $(".festivals1").addClass("selected");
      $(".festivals3").removeClass("selected");
    }

    }, 2000);

    setInterval(function () {

    if ($(".tuinidee1").hasClass("selected")){  
      $(".tuinidee2").addClass("selected");
      $(".tuinidee1").removeClass("selected");
       
    }

  else if ($(".tuinidee2").hasClass("selected")){ 
      $(".tuinidee3").addClass("selected");
      $(".tuinidee2").removeClass("selected");
    }

    else if ($(".tuinidee3").addClass("selected")){ 
      $(".tuinidee1").addClass("selected");
      $(".tuinidee3").removeClass("selected");
    }

    }, 1000);

    setInterval(function () {

    if ($(".woonidee1").hasClass("selected")){  
      $(".woonidee2").addClass("selected");
      $(".woonidee1").removeClass("selected");
       
    }

  else if ($(".woonidee2").hasClass("selected")){ 
      $(".woonidee3").addClass("selected");
      $(".woonidee2").removeClass("selected");
    }

    else if ($(".woonidee3").addClass("selected")){ 
      $(".woonidee1").addClass("selected");
      $(".woonidee3").removeClass("selected");
    }

    }, 700);

    setInterval(function () {

    if ($(".woods1").hasClass("selected")){  
      $(".woods2").addClass("selected");
      $(".woods1").removeClass("selected");
       
    }

  else if ($(".woods2").hasClass("selected")){ 
      $(".woods3").addClass("selected");
      $(".woods2").removeClass("selected");
    }

    else if ($(".woods3").addClass("selected")){ 
      $(".woods1").addClass("selected");
      $(".woods3").removeClass("selected");
    }

    }, 2000);

    setInterval(function () {

    if ($(".burton1").hasClass("selected")){  
      $(".burton2").addClass("selected");
      $(".burton1").removeClass("selected");
       
    }

    else if ($(".burton2").hasClass("selected")){ 
      $(".burton3").addClass("selected");
      $(".burton2").removeClass("selected");
    }

    else if ($(".burton3").addClass("selected")){ 
      $(".burton1").addClass("selected");
      $(".burton3").removeClass("selected");
    }

    }, 1000);

    setInterval(function () {

    if ($(".mooi1").hasClass("selected")){  
      $(".mooi2").addClass("selected");
      $(".mooi1").removeClass("selected");
       
    }

    else if ($(".mooi2").hasClass("selected")){ 
      $(".mooi3").addClass("selected");
      $(".mooi2").removeClass("selected");
    }

    else if ($(".mooi3").addClass("selected")){ 
      $(".mooi1").addClass("selected");
      $(".mooi3").removeClass("selected");
    }

    }, 500);

   setInterval(function () {

    if ($(".tijdschrift1").hasClass("selected")){  
      $(".tijdschrift2").addClass("selected");
      $(".tijdschrift1").removeClass("selected");
       
    }

    else if ($(".tijdschrift2").hasClass("selected")){ 
      $(".tijdschrift3").addClass("selected");
      $(".tijdschrift2").removeClass("selected");
    }

    else if ($(".tijdschrift3").addClass("selected")){ 
      $(".tijdschrift1").addClass("selected");
      $(".tijdschrift3").removeClass("selected");
    }

    }, 1000);

    setInterval(function () {

    if ($(".marenthe1").hasClass("selected")){  
      $(".marenthe2").addClass("selected");
      $(".marenthe1").removeClass("selected");
       
    }

    else if ($(".marenthe2").hasClass("selected")){ 
      $(".marenthe3").addClass("selected");
      $(".marenthe2").removeClass("selected");
    }

    else if ($(".marenthe3").addClass("selected")){ 
      $(".marenthe1").addClass("selected");
      $(".marenthe3").removeClass("selected");
    }

    }, 2000);

     setInterval(function () {

    if ($(".erwin1").hasClass("selected")){  
      $(".erwin2").addClass("selected");
      $(".erwin1").removeClass("selected");
       
    }

    else if ($(".erwin2").hasClass("selected")){ 
      $(".erwin3").addClass("selected");
      $(".erwin2").removeClass("selected");
    }

    else if ($(".erwin3").addClass("selected")){ 
      $(".erwin1").addClass("selected");
      $(".erwin3").removeClass("selected");
    }

    }, 300);

     setInterval(function () {

    if ($(".walker1").hasClass("selected")){  
      $(".walker2").addClass("selected");
      $(".walker1").removeClass("selected");
       
    }

    else if ($(".walker2").hasClass("selected")){ 
      $(".walker3").addClass("selected");
      $(".walker2").removeClass("selected");
    }

    else if ($(".walker3").addClass("selected")){ 
      $(".walker1").addClass("selected");
      $(".walker3").removeClass("selected");
    }

    }, 500);

      setInterval(function () {

    if ($(".busje1").hasClass("selected")){  
      $(".busje2").addClass("selected");
      $(".busje1").removeClass("selected");
       
    }

    else if ($(".busje2").hasClass("selected")){ 
      $(".busje3").addClass("selected");
      $(".busje2").removeClass("selected");
    }

    else if ($(".busje3").addClass("selected")){ 
      $(".busje1").addClass("selected");
      $(".busje3").removeClass("selected");
    }

    }, 1000);



};


$("document").ready(main);