---
title: WP_SITE
---

#### Syntax

`${WP_SITE.<property>}`

#### Definition

Get any property of the currently viewed blog. This marker user WordPress core function [get_blog_details](https://developer.wordpress.org/reference/functions/get_blog_details/) to obtain an instance of [WP_Site](https://developer.wordpress.org/reference/classes/wp_site/) that holds all the necessary information about a blog.

In the example below, we are going to restrict access to any subsite whose `pathname` starts with `site`.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Site:${WP_SITE.blog_id}",
            "Condition": {
                "Like": {
                    "${CALLBACK.path}": "/site*"
                }
            }
        }
    ]
}
```

