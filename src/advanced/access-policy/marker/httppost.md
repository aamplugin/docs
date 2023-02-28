---
title: HTTP_POST
---

#### Syntax

`${HTTP_POST.<pathToProperty>}`

#### Definition

Get data from the PHP superglobal [$_POST](http://php.net/manual/en/reserved.variables.post.php).

::: info Note!
The value from the `$_POST` is extracted AS-IS, so it is important to control the actual value data type by casting it accordingly. Refer to the [Typecasting](/advanced/access-policy/typecast/) section for more detail.
:::

The below example denies access to update user information if the application-specific access token is not specified.

```json
{
    "Effect": "deny",
    "Resource": "URI:/wp-json/wp/v2/users/*",
    "Condition": {
        "Equals": {
            "${SERVER.REQUEST_METHOD}": "POST"
        },
        "NotEquals": {
            "(*string)${HTTP_POST.accessToken}": "WWGCYQASKKL4UV2629JF8LR"
        }
    }
}
```