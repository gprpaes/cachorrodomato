
  $("#destaque").mouseover(function() {

      $("#destaque").addClass("animated pulse")
       
     


  });
    $("#destaque").mouseleave(function() {

      $("#destaque").removeClass("animated pulse")
       
     


  });
   $("#destaque2").mouseover(function() {

      $("#destaque2").addClass("animated pulse")
       
     


  });
     $("#destaque2").mouseleave(function() {

      $("#destaque2").removeClass("animated pulse")
       
     


  });
    $("#destaque3").mouseover(function() {

      $("#destaque3").addClass("animated pulse")
       
     


  });
      $("#destaque3").mouseleave(function() {

      $("#destaque3").removeClass("animated pulse")
       
     


  });

       $("#online").mouseover(function() {

      $("#online").addClass("animated shake")
       
     


  });
      $("#online").mouseleave(function() {

      $("#online").removeClass("animated shake")
       
     


  });



    $("#but").click(function(){

      if ($('#email').val() && $('#msg').val()   != ''){
    
        $("#fale").submit()
        
    }

    else{


        $("#alerta").append('<div class="alert alert-danger alert-dismissible animated zoomIn" role="alert"><button id ="fecha"type="button" class="close" data-dismiss="alert">×</button><span class="glyphicon glyphicon-exclamation-sign"></span> Existem erros no formulário</div>');
       
      }


      


 

        });


     $('#entrar').click(function(){

      if ($('#email').val() && $('#senha').val()   != ''){
    
        $("#fale").submit()
        
    }

    else{


        $("#alerta").append('<div class="alert alert-danger alert-dismissible animated zoomIn" role="alert"><button id ="fecha"type="button" class="close" data-dismiss="alert">×</button><span class="glyphicon glyphicon-exclamation-sign"></span> Existem erros no formulário</div>');
       
      }


      


 

        });

     $('#confirmaSenha').focusout(function(){

      
      if ($('#senha').val() != $('#confirmaSenha').val()){
    
        $("#divSenha").addClass("has-error");
        
    }

   
   

  });

      $('#confirmaSenha').focus(function(){

          $("#divSenha").removeClass("has-error");

      });



$("#btnExcluirCadastro").click(function(){

  $("#excluirCadastro").modal('show');




  });

$("#placa").focus(function(){
  $("#placa").mask("aaa-9999",{placeholder:" "});

        
});

$("#dataNasc").focus(function(){

  $("#dataNasc").mask("99/99/9999", {placeholder:""});



});

$("#tel").focus(function(){

  $("#tel").mask("(99) 9999-9999", {placeholder:""});



});






         
  

          


     
       
     


  


     