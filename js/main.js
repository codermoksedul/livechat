let chat_btn = document.querySelector(".chat_btn");
let chat_box = document.querySelector(".chat_box");
let minimize_btn = document.querySelector(".minimize_btn");

chat_btn.addEventListener("click", function(){
    chat_box.classList.toggle("chat_box_active");
    document.querySelector(".fas").classList.toggle("fa-times");
})

minimize_btn.addEventListener("click", function(){
    chat_box.classList.remove("chat_box_active");
    document.querySelector(".fas").classList.toggle("fa-times");
})



const form = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const userValue = document.querySelector('.chat-messages').value;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const messageInput = e.target.elements[0];
  const userBubble = document.createElement('div');
  userBubble.classList.add('chat-bubble', 'user-bubble');
  userBubble.textContent = messageInput.value.trim();
  chatMessages.appendChild(userBubble);
  
  // auto-reply after a 1 second delay

  function admin_auto_reply(admin_message){
    setTimeout(() => {
      const autoReplyBubble = document.createElement('div');
      autoReplyBubble.classList.add('chat-bubble', 'auto-reply-bubble');
      autoReplyBubble.textContent = admin_message;
      chatMessages.appendChild(autoReplyBubble);
    }, 1000);
  }
  const user_input = document.getElementById("user_input").value;

  switch (user_input) {
    case 'hi':
      admin_auto_reply('Hey! Please tell me how can I help you today?')
      break;

    case 'hlw':
      admin_auto_reply("yea")
      break;
  
    case 'order':
      admin_auto_reply("If you want to order our service or hire. Please click hire me button on heading area or visit this link: https://www.fiverr.com/dmoksedul/ Thank you.")
      break;
  
    default:
      admin_auto_reply("Sorry! I am just demo version I don't response your message. Full version is comming. Thank you!")
      break;
  }

  // clear input field after sending message
  messageInput.value = '';
});


