---
title: Term
---

### Syntax

`Term:<taxonomy-slug>:<term-ID|term-slug>`<br/>
`Term:<taxonomy-slug>:<term-ID|term-slug>:posts`

### Definition

Redefine how other users can access any _term_ or posts associated with it (either tagged or assigned to it). The _term_ is a general definition for a category, tag, or any term that belongs to a custom taxonomy.

Each _term_ identifies by three attributes:
- taxonomy. For example, `category` or `page_category`.
- numeric ID (e. g. 34, 14, 78).
- slug. For example, `uncategorized`, `science`, etc.

When defining the `Term` resource, you should provide taxonomy, and either term ID or slug. For example if you need to restrict ability to assign any posts to the "Houses" category (slug `houses`) you can define following statement:

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Term:category:houses",
            "Action": "Assign"
        }
    ]
}
```

The `Term` resource supports several actions that allow defining more granular access to what users can/cannot do with a term. This way, you can ensure that the _term_ of the specific taxonomy is protected, disregarding the post type it belong to (in WordPress core, when registering taxonomy, there is a way to specify a list of associated post types).

### Browse Action

Manage the ability to browse a _term_ directly. In other words - see the list of _posts_ that belong to the _term_. This is typically used to organize content on the _frontend_ where a user can navigate to a link like `/category/science` and see the list of all pages that are tagged with the "Science" category.

The following statements deny access to browse all categories except one - the "Free Courses".

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Taxonomy:category:terms",
            "Action": [
                "Browse"
            ]
        },
        {
            "Effect": "allow",
            "Resource": "Term:category:free-courses",
            "Action": [
                "Browse"
            ]
        }
    ]
}
```

### List Action

Manage _term’s_ visibility. In other words - hide the _term_ however, allow direct access with URL. In the example statement below, we hide the "Private" order category if the request is a RESTful API.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Term:order_category:private",
            "Action": [
                "List"
            ],
            "Condition": {
                "Equals": {
                    "(*bool)${CONST.REST_REQUEST}": true
                }
            }
        }
    ]
}
```

### Edit Action

Manage the ability to edit a _term_. The sample statements below allow editing the "History" category if a user has the email domain `example.com`.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Term:category:history",
            "Action": [
                "Edit"
            ],
            "Condition": {
                "NotLike": {
                    "${USER.user_email}": "*@example.com"
                }
            }
        }
    ]
}
```

### Delete Action

Manage the ability to delete a _term_. The sample statement restricts the ability to delete the "Favorite" image category that has ID `7`.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Term:image_category:7",
            "Action": "Delete"
        }
    ]
}
```

### Assign Action

Manage the ability to assign a _term_ to _posts_. It is a helpful constraint if you do not want your users to assign _posts_ to any given _term_. For example, the statement below restricts the ability to assign regular WordPress posts only to the "Uncategorized" category.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Taxonomy:category:terms",
            "Action": [
                "Assign"
            ]
        },
        {
            "Effect": "allow",
            "Resource": "Term:category:uncategorized",
            "Action": [
                "Assign"
            ]
        }
    ]
}
```

### Term Posts

The `Term` resource is a good option to target all the _posts_ that are tagged or assigned to a specific _term_. In this case, you can use all supported [Post](/advanced/access-policy/resource-action/post) resource actions.

For example, the following statement denies the ability to see, directly access, and comment on posts that belong to the "Courses" category.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Term:category:courses:posts",
            "Action": [
                "List",
                "Read",
                "Comment"
            ]
        }
    ]
}
```
