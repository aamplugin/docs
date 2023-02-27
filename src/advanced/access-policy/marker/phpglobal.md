---
title: PHP_GLOBAL
---

Get value from any globally defined variable in the PHP code. AAM users the superglobal [$GLOBALS](https://www.php.net/manual/en/reserved.variables.globals.php) to fetch the targeted value.

Because global variables are accessible in any part of the code, they also can be modified. It is important to pay attention to the type of value the global variable should have and typecast it accordingly.

The policy below grants the _Editor_ role to the user who has the `john@example.com` email.

```json
{
  "Effect": "allow",
  "Resource": [
    "Role:editor"
  ],
  "Condition": {
    "Equals": {
      "${PHP_GLOBAL.current_user.user_email}": "john@example.com"
    }
  }
}
```