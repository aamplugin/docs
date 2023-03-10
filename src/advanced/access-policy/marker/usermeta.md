---
title: USER_META
---

### Syntax

`${USER_META.<pathToProperty>}`

### Definition

Every WordPress account comes with a set of metadata stored in the core database table `wp_usermeta`. The `USER_META` marker references all user meta values based on the currently logged-in user ID. AAM uses the WordPress core [get_current_user_id](https://developer.wordpress.org/reference/functions/get_current_user_id/) function to determine the ID. It also means that visitors or unauthenticated users cannot have any meta.

Below is a simple example where we lock the user’s access to the entire website if some very specific flag (e.g `user_status`) is stored in user metadata with the value `disabled`.

```json
{
    "Effect": "deny",
    "Resource": "URI:*",
    "Condition": {
        "Equals": {
            "(*string)${USER_META.user_status}": "disabled"
        }
    }
}
```

::: info FYI!
AAM uses the WordPress core [get_user_meta](https://developer.wordpress.org/reference/functions/get_user_meta/) function to fetch the user’s metadata. If a user has multiple meta keys with the same name (more than one), the array of keys will be returned.

In this case, you can use conditions that work with arrays; e.g. [In](/advanced/access-policy/condition/in), [NotIn](/advanced/access-policy/condition/notin), [Between](/advanced/access-policy/condition/between), etc. You also have to keep in mind that if you expect an array of meta values, you have to explicitly typecast the marker to the `(*array)` type.
:::

In this example, the user contains multiple meta keys `editor_region` and we would want to allow the user to edit posts in the specific category if any of the regions is `US`.

```json
{
    "Effect": "allow",
    "Resource": "Term:category:us",
    "Condition": {
        "In": {
            "US": "(*array)${USER_META.editor_region}"
        }
    }
}
```