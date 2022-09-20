// Declare variables
var infoOutput = true;   //Always true.
var errorOutput = true;   //Always true.
var warnOutput = false;  //Always set to false before production and in production environment.
var debugOutput = false;  //Always set to false before production and in production environment.


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

