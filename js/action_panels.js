// Declare variables
var infoOutput = true; //Always true.
var errorOutput = true; //Always true.
var warnOutput = false; //Always set to false before production and in production environment.
var debugOutput = false; //Always set to false before production and in production environment.
var wasShown = 0; //Used for tracking the notification bar.

/* Messaging functions */
function ssWarn(message) {
  if (warnOutput)
      console.warn("[SS WARNING] " + message);
}

function ssError(message) {
  if (errorOutput)
      console.info("[SS ERROR] " + message);
}

function ssInfo(message) {
  if (infoOutput)
      console.info("[SS Info] " + message);
}

function ssDebug(message) {
  if (debugOutput)
      console.debug("[SS Debug] " + message);
}

/* Setter functions */
function ssSetTexteditorValue(name, val) {
  $(".mood-node-name-" + name + " input")[0].value = val;
}

function ssSetDropdownValue(name, val) {
  return ssSetTexteditorValue(name, val);
}

/**
 * @desc - Hide multiple elements
 * @param {Array} - Array of elements
 */
function ssHideMultipleElements(array) {
  array.forEach((element) => {
    element.style.visibility = "hidden";
  });
}

/**
 * @desc - Show multiple elements
 * @param {Array} - Array of elements
 */
function ssShowMultipleElements(array) {
  array.forEach((element) => {
    element.style.visibility = "visible";
  });
}

/**
 * @desc - Remove an element from the DOM. Use this if you want to be able to target the element in the DOM, but want it to be invisible and not take up space from other elements.
 * @param {String} - Name of the element
 */
function ssRemove(className) {
  if (ssExists(className)) {
    document.querySelector(".mood-node-name-" + className).style.display =
      "none";
  } else {
    return null;
  }
}

/**
 * @desc - Return an element you removed from the DOM.
 * @param {STRING} - Name of the element
 */
function ssCreate(className) {
  if (ssExists(className)) {
    document.querySelector(".mood-node-name-" + className).style.display =
      "block";
  } else {
    return null;
  }
}

/**
 * @desc - Destroy target element. It can't be regenerated.
 * @param {STRING} - Name of the element
 */
function ssKill(className) {
  if (ssExists(className)) {
    document.querySelector(".mood-node-name-" + className).remove();
  } else {
    return null;
  }
}

/**
 * @desc - Add an "explanation-text/tooltip" to an element, that will display when the cursor hover overs it
 * @param {String} - Name of the element
 * @param {String} - The text to be displayed. This can be a long text.
 * @param {String} - Top position in pixels example "0px" or "-150px" or "150px"
 * @param {String} - Left position in pixels example "0px" or "-150px" or "150px"
 */
function ssAddToolTip(className, toolTipText, top, left) {
  if (ssExists(className)) {
    ssGetElement(className).classList.add("tooltip-parent");
    ssGetElement(className).innerHTML +=
      '<span class="tooltiptext ' +
      "tooltip-" +
      className +
      '">' +
      toolTipText +
      "</span>";
    var toolTipElement = ssGetNonMoodElement("tooltip-" + className);
    toolTipElement.style.top = top;
    toolTipElement.style.left = left;
  } else {
    return null;
  }
}

/* Get Value functions */
function ssInfopanelValue(name) {
  if ($(".mood-node-name-" + name).length > 0)
      return $(".mood-node-name-" + name).text().trim();
  return 0;
}

function ssSingleSelectValue(name) {
  if (!$(".mood-node-name-" + name).length > 0) return "";
  var text = $(".mood-node-name-" + name)[0].innerText;
  if (text == "Select...")
      return "";
  else
      return text;
}

function ssTextAreaValue(name) {
  if ($(".mood-node-name-" + name + " textarea").length > 0)
      return $(".mood-node-name-" + name + " textarea").val();
  return 0;
}

function ssTexteditorValue(name) {
  return ssDropdownValue(name);
}

function ssCalendarValue(name) {
  return ssDropdownValue(name);
}

