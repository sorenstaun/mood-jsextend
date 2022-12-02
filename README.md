# MooD JavaScript extensions

This small repository contains standard functions developed for talking to MooD action panels primarily.
Feel free to contribute via pull requests, raise issues or comment.

The things in this repository are confirmed working on MooD 16 Build 85.01, but use at your own peril. This software comes with no warranties, bla bla.

Example:
```js
ssDropdownValue("select-project"); //Get value from a Dropdown
ssHide("project-list"); //Hide a panel called "Project List"
ssShow("project-list"); //Show the same panel
```
or push a button after an action is finished on the page:
```js
ssObserveNotificationBar("Save: The save completed successfully",
    function () {
        ssClickButton("run-sync");
});
```
