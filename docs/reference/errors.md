# Errors

Both APIs return explicit errors when a request cannot be completed.

## Public API

Public API errors are JSON responses sent over `orbitclient:api`.

```json
{
  "v": 1,
  "op": "bad_op",
  "ok": false,
  "error": "unknown_op",
  "message": "Unknown op: bad_op"
}
```

The `op` field uses the request or response operation context that failed.

Common causes:

| Cause | Fix |
| --- | --- |
| Unknown operation | Check the `op` value and protocol version. |
| Unknown module | Use documented module IDs. |
| Unsupported module | Use only module IDs listed in the [Modules reference](/reference/modules). |
| Missing setting ID | Include `settingId` for setting restriction operations. |
| Unsupported setting | Only restrict settings listed in the module reference. |
| Payload too large | Request fewer modules. |

## Partner API

Partner API errors are HTTPS responses.

| Status | Meaning |
| --- | --- |
| `401` | Token is missing, invalid, or revoked. |
| `429` | Rate limit exceeded. |
| `503` | Orbit presence backend unavailable. |

Partner API clients should treat non-2xx responses as temporary integration failures unless the status is `401`.
