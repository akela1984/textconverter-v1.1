// Character, word and line counter
let inputTextArea = document.getElementById("inputTextarea");
let characCount = document.getElementById("characCount");
let wordCount = document.getElementById("wordCount");
let lineCount = document.getElementById("lineCount");
inputTextArea.addEventListener("input", () => {
  characCount.textContent = inputTextArea.value.length;
  let txt = inputTextArea.value.trim();
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
  lineCount.textContent = txt.split(/\r\n|\r|\n/).length;
});
// Clear the textarea
function clearFields() {
  document.getElementById("inputTextarea").value = "";
  document.getElementById("textfield2").value = "";
}

// Convert to sentence case
function firstLetterUpper(inputTextarea) {
  var newString = inputTextarea
    .toLowerCase()
    .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
      return c.toUpperCase();
    });
  return newString;
}

function convertToSentenceCase() {
  var inputTextarea = document.inputTextareaForm.inputTextarea.value;
  var newString = firstLetterUpper(inputTextarea);
  document.getElementById("inputTextarea").value = newString;
}

// Convert to lover case
function convertToLowerCase(inputTextarea) {
  var inputTextarea = document.inputTextareaForm.inputTextarea.value;
  var newStringLower = inputTextarea.toLowerCase();
  document.getElementById("inputTextarea").value = newStringLower;
}

// Convert to UPPER case
function convertToUpperCase(inputTextarea) {
  var inputTextarea = document.inputTextareaForm.inputTextarea.value;
  var newStringUpper = inputTextarea.toUpperCase();
  document.getElementById("inputTextarea").value = newStringUpper;
}

// Convert to Capitalised case
function convertToCapitalisedCase(inputTextarea) {
  var inputTextarea = document.inputTextareaForm.inputTextarea.value;
  var newStringCapitalised = inputTextarea
    .toLowerCase()
    .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
      return c.toUpperCase();
    })
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
  document.getElementById("inputTextarea").value = newStringCapitalised;
}

// Convert to reverse case
function convertToReverseCase(inputTextarea) {
  var inputTextarea = document.inputTextareaForm.inputTextarea.value;
  var invertedStr = inputTextarea.replace(/[a-z]/gi, (char) =>
    /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()
  );
  document.getElementById("inputTextarea").value = invertedStr;
}

// Convert to Random case
function convertToRandomCase(inputTextarea) {
  var inputTextarea = document.inputTextareaForm.inputTextarea.value;
  var randomStr = inputTextarea
    .split("")
    .map((v) => (Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()))
    .join("");
  document.getElementById("inputTextarea").value = randomStr;
}

// Download in txt
function downloadTxt(inputTextarea) {
  var textcontent = document.getElementById("inputTextarea").value;

  var downloadableLink = document.createElement("a");
  downloadableLink.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(textcontent)
  );
  downloadableLink.download = "myFile" + ".txt";
  document.body.appendChild(downloadableLink);
  downloadableLink.click();
  document.body.removeChild(downloadableLink);
}
// Copy to Clipboard
function copy(inputTextarea) {
  let copyTextarea = document.getElementById("inputTextarea");
  copyTextarea.select();
  document.execCommand("copy");
}

// Tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

function copyColor() {
  var copyText = document.getElementById("color");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}
// QR
function generateQRCode() {
  let website = document.getElementById("website").value;
  if (website) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, website);

    document.getElementById("qrcode-container").style.display = "block";
  } else {
    alert("Please some text or URL");
  }
}

// Toggle dark mode
// Function to toggle dark mode
function toggleDarkMode() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const cardBody = document.querySelector('.card-body');
  
  // Check if there's a stored preference for dark mode
  const isDarkMode = sessionStorage.getItem('darkMode') === 'true';

  if (isDarkMode) {
    darkModeToggle.checked = true;
    body.classList.add('dark-mode');
    cardBody.classList.add('dark-mode');
  } else {
    darkModeToggle.checked = false;
    body.classList.remove('dark-mode');
    cardBody.classList.remove('dark-mode');
  }

  // Listen for changes in the dark mode toggle button
  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      sessionStorage.setItem('darkMode', 'true');
      body.classList.add('dark-mode');
      cardBody.classList.add('dark-mode');
    } else {
      sessionStorage.setItem('darkMode', 'false');
      body.classList.remove('dark-mode');
      cardBody.classList.remove('dark-mode');
    }
  });
}

// Call the function to toggle dark mode
toggleDarkMode();
