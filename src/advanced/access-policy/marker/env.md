---
title: ENV
---

### Syntax

`${ENV.<environmentVariable>}`

### Definition

Get the value of the environment variable as described in the [official PHP documentation](https://www.php.net/manual/en/function.getenv.php).

The policy below restrict access to the backend if the `APP_ENV` environment variable contains a `production` string value.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Capability:aam_access_dashboard",
            "Condition": {
                "Equals": {
                    "${ENV.APP_ENV}": "production"
                }
            }
        }
    ]
}
```