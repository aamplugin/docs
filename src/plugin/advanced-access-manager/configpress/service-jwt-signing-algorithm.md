---
title: service.jwt.signing_algorithm
---

### Syntax

`service.jwt.signing_algorithm = "string"`

The default value: `HS256`

### Definition

Define the JWT token signing algorithm. At the moment the following values are allowed:

- `ES384` requires [openssl_sign](https://www.php.net/manual/en/function.openssl-sign) function.
- `ES256` requires [openssl_sign](https://www.php.net/manual/en/function.openssl-sign) function.
- `HS256` requires [hash_hmac](https://www.php.net/manual/en/function.hash-hmac) function.
- `HS384` requires [hash_hmac](https://www.php.net/manual/en/function.hash-hmac) function.
- `HS512` requires [hash_hmac](https://www.php.net/manual/en/function.hash-hmac) function.
- `RS256` requires [openssl_sign](https://www.php.net/manual/en/function.openssl-sign) function.
- `RS384` requires [openssl_sign](https://www.php.net/manual/en/function.openssl-sign) function.
- `RS512` requires [openssl_sign](https://www.php.net/manual/en/function.openssl-sign) function.
- `EdDSA` requires [sodium_crypto_sign_detached](https://www.php.net/manual/en/function.sodium-crypto-sign-detached) function.

In the example below, we redefine the default signing algorithm.

```ini
[aam]
service.jwt.signing_algorithm = "ES256"
```