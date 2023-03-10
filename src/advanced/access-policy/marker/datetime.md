---
title: DATETIME
---

### Syntax

`${DATETIME.<format>}`

### Definition

Get the current date and time based on the provided format. The marker has to use the valid DateTime format according to the official PHP [date formatting rules](http://php.net/manual/en/function.date.php).

In the example below, a user is not allowed to access the _backend_ outside of business hours and over the weekend.

```json
{
    "Effect": "deny",
    "Resource": "Capability:aam_access_dashboard",
    "Condition": {
        "Condition": {
            "Between": {
                "${DATETIME.G}": [
                    [
                        0,
                        8
                    ],
                    [
                        18,
                        23
                    ]
                ],
                "${DATETIME.N}": [
                    6,
                    7
                ]
            }
        }
    }
}
```