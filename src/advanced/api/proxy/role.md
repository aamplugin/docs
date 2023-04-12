---
title: Role
---

## Introduction

```php
class AAM_Framework_Proxy_Role {

    public __construct(string $name, WP_Role $role) : void
    public set_slug(string $slug) : void
    public set_display_name(string $display_name) : void
    public add_capability(string $capability, bool $save_immediately = false) : void
    public remove_capability(string $capability, bool $save_immediately = false) : void
    public to_array() : array

}
```