# Public API

The public API lets server owners integrate directly with Orbit Client players while they are connected to a Minecraft server.

Orbit Client registers a Forge custom payload channel named `orbitclient:api`. The protocol uses JSON payloads with `v: 1` and is currently focused on supported module state, server-enforced module restrictions, and allowlisted setting restrictions.

## Operations

The current public API supports these server-to-client operations:

| Operation | Purpose |
| --- | --- |
| `hello` | Request a fresh client hello payload. |
| `state_request` | Query supported module state and module-specific details. |
| `module.disable` | Disable a server-controllable module for the current server session. |
| `module.enable` | Remove a server restriction from a supported module. |
| `setting.disable` | Disable an allowlisted setting for the current server session. |
| `setting.enable` | Remove a server restriction from an allowlisted setting. |

Operation names are exact. The client does not accept aliases.

## Transport

| Field | Value |
| --- | --- |
| Channel | `orbitclient:api` |
| Encoding | UTF-8 JSON |
| Protocol version | `1` |
| Minecraft version | `1.8.9` |

The client accepts JSON sent as raw UTF-8, Java `readUTF`, or Minecraft `PacketBuffer.readStringFromBuffer`.

## Message Shape

Every request includes the protocol version and operation:

```json
{
  "v": 1,
  "op": "state_request"
}
```

Every successful response includes:

```json
{
  "v": 1,
  "op": "state_response",
  "ok": true
}
```

`requestId` is optional. When present, Orbit echoes it in the response so servers can match responses to requests. It is not a security nonce and does not affect authorization or replay protection.
