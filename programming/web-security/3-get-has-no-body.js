// A GET request has no body. Anything you want to send along with it
// has to become a query parameter, tacked onto the URL string itself.
// This file doesn't need a server to prove the point, the URL is
// already fully visible before a single byte leaves the browser.

const csrfToken = "a1b2c3d4-9f21-4e33-8b7a-6c1d0e2f5a99";

// This is what a "GET request with a token" actually looks like.
// It's just string concatenation. There's no encryption step here,
// because there's nowhere in a GET request for an encrypted body
// to live in the first place.
const forgedLookingUrl =
  `https://example.com/like?postId=482&csrf=${csrfToken}`;

console.log("Full GET URL, as sent:", forgedLookingUrl);
console.log("The token is sitting in plain text in the URL string above.");

// Anything that touches this URL sees the token, in full, every time:
// - browser history
// - the server's own access logs
// - the Referer header on whatever page the user clicks through to next
const simulatedBrowserHistoryEntry = { url: forgedLookingUrl, visitedAt: new Date().toISOString() };
const simulatedServerLogLine = `GET ${new URL(forgedLookingUrl).pathname}${new URL(forgedLookingUrl).search} 200`;
const simulatedReferrerHeaderOnNextSite = forgedLookingUrl;

console.log("Simulated browser history entry:", simulatedBrowserHistoryEntry);
console.log("Simulated server access log line:", simulatedServerLogLine);
console.log("Simulated Referer header sent to the next site:", simulatedReferrerHeaderOnNextSite);

// Compare that to a POST request. The token still has to be readable
// by the server eventually, but it travels inside the request body,
// not the URL, so it never lands in the three places above.
const postRequestShape = {
  method: "POST",
  url: "https://example.com/like",
  body: { postId: 482, csrf: csrfToken },
};

console.log("Same action as a POST request:", postRequestShape);
console.log(
  "Notice the URL for the POST request has no token in it at all,",
  "the token only exists inside the body, which never gets logged,",
  "never lands in browser history, and never gets forwarded as a referrer."
);

// HTTPS encrypts the body of a request. It was never built to protect
// the URL sitting in front of it, because the browser has to read the
// URL in cleartext just to know where to send the request at all.
