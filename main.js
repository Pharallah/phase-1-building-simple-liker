// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Returns a NodeList, Arrays of Span
const glyph = document.querySelectorAll('.like-glyph');

glyph.forEach(heart => heart.addEventListener('click', () => {
  mimicServerCall()
  .then((res) => {
    if (heart.innerText === FULL_HEART) {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    } else {
      heart.innerText = FULL_HEART;
      heart.classList.add('activated-heart');
    }
  })
  .catch(error => {
    const div = document.querySelector('div');
    div.classList.remove('hidden');
    setTimeout(() => {
      div.classList.add('hidden')
    }, 3000);
  })
}))



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}