---
title: POLICY_PARAM
---

### Syntax

`${POLICY_PARAM.<param>}`

### Definition

Fetch the applicable access policy [Param](/advanced/access-policy/policy-overview#param) by its key name. Handy when defining a policy "constants" once and reusing them across all statements.

In the example policy below, we limit the number of posts that users can create.

```json
{
    "Statement": {
        "Effect": "deny",
        "Resource": "PostType:post:posts",
        "Action": "Create",
        "Condition": {
            "GreaterOrEquals": {
                "${CALLBACK.AuthorContent::getPostCount}": "${POLICY_PARAM.PostLimit}"
            }
        }
    },
    "Param": [
        {
            "Key": "PostLimit",
            "Value": 10
        }
    ]
}
```

The custom callback `AuthorContent::getPostCount()` returns the list of posts that the current user already created and `PostLimit` defines the limit.

**Note!** The `getPostCount` method is not part of AAM functionality and we use it here just to show the general idea.