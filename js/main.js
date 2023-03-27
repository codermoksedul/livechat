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


let chat_input = document.querySelector(".chat_input");
let user_message = document.querySelector(".user_message");
let send_btn = document.querySelector("#send_btn");
let chat_container = document.querySelector(".chat_conversation_box");
let admin_message = document.querySelector(".admin_message");

// function to get messages from server
function chat_user_message(){
  const message = chat_input.value;
if (message.trim() !== '') {
const messageElement = document.createElement('div');
messageElement.classList.add('user_message');
messageElement.textContent = message;
user_message.appendChild(messageElement);
user_message.scrollTop = user_message.scrollHeight;
chat_input.value = '';
}
}
// add event listener to button
send_btn.addEventListener('click', function(){
  chat_user_message();
});
// enter button action
chat_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    chat_user_message();
    if(user_message.value = "hi"){
      // document.querySelector(".admin_message").innerHTML = "Hello, Please tell me, how can I help you sir?";

      // const admin_txt_box = document.createElement("div");
      // admin_txt_box.classList.add('admin_message');
      // .appendChild(admin_txt_box);
      // admin_message.innerHTML = "Text";
      let admin_txt = "this is text message"
      const messageElement = document.createElement('div');
      messageElement.classList.add('admin_message');
      admin_message.appendChild(messageElement);
      admin_message.scrollTop = admin_message.scrollHeight;
      admin_message.value = '';

    }
    else{
      alert('nothing');
    }
  }
});


// auto reply command 

