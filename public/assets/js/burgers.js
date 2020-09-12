$(function(){
     $(".eat").on("click", function(event){
          var id = $(this).data("id");
          var devoured = $(this).data("isDevoured");
          var burgerName = $(this).data("name");

          var devouredState = {
               isDevoured: devoured
          };

          $.ajax(`/api/burger/${id}`,{
               type: "PUT",
               data: devouredState
          }).then(()=>{
               location.reload();
          });
     });

     $(".create-form").on("submit", function(event){
          event.preventDefault();

          var newBurger = {
               burger: $("#bu").val().trim()
          };
          $.ajax(`/api/burger`,{
               type: "POST",
               data: newBurger
          }).then(()=>{
               location.reload();
          });
     });

     $(".digest").on("click", function(event){
          var id = $(this).data("id");
          var devoured = $(this).data("isDevoured");
          var burgerName = $(this).data("name");

          var devouredState = {
               isDevoured: devoured
          };

          $.ajax(`/api/burger/${id}`,{
               type: "DELETE",
               data: devouredState
          }).then(()=>{
               location.reload();
          });
     });
});