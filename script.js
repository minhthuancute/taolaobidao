$(document).ready(function () {
  console.log($(window).innerHeight());
  const elments = [
    {
      selector: "#slider2",
      animation: "fadeIn",
    },
  ];
  let index = 0;
  $(window).scroll(function () {
    const top_of_element = $(elments[0].selector).offset().top;
    const bottom_of_element =
      $(elments[0].selector).offset().top +
      $(elments[0].selector).outerHeight();
    const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    const top_of_screen = $(window).scrollTop();

    if (
      bottom_of_screen > top_of_element &&
      top_of_screen < bottom_of_element
    ) {
      console.log("in view");
      $(".products-item").each(function (i, obj) {
        $(this).addClass(elments[0].animation);
      });
    } else {
      console.log("not in view");
      $(".products-item").each(function (i, obj) {
        $(this).removeClass(elments[0].animation);
      });
    }
  });
});
