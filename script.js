const passBox = document.querySelector(".passbox");
const rangeInput = document.getElementById("lengthRange");
const lengthValue = document.querySelector(".lengthValue");
const copiedMsg = document.querySelector(".copied-msg");

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

function updatePassword() {
  const length = rangeInput.value;
  lengthValue.textContent = length;
  const newPassword = generatePassword(length);
  passBox.value = newPassword;

  // Hide "Copied" message when password changes
  copiedMsg.style.display = "none";
}

function copyPassword() {
  if (passBox.value !== "") {
    navigator.clipboard.writeText(passBox.value);
    copiedMsg.style.display = "inline";

    // Hide after 1.5 seconds
    setTimeout(() => {
      copiedMsg.style.display = "none";
    }, 1500);
  }
}

rangeInput.addEventListener("input", updatePassword);

// Generate initial password
updatePassword();
