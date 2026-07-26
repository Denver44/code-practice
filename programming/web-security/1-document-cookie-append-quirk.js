// document.cookie looks like a normal property you can overwrite.
// It isn't. Every assignment appends to the existing cookie string
// instead of replacing it. This file proves that in the console.

console.log("Cookies before:", document.cookie);

document.cookie = "theme=dark";
console.log("After setting theme:", document.cookie);

document.cookie = "cart=empty";
console.log("After setting cart:", document.cookie);

// Notice theme=dark is still there. Setting cart did not remove it,
// it just got tacked onto the end of the same string.

document.cookie = "theme=light";
console.log("After 'overwriting' theme:", document.cookie);

// theme did update this time, because a cookie is keyed by its name.
// Setting the same key again replaces that one key's value, but every
// other key already on document.cookie survives untouched. There is
// no way to clear the whole thing in one assignment.
