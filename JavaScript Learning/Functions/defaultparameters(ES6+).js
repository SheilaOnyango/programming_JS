//You can set default values for function parameters

function greet(name = "Guest") {
  console.log("Hello," + name + "!");
}

greet();
greet("Alice");
