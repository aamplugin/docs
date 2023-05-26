---
title: service.jwt.private_cert_path
---

### Syntax

`service.jwt.private_cert_path = "string"`

The default value: `null`

### Definition

Absolute path to the private certificate for JWT token issuer when the [signing algorithm](/plugin/advanced-access-manager/configpress/service-jwt-signing-algorithm) is `RS256`, `RS384`, or `RS512`.

In the example below, we point to the private certificate on the server.

```ini
[aam]
service.jwt.signing_algorithm = "rs256"
service.jwt.private_cert_path = "/usr/private/signing_cert.key"
```
