---
title: array
---

### Syntax

`(*array)<marker>`

### Definition

Treat provided value as an array of scalar values. It is a very useful typecast for conditions where values inject dynamically with markers.

For example, the following condition receives an array of values from the callback function `GetAdminEmails` and grants the current user the _Administrator_ if a match exists.

```json
{
    "Statement": {
        "Effect": "allow",
        "Resource": [
            "Role:administrator"
        ],
        "Condition": {
            "In": {
                "${USER.user_email}": "(*array)${CALLBACK.GetAdminEmails}"
            }
        }
    }
}
```