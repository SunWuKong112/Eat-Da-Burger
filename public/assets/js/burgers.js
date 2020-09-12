$(function(){
     $(".eat").on("click", function(event){
          var id = $(this).data("id");
          var devoured = $(this).data("isDevoured");
          var burgerName = $(this).data("name");
          console.log($(this).data("id"));
          console.log($(this).data("isdevoured"));
          console.log($(this).data("name"));

          var devouredState = {
               isDevoured: devoured
          };

          $.ajax(`/api/burger/${id}`,{
               type: "PUT",
               data: devouredState
          }).then(()=>{
               console.log(`${burgerName} eaten successfully.`)
               location.reload();
          });
     });

     $(".create-form").on("submit", function(event){
          event.preventDefault();
          name = $("#bu").val().trim();
          var newBurger = {
               burger: name
          };
     }).then(()=>{
          $.ajax("/api/:burger",{
               type: "POST",
               data: newBurger
          }).then(()=>{
               console.log(`successfully grilled burger: ${name}`);
               location.reload();
          });
     });
});