# Options

The public API includes allowlisted module settings in `state_response` module objects. Orbit decides which settings are included; servers cannot request a different settings shape.

Settings are read-only unless a documented operation says otherwise.

## Setting Shape

Settings are returned as an array on each module:

```json
{
  "id": "Printer",
  "name": "Printer",
  "enabled": true,
  "serverDisabled": false,
  "settings": [
    {
      "id": "print360",
      "name": "360 Printer",
      "type": "boolean",
      "value": true,
      "serverControllable": true,
      "serverDisabled": false,
      "effectiveValue": true
    }
  ]
}
```

The current public settings are boolean settings.

`value` is the player's current setting value. `effectiveValue` is present for server-controllable boolean settings and reflects whether that setting is currently allowed to take effect.

## Server Restrictions

The public API does not provide a general settings write API. Servers can only disable or re-enable documented, allowlisted settings for the current server session.

Use the [Modules reference](/reference/modules) as the source of truth for supported module IDs and server-controllable settings. Only settings listed there are returned as stable integration targets.

Disable a setting:

```json
{
  "v": 1,
  "op": "setting.disable",
  "moduleId": "Printer",
  "settingId": "print360"
}
```

Remove the server restriction:

```json
{
  "v": 1,
  "op": "setting.enable",
  "moduleId": "Printer",
  "settingId": "print360"
}
```

Both operations return a `restriction` object:

```json
{
  "v": 1,
  "op": "setting.disable",
  "ok": true,
  "restriction": {
    "moduleId": "Printer",
    "settingId": "print360",
    "disabled": true
  }
}
```

`setting.enable` does not force the player's setting on. It only removes the server restriction so the player's own setting value applies again.
