$(document).ready(function () {
  $(".validation-form").each(function () {
    var phoneForm = $(this);
    var phoneInput = phoneForm.find("#phone");
    var iti = window.intlTelInput(phoneInput[0], {
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
      initialCountry: "pl",
      separateDialCode: true
    });

    phoneForm.on("submit", function (e) {
      e.preventDefault();

      var firstName = phoneForm.find("#first-name").val();
      var lastName = phoneForm.find("#last-name").val();
      var email = phoneForm.find("#email").val();
      var phoneNumber = iti.getNumber();

      if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || phoneNumber === "") {
        alert("Proszę wypełnić wszystkie pola formularza.");
      } else if (!isValidEmail(email)) {
        alert("Wprowadź poprawny adres email.");
      } else if (!isValidPhoneNumber(phoneNumber)) {
        alert("Numer telefonu komórkowego powinien składać się z co najmniej 5 cyfr.");
      } else {
        alert("Formularz został pomyślnie wysłany!");
      }
    });
  });

  $("#phone").on("input", function () {
    this.value = this.value.replace(/[^0-9\+]/g, '');
  });

  function isValidPhoneNumber(phoneNumber) {
    var numericPhoneNumber = phoneNumber.replace(/\D/g, '');
    return numericPhoneNumber.length >= 5;
  }

  function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
});
