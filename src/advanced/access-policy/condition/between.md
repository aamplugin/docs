---
title: Between
---

The `Between` condition type is a convenient way to verify that a value is within the specified range. For example, if you need to check that your current user ID is between `10` and `50`, you can define your condition the following way.

```json
{
    "Between": {
        "${USER.ID}": [
            10,
            50
        ]
    }
}
```

This condition checks if the current user ID is equal to or greater than ten and equal to or lower than fifty.

For more complex conditions, you have the ability to define multiple ranges. For example, when you need to restrict access to the backend for users with IDs between `10-23` and `50-100`, then you can define multiple ranges as following.

```json
{
    "Between": {
        "${USER.ID}": [
            [10, 23],
            [50, 100]
        ]
    }
}
```

::: info Note!
There is no limit to how many ranges you can define. However, ensure that theses ranges do not overlap or create any other weird combination. AAM does not validate the ranges and evaluates them as-is.
:::