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
| `Printer` | `liquidPrinter` | `Liquid Printer` | Prevents automatic liquid (bucket) placement while restricted. |
| `Printer` | `midairPlacement` | `Midair Placement` | Forces adjacent-only placement while restricted: Printer will not click an empty target cell that has no solid neighbor, so blocks cannot be placed floating in midair. |
| `Minimap` | `playerRadar` | `Player Radar` | Prevents player radar entries from being shown while restricted. |

Restrictions never modify the player's stored settings. The player's own values apply again when the restriction is removed or the player leaves the server.

### Midair Placement

`midairPlacement` is a virtual setting over the player's `Place Adjacent` printer toggle — there is no toggle named "Midair Placement" in the client UI:

- `value: true` means the player currently allows midair placement (their `Place Adjacent` toggle is off).
- `effectiveValue` reports whether midair placement can actually happen right now.
- While `midairPlacement` is restricted, Printer behaves as if `Place Adjacent` is enabled. The player can still change the `Place Adjacent` toggle, but placements only happen against adjacent solid blocks until the restriction is lifted.
