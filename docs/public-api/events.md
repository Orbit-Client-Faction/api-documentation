# Events

The public API is request-response based. Orbit Client does not currently expose a broad event bus to servers.

## Hello

Orbit Client sends `hello` after joining a multiplayer server and registering the API channel.

```json
{
  "v": 1,
  "op": "hello",
  "client": "OrbitClient",
  "minecraftVersion": "1.8.9",
  "channel": "orbitclient:api"
}
```

Servers can also send `hello` to request a fresh client `hello`.

## State Response

`state_response` is emitted after `state_request`. See [Module States](/public-api/modules) for the response shape.

## Module Restriction Response

`module.disable` and `module.enable` return the updated module state. See [Module Restrictions](/public-api/modules#module-restrictions).

## Setting Restriction Response

`setting.disable` and `setting.enable` return the current server restriction state. See [Options](/public-api/options#server-restrictions).

## Error Response

Failed requests return `ok: false` with an error code and message.

```json
{
  "v": 1,
  "op": "state_response",
  "ok": false,
  "error": "module_not_supported",
  "message": "Module cannot be queried by servers: Example"
}
```
