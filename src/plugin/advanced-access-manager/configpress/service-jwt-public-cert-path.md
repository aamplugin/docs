---
title: service.jwt.public_cert_path
---

### Syntax

`service.jwt.public_cert_path = "string"`

The default value: `null`

### Definition

Absolute path to the public certificate that pairs with private certification used to issue the provided JWT token. The [signing algorithm](/plugin/advanced-access-manager/configpress/service-jwt-signing-algorithm) should be `RS256`, `RS384`, or `RS512`.

In the example below, we point to the public certificate on the server.

```ini
[aam]
service.jwt.signing_algorithm = "rs256"
service.jwt.public_cert_path = "/usr/private/signing_cert.key.pub"
```
