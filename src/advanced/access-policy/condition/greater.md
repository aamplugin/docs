---
title: Greater
---

The `Greater` condition type compares two values and returns true if the left expression is strictly greater than the right.

```json
{
  "Greater": {
    "${DATETIME.Y-m-d}": "2018-11-03"
  }
}
```
::: info FYI!
AAM performs the literal comparison outlined in the [PHP Comparison Operators](https://www.php.net/manual/en/language.operators.comparison.php) section.
:::