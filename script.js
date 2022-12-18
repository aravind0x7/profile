const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  about:
    "Passionate Cyber Security Researcher with a professional Mechatronics background. My area of interest involves, Web-app pentesting, Open Source Intelligence, Web development and Arduino/IoT development.👨‍💻",
  skills:
    "Ethical Hacking | Penetration Testing| OSINT | Red Teaming | Cyber Forensics ",
  education:
    "B.E - Mechatronics Engineering (Pursuing)",
  experience:'Independent Security Researcher - Various Platforms <br> Web-app Penetration Tester (Part Time) - Knorish India<br> Founder & Coordinator - Cyberonics Community ',
  certifications: 
    "CC - Certified In Cyber Security <br> CAP - Certified AppSec Practitioner <br> CSA - Certified Security Awareness Practitioner <br> ISO/IEC 27001 Information Security Associate™ <br>",
  contact:
    "You can contact me on mail or via social media handles:<br><a href='mailto:gnanaaravind07@gmail.com' class='success link'>Email</a><br><a href='https://www.linkedin.com/in/gnana-aravind/' class='success link'>LinkedIn</a><br><a href='https://www.twitter.com/gnana_aravind07' class='success link'>Twitter</a><br> Let's get in touch ❤️"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
