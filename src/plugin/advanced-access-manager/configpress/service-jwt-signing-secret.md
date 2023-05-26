---
title: service.jwt.signing_secret
---

### Syntax

`service.jwt.signing_secret = "string"`

The default value: [SECURE_AUTH_KEY](https://developer.wordpress.org/reference/functions/wp_salt/) constant's value.

### Definition

The signing secret for the JWT token. If not explicitly provided, the default value is taken from the WordPress `SECURE_AUTH_KEY` constant that is declared in the `wp-config.php` file.

In the example config below, we redefine the default signing secret.

```ini
[aam]
service.jwt.signing_secret = "4ki(32&4g!UIld12@~o"
```