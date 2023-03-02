---
title: date
---

### Syntax

`(*date)`

### Definition

Treat the value as a date string. Under the hood, the provided value converts to the [DateTime](https://www.php.net/manual/en/class.datetime) object with UTC timezone. It defaults to `null` if the value cannot be successfully converted to a `DataTime` object.