---
title: NotIn
---

Check if the value (left expression) is **not** in the array of values. This condition type performs the literal comparison. It takes into consideration the value type also. That is why, for example, the numeric value `3` is not a part of the array with string values `'3'` and `'7'`.

```json
{
  "NotIn": {
    "${USER.user_email}": [
      "john@mydomain.com",
      "jully@anotherdomain.com"
    ]
  }
}
```