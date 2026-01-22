// Contact Form Handling

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("submitquery");

  // PLACEHOLDER: User needs to replace this with their actual Web App URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyYZX_8z3t2tRKVCAqmjkCXbQi3oi-O6zGcDg2IQyRRkb6jlU9XRk-c5hriZpOGXgb1/exec";

  if (form) {
    // Create a container for messages if it doesn't exist
    let messageContainer = document.getElementById("form-message-container");
    if (!messageContainer) {
      messageContainer = document.createElement("div");
      messageContainer.id = "form-message-container";
      messageContainer.style.marginTop = "15px";
      messageContainer.style.textAlign = "center";
      messageContainer.style.fontWeight = "bold";
      form.appendChild(messageContainer);
    }

    const showMessage = (text, isError = false) => {
      messageContainer.textContent = text;
      messageContainer.style.color = isError ? "#ff4444" : "#4CAF50"; // Red for error, Green for success

      // Clear message after 5 seconds if it's a success message
      if (!isError) {
        setTimeout(() => {
          messageContainer.textContent = "";
        }, 5000);
      }
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      // 1. Get Values
      const nameFn = document.getElementById("full-name");
      const emailFn = document.getElementById("email");
      const phoneFn = document.getElementById("phone");
      const messageFn = document.getElementById("message");

      const name = nameFn.value.trim();
      const email = emailFn.value.trim();
      let phone = phoneFn.value.trim();
      let message = messageFn.value.trim();

      // 2. Clear default values (legacy logic from template)
      if (phone === "Phone") phone = "";
      if (message === "Message") message = "";

      // 3. Validation
      if (!name || !email || !message) {
        showMessage("Please fill in all required fields (Name, Email, Message).", true);
        return;
      }

      // Simple email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showMessage("Please enter a valid email address.", true);
        return;
      }

      // 4. UI Feedback - Loading
      const originalBtnText = submitButton.value;
      submitButton.value = "Sending...";
      submitButton.disabled = true;
      submitButton.style.opacity = "0.7";
      messageContainer.textContent = ""; // Clear previous messages

      // 5. Send Data
      const formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
      };

      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then(response => {
          // With mode: 'no-cors', we assume success if no network error occurred.
          showMessage("Thank you! Your message has been sent successfully.");
          form.reset();
          // Reset default values if needed by the template's visual logic
          phoneFn.value = "Phone";
          messageFn.value = "Message";
        })
        .catch(error => {
          console.error("Error:", error);
          showMessage("Something went wrong. Please try again later.", true);
        })
        .finally(() => {
          // 6. UI Feedback - Reset
          submitButton.value = originalBtnText;
          submitButton.disabled = false;
          submitButton.style.opacity = "1";
        });
    });
  }
});
