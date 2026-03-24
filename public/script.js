// Target the new /api/entry route
fetch('/api/entry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ textData: userInput }) // Use 'textData' to be different
})