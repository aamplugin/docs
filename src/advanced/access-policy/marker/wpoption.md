---
title: WP_OPTION
---

### Syntax

`${WP_OPTION.<option>}`

### Definition

Get the website option from the database table `wp_options`. AAM uses the WordPress core function [get_option](https://developer.wordpress.org/reference/functions/get_option/) to fetch the value.

The policy below revokes the ability to edit posts if the `blogname` option equals the `My Production Site`.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Capability:edit_posts",
            "Condition": {
                "Equals": {
                    "${WP_OPTION.blogname}": "My Production Site"
                }
            }
        }
    ]
}
```