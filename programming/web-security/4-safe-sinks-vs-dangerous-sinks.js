// Safe sinks vs dangerous sinks, using the exact same malicious string
// through two different DOM APIs. No server needed, this runs entirely
// in the browser. Open DevTools console and reload to see the difference.

const maliciousString =
  '<img src="x" onerror="console.log(\'XSS actually fired.\'); document.title = \'XSS fired via innerHTML\';">';

console.log("The string every sink below receives, unmodified:", maliciousString);

// textContent is a safe sink. It treats its input as plain text, never
// as markup, so the string above renders as literal visible text on
// the page, exactly as typed, and nothing inside it ever executes.
const safeOutput = document.getElementById("safe-output");
if (safeOutput) {
  safeOutput.textContent = maliciousString;
  console.log("textContent: rendered as inert text, nothing executed.");
}

// innerHTML is a dangerous sink. It hands the string straight to the
// DOM as markup, so the browser parses the <img> tag, tries to load
// "x" as an image, fails, and fires the onerror handler, running the
// attacker's code as if it were part of the page all along.
const unsafeOutput = document.getElementById("unsafe-output");
if (unsafeOutput) {
  unsafeOutput.innerHTML = maliciousString;
  console.log("innerHTML: parsed as markup, watch the console line above fire and the tab title change.");
}

// Same string, two sinks, two completely different outcomes. That's
// the entire argument for treating "safe sink vs dangerous sink" as a
// day-to-day mental model instead of a one-time audit checklist.
