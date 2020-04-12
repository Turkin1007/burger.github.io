 const popupClose = $(".status-popup__close");
 const popup = $(".popup");

 popupClose.click( () => {
   popup.removeClass("popup--show");
});
 