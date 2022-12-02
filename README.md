# MooD JavaScript extensions

This small repository contains standard functions developed for talking to MooD action panels primarily.
Feel free to contribute via pull requests, raise issues or comment.

Example:
```js
  ssDropdownValue("select-project");
  ssHide("project-list");
  ssShow("project-list");
```
or push a button after an action is finished on the page:
```js
ssObserveNotificationBar("Save: The save completed successfully",
            function () {
                ssClickButton("run-sync");
            })
        });
```
