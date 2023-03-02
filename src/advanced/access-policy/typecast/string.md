---
title: string
---

### Syntax

`(*string)`

### Definition

Cast the provided value to a string. It is the default typecast, and all values without typecast are automatically converted to a string.

```json
{
    "Statement": {
        "Effect": "allow",
        "Resource": "PostType:post:posts",
        "Action": [
            "Edit",
            "Delete"
        ],
        "Condition": {
            "Equals": {
                "${USER.display_name}": "John Smith"
            }
        }
    }
}
```