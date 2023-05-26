---
title: service.jwt.post_param_name
---

### Syntax

`service.jwt.post_param_name = "string"`

The default value: `aam-jwt`

### Definition

The name of the HTTP POST parameter that may contain a JWT token for request authentication. The provided POST parameter should contain a raw token only. Otherwise, AAM may have trouble parsing it.