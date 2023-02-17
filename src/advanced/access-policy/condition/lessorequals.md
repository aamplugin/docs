---
title: LessOrEquals
---

The `LessOrEquals` condition type compares two values and returns true if the left expression is strictly less or equals to the right expression.

```json
{
  "LessOrEquals": {
    "${USER.ID}": 21
  }
}
```
::: info FYI!
AAM performs the literal comparison outlined in the [PHP Comparison Operators](https://www.php.net/manual/en/language.operators.comparison.php) section.
:::