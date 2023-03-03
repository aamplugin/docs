---
title: PostType
---

::: info Note!
Available only with the premium [Complete Package](/premium).
:::

### Syntax

`PostType:<post-type-slug>:posts`<br/>
`PostType:<post-type-slug>:term:<ID|slug>:posts`

The `post-type-slug` is a valid post type slug registered with the core WordPress [register_post_type](https://developer.wordpress.org/reference/functions/register_post_type/) function.

### Definition

The `PostType` resource has two ways of defining access controls to the _posts_ as follows. It supports all the actions that the [Post](/advanced/access-policy/resource-action/post) resource exactly the same way.

When there is a need to define the default access controls to **all** _posts_, then the  `PostType:<post-type-slug>:posts` resource is the right choice for the job.

For example, the statement below restricts reading all pages for unauthenticated users.

```json
{
    "Statement": {
        "Effect": "deny",
        "Resource": "PostType:page:posts",
        "Action": "Read",
        "Condition": {
            "Equals": {
                "(*bool)${USER.isAuthenticated}": false
            }
        }
    }
}
```

However, when you need to set access controls to any specific _term_ within a post type, use the `PostType:<post-type-slug>:term:<ID|slug>:posts` resource. This way, access controls will propagate only to _posts_ that belong to that _term_.

The example statement below denies managing posts in the "Science" category.

```json
{
    "Statement": {
        "Effect": "deny",
        "Resource": "PostType:post:term:science:posts",
        "Action": [
            "Edit",
            "Publish",
            "Delete"
        ]
    }
}
```