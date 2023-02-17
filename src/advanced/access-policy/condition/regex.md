---
title: RegEx
---

Assert if the left value matches the regular expression. It is crucial to provide a valid regular expression. For more information about PHP RegEx, refer to the [official PHP documentation](https://www.php.net/manual/en/book.pcre.php). Otherwise, an unexpected result may be returned.

```json
{
  "RegEx": {
    "${GET.page}": "/^[a-z]+$/i"
  }
}
```