---
title: service.jwt.query_param_name
---

### Syntax

`service.jwt.query_param_name = "string"`

The default value: `aam-jwt`

### Definition

The name of the HTTP query (aka GET) parameter that may contain a JWT token for request authentication. The provided query parameter should contain a raw token only. Otherwise, AAM may have trouble parsing it.