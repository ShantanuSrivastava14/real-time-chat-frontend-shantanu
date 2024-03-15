// Declare WebSocket connection variable
let ws;

// When the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {

  // Establish WebSocket connection with the server
  ws = new WebSocket('wss://real-time-chat-backend-shantanu-mocha.vercel.app');

  // Event handler for incoming messages from the server
  ws.onmessage = event => {

    // Parse the incoming message data as JSON
    const messageData = JSON.parse(event.data);

    // Extract the message text from the message data
    const uint8Array = new Uint8Array(messageData.message.data);
    const decoder = new TextDecoder('utf-8');
    const stringValue = decoder.decode(uint8Array);

    // Extract sender and message from the message data
    const { message, sender } = messageData;

    // Check if the message sender is not the current client
    if (sender !== 'self') {
      
      // Append the received message to the chat window
      appendMessage(stringValue); 
    }
  };
});

// Function to send a message to the server
function sendMessage() {

   // Get the message input element
  const messageInput = document.getElementById('message-input');

   // Get the trimmed message text
  const message = messageInput.value.trim();

  // Check if the message is not empty
  if (message !== '') {

    // Send the message to the server as a JSON string
    ws.send(JSON.stringify({ message }));

    // Clear the message input field
    messageInput.value = '';
  }
}

// Function to append a message to the chat window
function appendMessage(stringValue) {

  // Get the chat window element
  const chatWindow = document.getElementById('chat-window'); 

  // Parse the JSON string to extract the message text
  const jsonObject = JSON.parse(stringValue);
  const messageValue = jsonObject.message;

  // Create a new message element
  const messageElement = document.createElement('div');

  // Set the message text content
  messageElement.textContent = `${messageValue}`;
  
  // Add message bubble styling to the message element
  messageElement.classList.add('message-bubble');

  // Append the message element to the chat window
  chatWindow.appendChild(messageElement);

  // Scroll to the bottom of the chat window to show the latest message
  chatWindow.scrollTop = chatWindow.scrollHeight;
}


// When the DOM content is loaded again
document.addEventListener('DOMContentLoaded', () => {

  // Get the send button element
  const sendButton = document.getElementById('send-btn');

  // Add a click event listener to the send button
  sendButton.addEventListener('click', sendMessage);
});
