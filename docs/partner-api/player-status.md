# Player Status

Use this endpoint to check whether a player currently has a verified Orbit Client session.

```http
GET https://api.orbitclient.com/v1/external/players/{player_uuid}/status
```

## Path Parameters

| Name | Type | Description |
| --- | --- | --- |
| `player_uuid` | UUID | Minecraft player UUID. |

## Request

```http
GET https://api.orbitclient.com/v1/external/players/069a79f4-44e9-4726-a5be-fca90e38aaf5/status
Authorization: Bearer orb_ext_your_token
```

## Response

```json
{
  "uuid": "069a79f4-44e9-4726-a5be-fca90e38aaf5",
  "online": true
}
```

## Presence Semantics

`online` means Orbit's backend currently knows about at least one verified socket session for that player UUID.

This endpoint does not list connected players and does not filter by server address. It answers one UUID at a time.

## Recommended Usage

- Query status only when your server needs to make a partnership or integration decision.
- Cache short-lived results on your side when polling many players.
- Treat `online: false` as "no verified Orbit session was found", not as proof that the player is offline from Minecraft.
