"use strict";

(function() {
  var pageHeader = document.querySelector(".page-header");
  var menuToggle = pageHeader.querySelector(".js-menu-toggle");

  menuToggle.addEventListener("click", function() {
    pageHeader.classList.toggle("page-header--menu-closed");
  });
})();
