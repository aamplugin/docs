---
title: NotLike
---

Assets if the left value is **not** similar to the right. The `*` (asterisk) symbol represents any character or wildcard. For example, the condition below returns true if the callback function `GetUserCountry` returns values like "Ukraine", "Brazil" or "Japan".

```json
{
  "Like": {
    "${CALLBACK.GetUserCountry}": "A*"
  }
}
```