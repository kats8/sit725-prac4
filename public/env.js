$(document).ready(function(){
  console.log('Ready');

  //this block is used to post messages to the boar
  $('#btnMessage').click(()=>{
    let message=$('#messageBox').val();
    let data = {
      message
    }
    $.get('/message', data, function(){

    })
  })

  //this block handles retrieval of messages, adds them to board

  //get messages
  setInterval(()=>{
  $.get('/messages', function(messages){
    $('#messages').empty();
    console.log(messages);
    messages.forEach((message)=>{
console.log(message.message);
$('#messages').append('<div class="row">'+message.message+'</div>');
  })
})
  },1000)
})
