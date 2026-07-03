const btn = document.querySelector("#ai-btn");
const output = document.querySelector("#output");
const chatBox = document.querySelector("#chat-box");
const prompt = document.querySelector("#prompt");

//creating function to add message
function addMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
    return message;
}

btn.addEventListener("click", async function () {
    const userPrompt = prompt.value.trim();

    if (!userPrompt) return;

    addMessage(userPrompt, "user");

    prompt.value = "";

    btn.disabled = true;
    prompt.disabled = true;
    btn.textContent = "Thinking...";

    const thinkingMessage = addMessage("Thinking...", "ai");

    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/interactions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // API key
                    "x-goog-api-key": "my_API",
                },
                body: JSON.stringify({
                    model: "gemini-3.5-flash",
                    input: userPrompt,
                }),
            },
        );
        const data = await response.json();
        console.log(data.steps[1].content[0].text);
        const aiResponse = data.steps[1].content[0].text;

        thinkingMessage.remove();
        addMessage(aiResponse, "ai");
    } catch (err) {
        addMessage("Something went wrong!", "ai");
    }

    prompt.disabled = false;
    prompt.focus();
    btn.disabled = false;
    btn.textContent = "Send";
});