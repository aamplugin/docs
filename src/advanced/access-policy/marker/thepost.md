---
title: THE_POST
---

::: warning Experimental Feature!
Warning! The `THE_POST` is currently an experimental feature and may cause fatal errors depending on policy and website setup.
:::

Get the current _post_ object. Under post we mean any currently picked post, page, media, or custom post type either on the _frontend_, _backend_, or RESTful API side.

AAM uses a much more sophisticated way to determine which _post_ is currently used. The [the_post](https://developer.wordpress.org/reference/functions/the_post/) WordPress core function is part of that process.

For more information please refer to the [AAM_Core_API::getCurrentPost](https://github.com/aamplugin/advanced-access-manager/blob/master/application/Core/API.php#L319) method.

The `THE_POST` exposes all the properties that you would normally get from the `WP_Post` object, which includes all the values that are stored in the `wp_posts` database table.

The following policy does not allow a user to delete an order if it is already fulfilled or refunded while editing the order on the _backend_ side of the website.

```json
{
    "Statement": {
        "Effect": "deny",
        "Resource": "PostType:order:posts",
        "Action": [
            "Delete"
        ],
        "Condition": {
            "Equals": {
                "${PHP_SERVER.PHP_SELF}": "/wp-admin/edit.php"
            },
            "In": {
                "${THE_POST}.post_status": [
                    "completed",
                    "refunded"
                ]
            }
        }
    }
}
```