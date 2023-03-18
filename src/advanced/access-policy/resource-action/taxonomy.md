---
title: Taxonomy
---

### Syntax

### Definition

Manage access controls to _terms_ of any given taxonomy. These controls are **only** designed to manage access to _terms_ and have no effect on _posts_ that belong to them.

```json
{
    "Statement": {
        "Effect": "deny",
        "Resource": "Taxonomy:post_tag:terms",
        "Action": [
            "List",
            "Assign"
        ]
    }
}
```

The statement above hides all the post tags and does not allow users to assign any tag to posts.

The `Taxonomy` resource supports the same list of actions as [Term](/advanced/access-policy/resource-action/term) resource.