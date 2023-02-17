---
title: GreaterOrEquals
---

The `GreaterOrEquals` condition type compares two values and returns true if the left expression is strictly greater or equals to the right expression.

```json
{
  "GreaterOrEquals": {
    "${POST.amount}": 50
  }
}
```
::: info FYI!
AAM performs the literal comparison outlined in the [PHP Comparison Operators](https://www.php.net/manual/en/language.operators.comparison.php) section.
:::