function ssDropdownValue(name) {
  if ($(".mood-node-name-" + name + " input").length > 0 && $(".mood-node-name-" + name + " input")[0].value)
      return $(".mood-node-name-" + name + " input")[0].value.trim();
  else
      return 0;
}

function ssRadiobuttons(name) {
  return $(".mood-node-name-" + name + " .dx-list-item-selected .list-item-text").text().trim();
}

function ssRadiobuttonsCount(name) {
  if (ssExists(name))
      return $(".mood-node-name-" + name + " .dx-list-item").length;
  return 0;
}

function ssHtmlValue(name) {
  //Returns undefined on missing element, no errors.
  return $(".mood-node-name-" + name).html();
}

function ssReturnDollarNodeName(name) {
  return $(".mood-node-name-" + name);
}

function ssReturnDollarAndText(text) {
  return $(text);
}

function ssReturnHrefLink(text, link) {
  return $(text).attr("href", link); //The link taken as a parameter has to be defined as a var first
}

/**
 * @desc - Get a HTML element from the DOM
 * @param {String} - Class name of the element
 * @returns {HTML} - The HTML element
 */
function ssGetElement(className) {
  if (ssExists(className)) {
    return document.querySelector(".mood-node-name-" + className);
  }
  return null;
}

/**
 * @desc - Get a collection of HTML element from the DOM
 * @param {String} - Class name of the elements
 * @returns {Array} - An array of matching HTML elements
 */
function ssGetAllElements(className) {
  if (ssExists(className)) {
    return document.querySelectorAll(".mood-node-name-" + className);
  }
  return null;
}

/**
 * @desc - Get an element from the DOM not injected by MooD or one that doesn't have mood-node-name-class-name as it's class name
 * @param {String} - Class name of the element
 * @returns {HTLM} - The HTML element
 */
function ssGetNonMoodElement(className) {
  if (ssNoneMoodElementExists(className)) {
    return document.querySelector("." + className);
  }
  return null;
}

/**
 * @desc - Get the value of the text wrapped by an HTML element (what is visible to the user)
 * @param {String} - Name of the element
 * @returns {String} - The innerText of the element (what is visible to the user)
 */
function ssGetInnerText(className) {
  if (ssExists(className)) {
    return document
      .querySelector(".mood-node-name-" + className)
      .innerText.trim();
  }
  return null;
}

/**
 * @desc - Get the length of a text in an element as number of characters. Can be used to evaluate if an element is empty.
 * @param {String} - Name of the element
 * @returns {String} - Length of the innerText of the element (number of characters)
 */
function ssGetInnerTextLength(className) {
  if (ssExists(className)) {
    return document
      .querySelector(".mood-node-name-" + className)
      .innerText.trim().length;
  }
  return null;
}

/**
 * @desc - Get the textContent property of an element. Sometomes MooD doesn't set text as innerText, but instead with the textContent property. In that case, use this function.
 * @param {String} - Name of the element
 * @returns {String} - The textContent property of an element
 */
function ssGetTextContent(className) {
  if (ssExists(className)) {
    return document
      .querySelector(".mood-node-name-" + className)
      .textContent.trim();
  }
  return null;
}

/**
 * @desc - Get the value of a MooD generated infopanel
 * @param {String} - Name of the element
 * @returns {String} - Name in the infopanel
 */
function ssInfopanelValue(name) {
  if ($(".mood-node-name-" + name).length > 0)
    return $(".mood-node-name-" + name)
      .text()
      .trim();
  return 0;
}

/**
 * @desc - Get a tab as an HTML element
 * @param {String} - Name of the tab
 * @returns {HTML} - The HTML of the Tab
 */
function ssGetTab(className) {
  return Array.from(document.querySelectorAll("li")).find(
    (el) => el.textContent === className
  );
}

/**
 * @desc - Check if elements not generated by MooD exists. This method handles errors in case you target a tab that doesn't exist.
 * @param {String} - Name of the element
 * @returns {Boolean} - If an element exists or not TRUE/FALSE
 */
