---
title: Configurations
order: 6
---

The [ConfigPress](/plugin/advanced-access-manager/configpress/) is recommended way to customize AAM behavior and in this chapter, we'll cover some of the most essential configurations that dramatically affect how JWT tokens service works.

::: info FYI!
You can find the complete list of all supported configurations on the [ConfigPress](/plugin/advanced-access-manager/configpress/) page. They are prefixed with `service.jwt.`.
:::

At the time of writing this course, AAM supports 13 different configuration options. However, most likely you'll use only a few, so we'll cover the most popular.

### Registry size

The tokens registry is an array of all the tokens issued for each user. It is stored as user metadata in the `wp_usermeta` database table.

To prevent overloading a database with too many tokens, the `service.jwt.registry_size` option regulates how many tokens each user can have at the same time.

```ini
[aam]
service.jwt.registry_size = 25
```

The configuration above tells AAM that each user can have only up to 25 tokens issued. If the number of tokens exceeds the size, the newly issued token appends to the end, and the first token on the list automatically get revoked.

### Default expiration

Each issued token has an expiration timestamp and it can be as short as 1 second and as long as over 100 years. However, if the expiration date is not explicitly provided during token creation, AAM defaults to the `service.jwt.expires_in` configuration.

```ini
[aam]
service.jwt.expires_in = "+1 year"
```
The `service.jwt.expires_in` may contain any valid Date & Time Format open in new window as described in the official PHP documentation. However, if a numeric value is provided, then the value is interpreted as the number of seconds.

### Signing key

You already learned in the [Token Signing](/course/wp-jwt-authentication/token-signing) chapter that there are two different ways to sign a token - with symmetric and asymmetric keys.

Depending on your needs, you have all the necessary configurations to customize the signing process. The easiest one is `service.jwt.signing_secret` which redefines your secret value for the symmetric key.

```ini
[aam]
service.jwt.signing_secret = "89#jdk%as803$"
```

With the asymmetric signing method, things are a little bit more complex. The first question that you need to answer is - _Does my WordPress website both issue and validate tokens?_ If the answer is yes, then you need to provide paths for both public and private certificates.

```ini
[aam]
service.jwt.signing_algorithm = "rs256"
service.jwt.public_cert_path = "/usr/private/signing_cert.key.pub"
service.jwt.private_cert_path = "/usr/private/signing_cert.key"
```

::: info FYI!
If your private certificate requires a password, use the [service.jwt.private_cert_passphrase](/plugin/advanced-access-manager/configpress/service-jwt-private-cert-passphrase) configuration.
:::

In case your WordPress website only validates tokens, then you need to provide only a path to the public certificate. You do not need to store a private certificate on your website if it only validates the token. For validation, you need only a public one.

Finally, if your website only issues tokens but some other application or website validates them, then you need to provide a path only to the private certificate.