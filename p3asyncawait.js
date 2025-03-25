// Normal fnc
function greet() {
  return "Hello";
}
greet();

// Async fnc
async function greet() {
  return Promise.resolve("Hello");
}
greet();
