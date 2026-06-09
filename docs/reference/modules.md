# Modules

This page lists module IDs currently documented for public API state queries.

Module IDs are case-insensitive in requests, but integrations should use the exact casing shown here.

| Module ID | Description |
| --- | --- |
| `Printer` | Schematic Printer state, Printer runtime details, Printer settings, and server disable support. |
| `Minimap` | Minimap module state. |
| `EasyPlace` | Easy Place module state and server disable support. |

Only query modules listed on this page. Orbit may add more queryable modules later as the public API expands.

## Module Extra Fields

### Printer

`Printer` module objects include an `extra` object with read-only runtime details:

| Field | Type | Meaning |
| --- | --- | --- |
| `printingEnabled` | boolean | `true` when the Printer module is enabled and the internal Schematica printer loop is enabled. |
| `isPrinting` | boolean | `true` when `printingEnabled` is `true` and Printer successfully placed a block in the last second. |

Use `printingEnabled` to know whether Printer is currently allowed to run. Use `isPrinting` as a live activity signal; it can be `false` while Printer is enabled if there is no loaded schematic, no block was placed recently, or Printer is waiting for delay, inventory, or placement conditions.

## Server-Controllable Modules

Servers can disable and re-enable only the modules listed here.

| Module ID | Behavior |
| --- | --- |
| `Printer` | Disables Schematic Printer for the current server session. |
| `EasyPlace` | Disables Easy Place for the current server session. |

## Server-Controllable Settings

Servers can restrict only the settings listed here.

| Module ID | Setting ID | Setting name | Behavior |
| --- | --- | --- | --- |
| `Printer` | `print360` | `360 Printer` | Prevents 360-degree Printer placement while restricted. |
| `Minimap` | `playerRadar` | `Player Radar` | Prevents player radar entries from being shown while restricted. |
