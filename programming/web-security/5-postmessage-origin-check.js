// postMessage origin checking, demonstrated as a standalone concept.
// No second window needed: this just shows the listener logic that
// decides whether an incoming message should be trusted at all.
// Open DevTools console and reload to see each simulated message logged.

const ALLOWED_ORIGINS = ["https://trusted-widget.example.com"];

function handleIncomingMessage(event) {
  if (!ALLOWED_ORIGINS.includes(event.origin)) {
    console.log(`Rejected: message from untrusted origin "${event.origin}"`);
    return;
  }
  console.log(`Accepted: message from trusted origin "${event.origin}"`, event.data);
}

// A real listener would be window.addEventListener("message", handleIncomingMessage).
// Here we simulate a few incoming MessageEvent-shaped objects directly, so the
// origin-check logic itself is visible without spawning an actual second window.

const simulatedMessages = [
  { origin: "https://trusted-widget.example.com", data: { text: "Hello from the real widget" } },
  { origin: "https://attacker.example.net", data: { text: "Ignore this, I'm actually malicious" } },
  { origin: "https://another-random-tab.example.org", data: { text: "Unrelated tab, not on the allow list" } },
];

console.log("Simulating three incoming postMessage events against an allow list of one trusted origin:");
simulatedMessages.forEach(handleIncomingMessage);

// The same allow-list check works identically on the real event object a
// window "message" listener receives, since event.origin is set by the
// browser itself and can't be spoofed by the sender.
