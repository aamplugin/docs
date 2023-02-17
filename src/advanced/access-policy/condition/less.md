---
title: Less
---

The `Less` condition type compares two values and returns true if the left expression is strictly less than the right.

```json
{
  "Less": {
    "${CALLBACK.wp_get_current_user_id}": 10
  }
}
```
::: info FYI!
AAM performs the literal comparison outlined in the [PHP Comparison Operators](https://www.php.net/manual/en/language.operators.comparison.php) section.
:::