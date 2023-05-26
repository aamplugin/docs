---
title: service.jwt.registry_size
---

### Syntax

`service.jwt.registry_size = 100`

The default value: 10

### Definition

The number of JWT tokens to store in the `wp_usermeta` database table for each individual user. If the number of tokens exceeds the size, the newly issued token appends to the end and the first token on the list automatically get revoked.