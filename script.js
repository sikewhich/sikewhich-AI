// script.js

// Chat message handling
let messages = [];
const chatWindow = document.getElementById('chat-window');
const inputField = document.getElementById('chat-input');

function sendMessage(message) {
    messages.push(message);
    displayMessages();
}

function displayMessages() {
    chatWindow.innerHTML = '';
    messages.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message');
        msgDiv.textContent = msg;
        chatWindow.appendChild(msgDiv);
        // Add smooth animation
        setTimeout(() => { msgDiv.classList.add('fade-in'); }, 10);
    });
}

// Input field management
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputField.value) {
        sendMessage(inputField.value);
        inputField.value = '';
    }
});

// Icon interactions
const icon = document.getElementById('icon');
icon.addEventListener('click', () => {
    alert('Icon clicked!');
});

// Lua integration logic (placeholder)
function runLuaScript(script) {
    // Example logic for integrating Lua script
    console.log('Running Lua script:', script);
}