function ssNoneMoodElementExists(className) {
  if (document.querySelector("." + className)) {
    return true;
  }
  return false;
}

/**
 * @desc - Check if any of selected values of radiobuttons are == value
 * @param {String} - Value to be checked example "Yes". Mood chosen classname of selected radiobuttons example "dx-list-item-selected"
 * @returns {Boolean} - If value exists in radio buttons
 */
function ssCheckRadioButtonValues(value, className, index) {
  var radioButtons = document.getElementsByClassName(className);
  for (i = index; i < radioButtons.length; i++) {
    if (radioButtons[i].innerText == value) {
      return true;
    }
  }
  return false;
}

/**
 * @desc -  Checks if an inut field is a certain length of characters
 * @param {String} className - Name of the element
 * @param {String} childtag - The tag the input is wrapped in
 * @param {Int} length - Length of characters to check for
 * @returns {Boolean} True if specified length of the input text field equeals the input length given in the paramenter
 */
function ssValidateInputLength(className, childtag, length) {
  if (ssExists(className)) {
    var childnode = document
      .getElementsByClassName("mood-node-name-" + className)[0]
      .getElementsByTagName(childtag)[0];
    var childnodeLength = childnode.value.length;
    if (childnodeLength == length) {
      return true;
    } else {
      return false;
    }
  } else {
    return null;
  }
}

/**
 * @desc - Get the value attribute of an element with text input
 * @param {String} className - Name of the element
 * @returns
 */
function ssGetValueAttribute(className) {
  if (ssExists(className)) {
    return document.querySelector(".mood-node-name-" + className + " input")
      .value;
  } else {
    return null;
  }
}

/**
 * @desc - Get the value (title attribute) of an element selected using the Multi Select Dropdown
 * @param {String} className - Name of the element
 * @returns {String} - The selected value of the dropdown
 */
function ssGetValueFromMultiSelectDropdown(className) {
  if (ssExists(className)) {
    return ssGetElement(
      className + " .dx-texteditor.dx-texteditor-empty.dx-widget.dx-textbox"
    ).getAttribute("title");
  } else {
    return false;
  }
}

/* Other functionality */
function ssHide(name) {
  $(".mood-node-name-" + name).css("visibility", "hidden");
}

//Hides a menu item based on the name of the menu item, for example Data Quality. Is case sensitive
function ssHideMenuItem(name) {
  var text = name;
  $('a').filter(function () {
      return $(this).text() === text;
  }).hide();
}

function ssShow(name) {
  $(".mood-node-name-" + name).css("visibility", "visible");
}

function ssClickButton(name) {
  if (!$(".mood-node-name-" + name).length > 0) return 0;
  $(".mood-node-name-" + name + " .mood-button").click();
  return 1;
}

function ssExists(name) {
  if ($(".mood-node-name-" + name) && $(".mood-node-name-" + name).length > 0)
      return $(".mood-node-name-" + name).length;
  return null;
}

//Arguments:
// name: of timeline matrix
// top: boolean to set to top or bottom
function ssTimelineArrowsOnTop(name, top) {
  if (top) {
      $(".mood-node-name-" + name + " .MooDOverlayContainer ").css("z-index", "9999");
  }
  else
      $(".mood-node-name-" + name + " .MooDOverlayContainer ").css("z-index", "0");
}

function ssObserveNotificationBar(searchFor, functionref) {
  var ssNotificationBarObserver = new MutationObserver(function () {
      var text = $(".NotificationBar span").text().trim();
      var shown = $(".NotificationBar span").css("visibility") == 'visible';
      if (shown && text.length > 4 && text == searchFor) {
          if (!wasShown) {
              //console.info("*** Function called.");
              functionref();
          }
          wasShown = 1;
      }

      if (wasShown && !shown) {
          wasShown = 0;
          //console.info("*** Bar hidden, reset.");
      }
  });

  if ($(".NotificationBar").length > 0)
      ssNotificationBarObserver.observe($(".NotificationBar")[0], { attributes: true, childList: false, subtree: true });
  //console.info("*** Observer in place.");
}