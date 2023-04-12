---
title: Service Context
---

The majority of services are intended to work with subject-specific access controls. For example, when you manage access controls to URLs, you define them for a specific role, or user, or as default for everybody.

The ServiceContent model is primarily designed to hold information about the current subject (e.g. role or visitor). However, the `$context` may contain anything.

```php
class AAM_Framework_Model_ServiceContext implements ArrayAccess {

    public __construct(array $context = null) : void
    public offsetExists(string $offset) : bool
    public offsetGet(string $offset) : mixed
    public offsetSet(string $offset, mixed $value) : void
    public offsetUnset(string $offset) : void

}
```