function addPopupListeners(linkId, popupId) {
  const link = document.getElementById(linkId);
  const popup = document.getElementById(popupId);

  link.addEventListener("mouseover", () => {
    popup.classList.add("show");
  });

  link.addEventListener("mouseout", () => {
    popup.classList.remove("show");
  });
}

addPopupListeners("scene", "popup_scene");
addPopupListeners("lichete", "popup_lichete");
addPopupListeners("musee", "popup_musee");
addPopupListeners("concours", "popup_concours");
addPopupListeners("place_principal", "popup_place_principal");
