---
title: Site
---

### Syntax

`Site:<ID>`

### Definition



Manage access to the entire sub-site in the [WordPress Multi-site network](https://codex.wordpress.org/Create_A_Network) setup.

In the example statement below, we restrict access to the entire sub-site with ID `2`.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Site:2"
        }
    ]
}
```

[Conditioning](/advanced/access-policy/condition/) access to a sub-site is helpful for access to sub-sites based on users attributes. For example, the statement below restricts access to any sub-site if a user is not a member.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Site:${WP_SITE.blog_id}",
            "Condition": {
                "Equals": {
                    "(*boolean)${CALLBACK.is_user_member_of_blog}": false
                }
            }
        }
    ]
}
```