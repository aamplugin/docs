---
title: USER
---

### Syntax

`${USER.<pathToProperty>}`

### Definition

The `USER` marker allows getting current user attributes. The current user object initializes during a very early stage of the website load. It is stored in the global `$current_user` and contains the instance of the [WP_User](https://developer.wordpress.org/reference/classes/wp_user/) class. This object has all the information about the user, and you can use it to prepare different conditions for your policy statements.

::: info FYI!
The `USER` marker is applicable for non-authenticated users (visitors). In this case, any `WP_User` properties are not available.
:::

For example, you can prepare a statement that is applicable to a user with an email that has the `gmail.com` domain.

```json
{
    "Statement": [
        {
            "Effect": "allow",
            "Resource": "Post:post:hello-world",
            "Action": "Read",
            "Condition": {
                "Like": {
                    "${USER.user_email}": "*@gmail.com"
                }
            }
        }
    ]
}
```

There are also three reserved attributes you can use to prepare even more sophisticated conditions.

The first attribute is the `ip` or `ipaddress` that extracts the current user’s IP address. This way you can apply statements to the current user only when they come from a very specific IP address or IP range (all depends on what type of condition is used).

For example, the following condition is applicable for a user who comes from the IP range `10.123.10.0 – 10.123.10.255`.

```json
{
    "Statement": [
        {
            "Effect": "allow",
            "Resource": "Taxonomy:product_category:terms",
            "Action": "Browse",
            "Condition": {
                "Between": {
                    "(*ip)${USER.ip}": [
                        "(*ip)10.123.10.0",
                        "(*ip)10.123.10.255"
                    ]
                }
            }
        }
    ]
}
```
