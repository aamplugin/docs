---
title: Role
---

## Introduction

```php
class AAM_Framework_Proxy_Role {

    public function __construct(string $name, WP_Role $role) : void
    public function set_slug(string $slug) : void
    public function set_display_name(string $display_name) : void
    public function add_capability(string $capability, bool $save_immediately = false) : void
    public function remove_capability(string $capability, bool $save_immediately = false) : void
    public function to_array() : array

}
```