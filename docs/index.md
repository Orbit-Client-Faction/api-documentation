# API Types

Orbit exposes two different API surfaces. They solve different problems and use different trust models.

## Public API

The public API is an in-game server integration API. A Minecraft server communicates with an Orbit Client player over the `orbitclient:api` custom payload channel.

Use it when your server needs to:

- Detect Orbit Client support during a player session.
- Query whether supported modules are enabled.
- Read supported module details, such as Printer runtime state.
- Disable selected modules for the current server session.

This API does not require an Orbit-issued backend token because it only talks to the connected client.

## Partner API

The Partner API is a private backend API for approved server partners and internal integrations. It is authenticated with an Orbit-issued token and is intended for server-side systems only.

Use it when your backend needs to:

- Query whether a player currently has a verified Orbit session.
- Integrate partner systems with Orbit's backend presence data.

Never call the Partner API from client-side code, plugins distributed to users, websites, or launchers.
