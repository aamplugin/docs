---
title: service.jwt.private_cert_passphrase
---

### Syntax

`service.jwt.private_cert_passphrase = "string"`

The default value: `null`

### Definition

Pass phrase for the private certificate (if defined).

In the example below, we point to the private certificate on the server that is created with pass phrase "kindergarten".

```ini
[aam]
service.jwt.signing_algorithm = "rs256"
service.jwt.private_cert_path = "/usr/private/signing_cert.key"
service.jwt.private_cert_passphrase = "kindergarten"
```