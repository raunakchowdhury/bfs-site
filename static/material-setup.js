let initializeItems = (selector, mdcClass) => {
  let stuff = document.querySelectorAll(selector);
  for (let x = 0; x < stuff.length; x++) {
    mdcClass.attachTo(stuff[x]);
  }
};

let initializeMDC = (alreadyCalled = false) => {
  // Handle stuff like buttons that should automatically have ripple added

  initializeItems(
    ".mdc-button, .mdc-tab__ripple, .mdc-card__primary-action",
    mdc.ripple.MDCRipple
  );

  initializeItems(".mdc-text-field", mdc.textField.MDCTextField);

  initializeItems(
    ".mdc-text-field-helper-text",
    mdc.textField.MDCTextFieldHelperText
  );

  initializeItems(".mdc-tab-bar", mdc.tabBar.MDCTabBar);

  initializeItems(".mdc-list", mdc.list.MDCList);

  initializeItems(".mdc-chip-set", mdc.chips.MDCChipSet);

  initializeItems(".mdc-select", mdc.select.MDCSelect);

  initializeItems(
    ".mdc-text-field-character-counter",
    mdc.textField.MDCTextFieldCharacterCounter
  );

  initializeItems(".mdc-radio", mdc.radio.MDCRadio);

  alreadyCalled ? window.mdc.autoInit(document, () => {}) : mdc.autoInit();
};

initializeMDC();

const drawer = new mdc.drawer.MDCDrawer(document.querySelector(".mdc-drawer"));

document
  .querySelector(".mdc-top-app-bar__navigation-icon")
  .addEventListener("mouseover", () => {
    drawer.open = !drawer.open;
  });

document
  .querySelector(".mdc-drawer-scrim")
  .addEventListener("mouseover", () => {
    drawer.open = !drawer.open;
  });
