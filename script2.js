let nav = $(".nav");
let li = $("li");
let group_size = Math.ceil(li.length / 3);
let group_index = 0;
$.each(li, function (i, element) {
  element.setAttribute("data-group", group_index);
  group_index =
    i % group_size === group_size - 1 ? group_index + 1 : group_index;
});

$("#nav-toggle").click(function (e) {
  e.preventDefault();
  $.each(li, function (i, element) {
    let top =
      element.getBoundingClientRect().top +
      element.getAttribute("data-group") * -17 -
      100;
    element.style.setProperty("--top", top);
    element.style.setProperty("--delay-close", `${i * 0.1}s`);
    element.style.setProperty("--delay-open", `${(li.length - i) * 0.1}s`);
  });
  nav.toggleClass("nav-closed");
  e.stopPropagation();
});
