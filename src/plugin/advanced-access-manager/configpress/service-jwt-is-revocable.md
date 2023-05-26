---
title: service.jwt.is_revocable
---

### Syntax

`service.jwt.is_revocable = "true|false"`

The default value: `true`

### Definition

The option is part of the [JWT Tokens](/plugin/advanced-access-manager/service/jwt) service that allows defining the default token's revocable status. The "revocable" token is a special type of token that can be revoked either through AAM UI or programmatically and it will no longer be used even if it is still not expired.

In the example below, if the revocable status is not explicitly defined, any new token will be considered revocable.

```ini
[aam]
service.jwt.is_revocable = true
```

The token's revocable status is included in claims as `revocable` property. The example of standard claims below.

```json
{
  "iat": 1682555103,
  "iss": "https://demo.aamportal.com",
  "exp": 1690590294,
  "jti": "b73a3e6d-1f19-44cc-9dba-2e56517dccd4",
  "refreshable": false,
  "revocable": true,
  "userId": 1
}
```