---
title: PHP_SERVER
---

#### Syntax

`${PHP_SERVER.<pathToProperty>}`

#### Definition

Get data from the PHP superglobal [$_SERVER](http://php.net/manual/en/reserved.variables.server.php).

::: info Note!
The value from the `$_SERVER` is extracted AS-IS, so it is important to control the actual value data type by casting it accordingly. Refer to the [Typecasting](/advanced/access-policy/typecast/) section for more detail.
:::

In the example below, we hide certain pages, posts, and terms from the classical navigation menu editor.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": [
                "Post:page:about",
                "Post:page:calendar",
                "Post:post:9285",
                "Term:category:news"
            ],
            "Action": "List",
            "Condition": {
                "Equals": {
                    "${PHP_SERVER.PHP_SELF}": "/wp-admin/nav-menus.php"
                }
            }
        }
    ]
}
```