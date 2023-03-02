---
title: numeric
---

### Syntax

`(*numeric)`

### Definition

Treat provided value as a numeric value. The value is checked if it is either an integer or float and cast accordingly. If the provided value is not numeric, it converts to the `0` (zero) integer value.

The `numeric` typecast` is good when you do not know up-front if you'll get a float or an integer value. AAM checks if the value is a float with the PHP core function [is_float](https://www.php.net/manual/en/function.is-float), and if it is not, the integer value is assumed.