---
title: Resources & Actions
order: 3
---

Everything in WordPress is a _resource_, and any WordPress website is a collection of resources. When you think this way, it is easier to implement an access and security strategy because you can manage, monitor, and audit every aspect of a website separately. In other words, the _resource_ is _something_ that a user or an application can access.

A _resource_ can be anything. However, it has to have a code that implements functionality that handles access to it. For example, AAM supports and knows how to handle several _resources_ like `Capability:list_users` or `URI:/wp-admin/*`.

Resources like [Capability](/advanced/access-policy/resource-action/capability) or [Role](/advanced/access-policy/resource-action/role) are simple - whether it is allowed or not. However, some resources are more complicated and require granular access controls. For example, the [Post](/advanced/access-policy/resource-action/post) offers to define access to actions that the _subject_ can perform upon it.

::: info FYI!
We use the term _subject_ to describe any role, user, visitor, or default level of access controls.
:::

A statement may contain an indefinite number of _static_ and _dynamic_ resources.

The _static_ resources are the type of resources that are explicitly defined in the statement. Example of such resource is `Post:page:welcome`, `Route:RESTful:/aam/v2:GET`, or `Capability:edit_posts`.

The _dynamic_ resources are the type of resources that contain [markers](/advanced/access-policy/marker/). For example, the `Term:category:${QUERY_PARAM.cat}` targets the `Term:category:2` resource if the URI is something like `/wp-admin/page.php?cat=2`.

Another way to define the dynamic resource is to use the expand operand `=>` that automatically declares the list of resources based on a dynamically injected array of values. For example, let's say you have a custom user meta `allowed_categories` stored in the `wp_usermeta` table as the array of integer values. The statements below, restrict a user from managing all posts except those that are assigned to the "allowed categories".

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "PostType:post:posts",
            "Action": [
                "Edit",
                "List"
            ]
        },
        {
            "Effect": "allow",
            "Resource": "Term:category:%s:posts => ${USER_META.allowed_categories}",
            "Action": [
                "Edit",
                "List"
            ]
        }
    ]
}
```

The reserved symbol `=>` or keyword `map to` tells AAM core to fetch an array of scalar values from the user meta `allowed_categories` and replace the `%s` with each array element. If the allowed categories meta contains two values - `2` and `3`, the final statement dynamically adjusts to:

```json
{
    "Effect": "allow",
    "Resource": [
        "Term:category:2:posts",
        "Term:category:3:posts"
    ],
    "Action": [
        "Edit",
        "List"
    ]
}
```