// ─── Promises and fetch() ─────────────────────────────────────────────
// A Promise represents an operation that hasn't completed yet.
// While it's waiting, the rest of the code keeps running.
// When it finishes it's either fulfilled (success) or rejected (error).
//
// Three states:
//   pending   — still waiting
//   fulfilled — completed successfully
//   rejected  — something went wrong

// ─── .then() style ────────────────────────────────────────────────────
// Two .then() calls are needed with fetch:
// First .then()  → converts raw response to JSON
// Second .then() → uses the data
// .catch()       → handles any error from any step in the chain

fetch("https://v2.jokeapi.dev/joke/Any?type=twopart")
  .then(response => response.json())
  .then(data => console.log(`Q: ${data.setup}\nA: ${data.delivery}`))
  .catch(error => console.log("Error:", error));

// ─── async/await style ────────────────────────────────────────────────
// Same fetch, cleaner syntax. await pauses the function (not the whole
// program) until the Promise resolves, then gives you the value directly.
// async keyword is required whenever you use await inside a function.
// try/catch replaces .catch()

async function getJoke() {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart");
    if (!response.ok) {
      throw new Error(`Something went wrong: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Q: ${data.setup}\nA: ${data.delivery}`);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
getJoke();

// ─── Key insight: fetch() does not throw on 404 ───────────────────────
// fetch() only throws for network failures (no internet, server unreachable).
// For HTTP errors like 404 or 500, response.ok is false but no error is thrown.
// You must manually check response.ok and throw your own error.

async function getJokeWithProperErrorHandling() {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
      // This throw sends execution to the catch block
      // The error message is accessible as error.message in catch
    }
    const data = await response.json();
    console.log(`Q: ${data.setup}\nA: ${data.delivery}`);
  } catch (error) {
    // User sees a friendly message
    console.log("Something went wrong. Please try again.");
    // Developer sees the technical detail
    console.log("Technical error:", error.message);
  }
}
getJokeWithProperErrorHandling();
