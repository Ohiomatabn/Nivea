const email = document.getElementById('email');
const message = document.getElementById('message');

/*document.querySelector('#name').addEventListener('keyup', () =>{
  const name = document.getElementById('name');
  if(name.value ==='' || name.value === ' ' || name.value < 5){
    document.querySelector('.js-form-control').classList += ' error';
  } else{
    document.querySelector('.js-form-control').classList += ' correct';
  }
});*/

document.querySelector('#name').addEventListener('keyup', () =>{
  const name = document.getElementById('name').value;
  if(name === '' || name === ' ' || name.length < 3){
    document.querySelector('.js-name-form-control').setAttribute('style', 'border-color: red; box-shadow: 0 0 0 .25rem rgba(255, 0, 0, .25)');
  } else{
    document.querySelector('.js-name-form-control').setAttribute('style', 'border-color: green; box-shadow: 0 0 0 .25rem rgba(0, 128, 0, .25)');
  }
});

document.querySelector('#email').addEventListener('keyup', () =>{
  const email = document.getElementById('email').value;
  if (email === '' || email === ' '){
    document.querySelector('.js-email-form-control').setAttribute('style', 'border-color: red; box-shadow: 0 0 0 .25rem rgba(255, 0, 0, .25)');
  } else{
    document.querySelector('.js-email-form-control').setAttribute('style', 'border-color: green; box-shadow: 0 0 0 .25rem rgba(0, 128, 0, .25)');
  }
});

document.querySelector('#message').addEventListener('keyup', () =>{
  const message = document.getElementById('message').value;
  if (message === '' || message === ' ' || message.length < 30){
    document.querySelector('.js-message-form-control').setAttribute('style', 'border-color: red; box-shadow: 0 0 0 .25rem rgba(255, 0, 0, .25)');
  } else{
    document.querySelector('.js-message-form-control').setAttribute('style', 'border-color: green; box-shadow: 0 0 0 .25rem rgba(0, 128, 0, .25)');
  }
});