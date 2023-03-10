---
title: HTTP_COOKIE
---

### Syntax

`${HTTP_COOKIE.<cookieName>}`

### Definition

Get data from the PHP superglobal [$_COOKIE](http://php.net/manual/en/reserved.variables.cookies.php).

::: info Note!
The value from the `$_COOKIE` is extracted AS-IS, so it is important to control the actual value data type by casting it accordingly. Refer to the [Typecasting](/advanced/access-policy/typecast/) section for more detail.
:::

The below example denies access to several urls if `wp-referral` cookie does not contain one of the white-listed domains.

```json
{
    "Effect": "deny",
    "Resource": [
        "URI:/category/science-tutorials",
        "URI:/category/animation-tutorials"
    ],
    "Condition": {
        "NotIn": {
            "(*string)${HTTP_COOKIE.wp-referral}": [
                "myawesomescience.com",
                "google.com"
            ]
        }
    }
}
```