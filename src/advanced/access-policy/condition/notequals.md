---
title: NotEquals
---

The `NotEquals` condition type performs the literal comparison and checks if two values are **not** identical (including value type).

```json
{
  "NotEquals": {
    "${COOKIE.wp-test}": "yes"
  }
}
```

::: info Note!
It is the literal value comparison. It means that the integer value `6` does not equal the string value `'6'` If you do not know ahead what value type will be injected into the condition, consider to [type cast](/advanced/access-policy/typecast/) it.
:::