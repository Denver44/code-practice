// A profile update handler receives this as req.body. It's a simulation
// of an attacker tampering with a PATCH request payload in DevTools or
// curl, adding a "role" field the UI never exposed as an input.
const incomingRequestBody = {
  name: "James Whitfield",
  bio: "Backend engineer, coffee snob",
  role: "admin",
};

// DENY LIST: block specific fields, let everything else through.
// This is the naive fix, and it fails silently the moment an attacker
// uses a field name the deny list didn't think to block.
function applyWithDenyList(body) {
  const blocked = ["password", "isAdmin"];
  const result = {};

  for (const key of Object.keys(body)) {
    if (!blocked.includes(key)) {
      result[key] = body[key];
    }
  }

  return result;
}

// ALLOW LIST: name the exact fields permitted, drop everything else
// by default. Nothing gets through unless it was explicitly allowed.
function applyWithAllowList(body) {
  const allowed = ["name", "bio"];
  const result = {};

  for (const key of allowed) {
    if (key in body) {
      result[key] = body[key];
    }
  }

  return result;
}

const deniedResult = applyWithDenyList(incomingRequestBody);
const allowedResult = applyWithAllowList(incomingRequestBody);

console.log("Deny list result:", deniedResult);
console.log("Did role slip through the deny list?", "role" in deniedResult);

console.log("Allow list result:", allowedResult);
console.log("Did role slip through the allow list?", "role" in allowedResult);

// The deny list never named "role", so role survives untouched.
// The allow list only ever named "name" and "bio", so role is gone
// before it ever reaches a database call.
