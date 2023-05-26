---
title: service.jwt.expires_in
---

### Syntax

`service.jwt.expires_in = "string|number"`

The default value: `+24 hours`

### Definition

The option is part of the [JWT Tokens](/plugin/advanced-access-manager/service/jwt) service that allows defining the default token's TTL (time to live).

In the example below, if the expiration is not explicitly defined, any new token will be valid for 10 hours from creation.

```ini
[aam]
service.jwt.expires_in = "+10 hours"
```

The `service.jwt.expires_in` may contain any valid [Date & Time Format](https://www.php.net/manual/en/datetime.formats.php) as described in the official PHP documentation. However, if a numeric value is provided, then the value is interpreted as the number of seconds.

The token's expiration date is included in claims as UTC timestamp `exp` property. The example of standard claims below.

```json
{
  "iat": 1682555103,
  "iss": "https://demo.aamportal.com",
  "exp": 1690590294,
  "jti": "b73a3e6d-1f19-44cc-9dba-2e56517dccd4",
  "refreshable": false,
  "userId": 1
}
```