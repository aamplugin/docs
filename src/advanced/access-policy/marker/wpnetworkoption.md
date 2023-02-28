---
title: WP_NETWORK_OPTION
---

#### Syntax

`${WP_NETWORK_OPTION.<option>}`

#### Definition

Get the current network option in the multisite network setup. The option is fetched from the WordPress core database table `wp_sitemeta` with the help of the WordPress core function [get_site_option](https://developer.wordpress.org/reference/functions/get_site_option/).

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Capability:edit_users",
            "Condition": {
                "Like": {
                    "${WP_NETWORK_OPTION.site_name}": "Intranet*"
                }
            }
        }
    ]
}
```

In the example policy above, we restrict the ability to edit users in any blog that starts with the `Intranet` word.