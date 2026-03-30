function sendContactMessage() {
    // 1. Grab the exact text from Abdulla's input box
    const userInput = document.getElementById("abdulla-msg").value;

    // Optional tactical check: Don't send if the box is empty!
    if (userInput.trim() === "") {
        alert("Commander, the payload is empty! Enter a message first.");
        return;
    }

    // 2. Transmit to the backend API route
    fetch('/api/entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ textData: userInput }) 
    })
    .then(response => {
        // 3. Confirm success and clear the text box for the next transmission
        alert("Transmission Secured in MongoDB Vault!");
        document.getElementById("abdulla-msg").value = ""; 
    })
    .catch(error => {
        console.error("Transmission failed:", error);
        alert("Vault connection error. Check server logs!");
    });
}
