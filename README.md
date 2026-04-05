# JavaScript Async Patterns

Practice exercises for asynchronous JavaScript — Promises, async/await, fetch, and error handling.

## What I practiced

- Promise states — pending, fulfilled, rejected
- `.then()` / `.catch()` chaining style
- `async` / `await` syntax — the modern alternative
- Why two `await` lines are needed with `fetch()` (response + json parsing)
- Why `fetch()` does not throw on 404 and how to handle it with `response.ok`
- Loading states and error states in the browser
- Showing errors on the page vs logging to the console
- Building a complete browser app with vanilla JS that fetches live API data

## Files

| File | Description |
|------|-------------|
| `promises-and-fetch.js` | .then() and async/await examples with proper error handling |
| `joke-app.html` | Complete browser app — fetches a joke on load, button to get another |

## How to run

Open `joke-app.html` directly in your browser. No server needed.

For the `.js` file — requires Node 18+ for native fetch support:
```bash
node promises-and-fetch.js
```

## Key concepts

**`.then()` vs `async/await`** — same Promise under the hood, different syntax. async/await reads like synchronous code and scales better for complex logic.

**`response.ok`** — always check this before parsing. fetch() only throws for network failures, not HTTP errors like 404.

**Loading states** — always show the user something while waiting. Never leave a blank screen.

## Tech stack

Vanilla JavaScript, Node.js, HTML/CSS
