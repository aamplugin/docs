---
title: Like
---

Assets if the left value is similar to the right. The `*` (asterisk) symbol represents any character or wildcard. For example, the condition below returns true if the user's display name is "John Smith", "Johnny" or "John".

```json
{
  "Like": {
    "${USER.display_name}": "John*"
  }
}
```