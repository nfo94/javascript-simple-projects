(function(){

  document.getElementById('message-form').addEventListener('submit', function(e){
    e.preventDefault();
    let message = document.getElementById('message');
    let value = message.value;
    
    if(value === ''){
      let feedback = document.querySelector('.feedback');
      feedback.classList.add('show');
      setTimeout(() => {
        feedback.classList.remove('show');
      }, 2500);
    }else{
      document.querySelector('.message-content').innerHTML = value;
    }
    
    message.value = '';
  })

})();