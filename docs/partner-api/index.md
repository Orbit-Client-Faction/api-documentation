# Partner API

The Partner API is a private backend API for approved Orbit server partnerships and trusted server-side integrations.

It is not the same as the public in-game API. Instead of talking to a connected client, your backend sends authenticated HTTPS requests to Orbit's backend.

## Base Path

```text
https://api.orbitclient.com/v1/external
```

## Current Capability

| Capability | Endpoint |
| --- | --- |
| Player status | `GET https://api.orbitclient.com/v1/external/players/{player_uuid}/status` |

The current partner-facing endpoint answers whether a player has at least one verified Orbit socket session.

## Access

Partner API tokens are created and managed by Orbit. They are intended for backend use by approved partners.

::: danger
Never expose a Partner API token in client-side code, public plugins, launcher code, web pages, logs, or crash reports.
:::
