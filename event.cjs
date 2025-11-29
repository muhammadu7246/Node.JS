const { exec } = require('child_process');
const readline = require('readline');

// Create input prompt
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// List of apps and their open commands
const apps = {
  paint: "mspaint",
  chrome: "start chrome",
  notepad: "notepad",
  calculator: "calc",
  word: 'start winword',      // MS Word
  excel: 'start excel',       // MS Excel
  powerpoint: 'start powerpnt', // MS PowerPoint
  explorer: "explorer",        // File Explorer
  vscode: "code"               // Visual Studio Code
};

// Show available apps
console.log("You can open these apps:");
for (let app in apps) {
  console.log(" - " + app);
}
console.log(
  "You can open these apps:\n" +
  " - Paint\n" +
  " - Chrome\n" +
  " - Notepad\n" +
  " - Calculator\n" +
  " - Word\n" +
  " - Excel\n" +
  " - PowerPoint\n" +
  " - Explorer\n" +
  " - VS Code"
);

console.log("\nType any app name to open it.");

// Take input
rl.question("Enter app name: ", function (input) {
  const name = input.toLowerCase();

  if (apps[name]) {
    console.log(`Opening: ${name} ...`);

    exec(apps[name], (err) => {
      if (err) {
        console.log("Could not open the app:", err);
      } else {
        console.log(`${name} opened successfully!`);
      }
    });
  } else {
    console.log("App not found. Please type a valid name.");
  }

  rl.close();
});
