$(document).ready(function () {
  const validName = new RegExp(/^[A-Za-z]+$/);
  const validMail = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  );
  const validSujet = new RegExp(/^[A-Za-z]+$/);
  const validMessage = new RegExp(/[_a-z0-9-]+(\.[_a-z0-9-]+)*/);
  // function to check the form
  $("#submit").click(function () {
    const name = $("#name").val();
    const mail = $("#mail").val();
    const sujet = $("#sujet").val();
    const message = $("#message").val();
    let bool = true;
    const vide = "Veuillez renseigner ce champ.";
    const invalid = "entrée invalide";
    const i = '<i class="fas fa-exclamation-triangle"></i>';
    // check if the name is correct!
    if (name == "") {
      $("#nameError").html(i + vide);
      $(".name").addClass("w3-panel w3-pale-red w3-padding-16");
      bool = false;
    } else if (!validName.test(name)) {
      $("#nameError").html(i + invalid);
      $(".name").addClass("w3-panel w3-pale-red w3-padding-16");
      bool = false;
    } else {
      $("#nameError").html("");
      $(".name").removeClass("w3-panel w3-pale-red w3-padding-16");
    }
    // check if the mail is correct!
    if (mail == "") {
      $("#mailError").html(i + vide);
      $(".mail").addClass("w3-panel w3-pale-red w3-padding-16");
      bool = false;
    } else if (!validMail.test(mail)) {
      $("#mailError").html(i + invalid);
      $(".mail").addClass("w3-panel w3-pale-red w3-padding-16");
      bool = false;
    } else {
      $("#mailError").html("");
      $(".mail").removeClass("w3-panel w3-pale-red w3-padding-16");
    }
    // check if the subject is correct!
    if (sujet == "") {
      $("#sujetError").html(i + vide);
      $(".sujet").addClass("w3-panel w3-pale-red w3-padding-16");
      bool = false;
    } else if (!validSujet.test(sujet)) {
      $("#sujetError").html(i + invalid);
      $(".sujet").addClass("w3-panel w3-pale-red w3-padding-16");
      bool = false;
    } else {
      $("#sujetError").html("");
      $(".sujet").removeClass("w3-panel w3-pale-red w3-padding-16");
    }
    // check if the message is correct!
    if (message == "") {
      $("#messageError").html(i + vide);
      $(".message").addClass("w3-panel w3-pale-red w3-padding-16");
      bool = false;
    } else if (!validMessage.test(message)) {
      $("#messageError").html(i + invalid);
      $(".message").addClass("w3-panel w3-pale-red w3-padding-16");
      bool = false;
    } else {
      $("#messageError").html("");
      $(".message").removeClass("w3-panel w3-pale-red w3-padding-16");
    }
    return bool;
  });
});
