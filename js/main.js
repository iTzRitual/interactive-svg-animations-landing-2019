$(function () {
  $("#wlacznik").click(function () {
    $("#hero").toggleClass("hero-active");
    $(".cls-15").toggleClass("active-cls-15");
    $(".cls-18").toggleClass("active-cls-18");
    $(this).toggleClass("rev-wlacznik");
    $(".hero-title").css("opacity", "0");
    $(".google-phone").toggleClass("google-phone-active");
    $(".hero-title2").css("opacity", "1");
    $("#menuBtn").css({ visibility: "visible", opacity: "1" });
  });

  $("#zgas1, #zapal1").click(function () {
    $("#hero").toggleClass("hero-active");
    $("#zapal1").toggleClass("zapal1-active");
    $("#zgas1").toggleClass("zgas1-unactive");
    $(".cls-15").toggleClass("active-cls-15");
    $(".cls-18").toggleClass("active-cls-18");
  });

  const closeAllSections = () => {
    $("#about").removeClass("about-active");
    $("#configuration").removeClass("configuration-active");
    $("#products").removeClass("products-active");
    $("#contact").removeClass("contact-active");
  };

  const toggleMenu = () => {
    $("#menu, #menuBtn").toggleClass("menu-active");
  };

  $("#menuBtn, #wlaczmenu").click(function () {
    toggleMenu();
    if ($("#menu").hasClass("menu-active")) {
      closeAllSections();
    }
  });

  $(
    "#home, #about-click, #configuration-click, #products-click, #contact-click",
  ).click(function () {
    const id = $(this).attr("id");

    if (id !== "home") {
      const section = id.replace("-click", "");
      $(`#${section}`).toggleClass(`${section}-active`);
    }

    toggleMenu();
  });

  $("#home-text").click(function () {
    $("#menu, #menuBtn").removeClass("menu-active");
    closeAllSections();
  });
});
