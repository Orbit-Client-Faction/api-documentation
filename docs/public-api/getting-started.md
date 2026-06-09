# Getting Started

This page covers the minimum flow for using the public Orbit Client API.

## 1. Register The Channel

Listen for the player registering `orbitclient:api` on the Minecraft custom payload registration channel.

Once the channel is available, wait for Orbit Client to send its `hello` message.

## 2. Read The Hello Payload

Orbit Client sends a handshake payload like this:

```json
{
  "v": 1,
  "op": "hello",
  "client": "OrbitClient",
  "minecraftVersion": "1.8.9",
  "channel": "orbitclient:api"
}
```

After receiving this payload, the server can send public API requests on `orbitclient:api`.

## 3. Query Module State

Send `state_request` for only the modules your server cares about:

```json
{
  "v": 1,
  "op": "state_request",
  "modules": ["Printer"]
}
```

Orbit responds with `state_response`. See [Module States](/public-api/modules) for the full response shape, supported modules, and module restriction operations.

Use [Options](/public-api/options) for setting shape and setting restriction operations.

::: tip
Query only the modules your server needs. Orbit refuses outbound JSON payloads above 30,000 bytes.
:::
