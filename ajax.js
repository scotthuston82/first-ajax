document.addEventListener("DOMContentLoaded", function() {

 var root = document.querySelector('#root');
 var pong = document.querySelector('#ping-pong');
 var step3456 = document.querySelector('#step3456');
 var count = document.querySelector('#count');
 var step7 = document.querySelector('#step7');

 root.addEventListener('click', function(){
   $.ajax({
   url: 'http://first-ajax-api.herokuapp.com/',
   method: 'GET',
   dataType: 'text'
 }).done(function(responseData){

 });
 });
 pong.addEventListener('click',function(){
   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/pong',
     method: 'GET',
     dataType: 'text'
   }).done(function(requestData){
     console.log(requestData)
     step3456.append(requestData)
   }).fail(function(){
     console.log('sorry try again later')
   }).always(function(){
     console.log('that was fun')
   });
 });
 count.addEventListener('click', function(){
   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/count',
     method: 'GET',
     dataType: 'text'
   }).done(function(requestData){
     step7.append(requestData)
   });
 });

});
