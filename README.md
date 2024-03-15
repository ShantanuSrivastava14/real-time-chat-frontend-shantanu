# Real-Time Chat Application

This repository contains the source code for a real-time chat application built using WebSocket technology. Users can connect to the chat server and exchange messages in real-time.

## Features

- Real-time messaging: Send and receive messages instantly.
- Simple user interface: Easy-to-use chat interface.
- Multiple clients: Supports multiple clients connecting to the chat server simultaneously.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, WebSocket
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Any modern web browser

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ShantanuSrivastava14/real-time-chat-frontend-shantanu.git
   ```

2. Install dependencies:

   ```bash
   cd real-time-chat-frontend-shantanu
   npm install -g http-server
   ```

### Usage

1. Start the WebSocket server:

   ```bash
   http-server
   ```

2. Open `index.html` in your web browser to access the chat application.

3. Enter your message in the input field and click "Send" to send messages in real-time.

### Deployment

- The frontend is deployed on Vercel at ([https://real-time-chat-frontend-shantanu.vercel.app](https://real-time-chat-frontend-shantanu.vercel.app/)).
- The WebSocket backend is deployed on Heroku at [https://your-heroku-app-url.herokuapp.com](https://your-heroku-app-url.herokuapp.com).

### Directory Structure

```
real-time-chat-frontend-shantanu/
|-- index.html
|-- styles.css
|-- client.js
|-- server.js
|-- README.md
```

## Acknowledgements

- WebSocket server implementation using the `ws` library.

.
