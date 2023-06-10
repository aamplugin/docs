---
title: Token Signing
order: 4
---

There are two different ways to sign JWT tokens and you may choose the right method depending on your specific use-case.

The symmetric signing is the default method and uses a simple secret string to generate a signature. However, asymmetric is more complicated and requires a pair of private and public certificates where the private cert is used to issue a token, while the public - validates it.

### Symmetric signing key

If you are not familiar with a symmetric key, think about it as some secret string or password that is used to generate a signature. AAM uses this method by default and for the secret key, the WordPress core `SECURE_AUTH_KEY` value is used. You can find this value defined in your website's main `wp-config.ph` file which is typically at the root of a website.

::: info Note!
You can redefine or periodically rotate the secret key with ConfigPress option [service.jwt.signing_secret](/plugin/advanced-access-manager/configpress/service-jwt-signing-secret). It is recommended action if you need to share a secret with another application that is not the one that issues tokens.
:::

### Asymmetric signing key

Another way to sign a JWT token is to use asymmetric keys. In this case, several additional configurations have to be entered on the [ConfigPress](/plugin/advanced-access-manager/configpress/) tab. If you do not have already generated a certificate pair, let's generate a private key as well as a public key that is associated with it. The below two commands will do the magic:

```shell
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
```

The first command `ssh-keygen` generates the private key while the second command `openssl` consumes the private key to generate the public certificate.

Now that you have those files `jwtRS256.key` and `jwtRS256.key.pub`, you can distribute them accordingly. For example, if your WordPress website is the one that issues a JWT token, then you need to store securely `jwtRS256.key` certificate file on your website server and configure AAM to read this file during the JWT issuing process.

To do so, go to the ConfigPress tab and use [service.jwt.private_cert_path](/plugin/advanced-access-manager/configpress/service-jwt-private-cert-path) settings where you specify the absolute path to the private cert.

```ini
[aam]
service.jwt.signing_algorithm = "RS256"
service.jwt.private_cert_path = "/var/mydomain.com/certs/jwtRS256.key"
```

If your certificate is located in the same subdirectory were the entire WordPress site, then you can use reserved `{ABSPATH}` marker to represent the absolute path to your website directory.

```ini
[aam]
service.jwt.signing_algorithm = "RS512"
service.jwt.private_cert_path = "{ABSPATH}/wp-content/private/jwtRS256.key"
```

::: warning Note!
With asymmetric signing method you have to redefine the default JWT signing algorithm to asymmetric  with [service.jwt.signing_algorithm](/plugin/advanced-access-manager/configpress/service-jwt-signing-algorithm)
:::

If your website is the one that consumes a JWT token then you need to point AAM to the public certificate that should be located on your website server. Use [service.jwt.public_cert_path](/plugin/advanced-access-manager/configpress/service-jwt-public-cert-path) ConfigPress setting for that.

```ini
[aam]
service.jwt.signing_algorithm = "RS256"
service.jwt.public_cert_path = "/var/mydomain.com/certs/jwtRS256.key.pub"
```

In the next chapter, we are going to learn how to manage a token's claims.