---
title: HTTP_GET
---

### Syntax

`${HTTP_GET.<pathToProperty>}`

### Definition

Get data from the PHP superglobal [$_GET](http://php.net/manual/en/reserved.variables.get.php).

::: info Note!
The value from the `$_GET` is extracted AS-IS, so it is important to control the actual value data type by casting it accordingly. Refer to the [Typecasting](/advanced/access-policy/typecast/) section for more detail.
:::

Below example removes **Excerpt** _metabox_ if the currently editing page ID is `369`.

```json
{
    "Effect": "deny",
    "Resource": "Metabox:post|postexcerpt",
    "Condition": {
        "Equals": {
            "(*int)${HTTP_GET.page}": 369
        }
    }
}
```