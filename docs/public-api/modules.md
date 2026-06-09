# Module States

The `state_request` operation returns enabled and server-disabled state for supported Orbit modules.

## Request

```json
{
  "v": 1,
  "op": "state_request",
  "modules": ["Printer"]
}
```

## Response

```json
{
  "v": 1,
  "op": "state_response",
  "ok": true,
  "modules": [
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
      ],
      "extra": {
        "printingEnabled": true,
        "isPrinting": false
      }
    }
  ]
}
```

## Module IDs

Module lookup is case-insensitive, but docs and integrations should use exact IDs from the reference list.

The public API is intentionally conservative. Supported module IDs are listed in the [Modules reference](/reference/modules). Unsupported module IDs return `module_not_supported`.

If `modules` is omitted, Orbit returns all supported public modules.

Module-specific `extra` fields are documented in the [Modules reference](/reference/modules).

## Module Restrictions

Use `module.disable` to restrict a module for the current server session:

```json
{
  "v": 1,
  "op": "module.disable",
  "moduleId": "Printer"
}
```

Only modules listed as server-controllable in the [Modules reference](/reference/modules#server-controllable-modules) can be controlled by servers. Modules disabled by the server are restored automatically when the player leaves the server.

The response includes the updated module object.

```json
{
  "v": 1,
  "op": "module.disable",
  "ok": true,
  "module": {
    "id": "Printer",
    "name": "Printer",
    "enabled": false,
    "serverDisabled": true,
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
    ],
    "extra": {
      "printingEnabled": false,
      "isPrinting": false
    }
  }
}
```

Use `module.enable` to remove the server restriction:

```json
{
  "v": 1,
  "op": "module.enable",
  "moduleId": "Printer"
}
```

`module.enable` does not force a module on. It removes the server restriction and restores the module only if it was enabled before the server disabled it.

Use [Options](/public-api/options) for setting shape and setting restriction operations.
