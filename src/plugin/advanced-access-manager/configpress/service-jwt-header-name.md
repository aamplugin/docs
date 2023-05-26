---
title: service.jwt.header_name
---

### Syntax

`service.jwt.header_name = "string"`

The default value: `Authentication`

### Definition

The name of the HTTP header that may contain a JWT token for request authentication. The provided header should contain a raw token string or string prefixed with `Bearer `. Otherwise, AAM may have trouble parsing it.

:::info FYI!
AAM also attempts to look for a header `Authorization` too.
:::