function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    appendMessage("You: " + userInput, "user");
    // 여기에서 챗봇의 응답을 생성하고 추가하는 로직을 구현하세요.
    // 예를 들어, 간단한 응답을 생성하는 함수를 호출할 수 있습니다.
    // 예: appendMessage("Bot: " + getBotResponse(userInput), "bot");
}

function appendMessage(message, sender) {
    var chatBox = document.getElementById("chatBox");
    var messageElement = document.createElement("div");
    messageElement.className = sender;
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);

    // 스크롤을 항상 아래로 이동시킴
    chatBox.scrollTop = chatBox.scrollHeight;
}

// 챗봇 응답을 생성하는 함수 (예제)
function getBotResponse(userInput) {
    // 여기에 챗봇 응답을 생성하는 로직을 구현하세요.
    // 실제로는 외부 API 호출 또는 머신 러닝 모델을 사용하여 응답을 생성할 수 있습니다.
    return "I am a simple chatbot. You said: " + userInput;
}