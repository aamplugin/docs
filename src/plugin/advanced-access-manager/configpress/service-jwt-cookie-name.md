---
title: service.jwt.cookie_name
---

### Syntax

`service.jwt.cookie_name = "string"`

The default value: `aam_jwt_token`

### Definition

The name of the HTTP cookie may contain a JWT token for request authentication. The provided cookie should contain a raw token only. Otherwise, AAM may have trouble parsing it.
