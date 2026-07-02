const btn = document.querySelector("#ai-btn");
const output = document.querySelector("#output");

btn.addEventListener("click", async function () {
    output.textContent = "Loading...";

    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/interactions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // API key
                    // "x-goog-api-key": "...",
                },
                body: JSON.stringify({
                    model: "gemini-3.5-flash",
                    input:
                        "",
                }),
            },
        );
        const data = await response.json();
        console.log(data.steps[1].content[0].text);
        output.textContent = data.steps[1].content[0].text;
    } catch (err) {
        output.textContent = "Something went wrong!";
    }
});