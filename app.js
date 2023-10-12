const d = document;

const isValidEmail = (email) => {
  const regex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return regex.test(email);
};

d.addEventListener("DOMContentLoaded", (e) => {
  const $emailInput = d.getElementById("email"),
    $errorMessage = d.getElementById("error-message"),
    $newsletterForm = d.getElementById("newsletter-form");
  let touched = false,
    validEmail = false;

  const showErrorMessage = (value) => {
    const isValid = isValidEmail(value);
    $errorMessage.classList.toggle(
      "error-message--hidden",
      isValid || !touched
    );
    $emailInput.classList.toggle(
      "newsletter__email-input--error",
      !isValid && touched
    );
    validEmail = isValid;
  };

  $emailInput.addEventListener("keyup", (e) =>
    showErrorMessage(e.target.value)
  );
  $emailInput.addEventListener("blur", (e) => {
    touched = true;
    showErrorMessage(e.target.value);
  });
  $newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validEmail) return alert("The email is not valid.");
    $emailInput.value = "";
    window.location.href = "/success.html";
  });
});