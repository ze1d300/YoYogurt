$("contactForm").on("submit", (e) => {
  e.preventDefault();
  $.ajax({
    url: "mail/contact.php",
    type: "POST",
    data: $(this).serialize(),
    success: () => {
      alert("Message sent succesfully!");
      $("#contactForm")[0].reset();
    },
    error: () => {
      alert("Something went wrong.Please try again later");
    },
  });
});
