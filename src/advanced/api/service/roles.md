---
title: Roles
---

## Introduction

Collection of methods to work with roles.

```php
class AAM_Framework_Service_Roles {

    public get_all_roles() : array
    public get_editable_roles() : array
    public get_role_by_slug(string $slug, ?bool $editable = true) : AAM_Framework_Proxy_Role
    public create_role(string $name, ?string $slug = null, ?array $capabilities = []) : AAM_Framework_Proxy_Role
    public update_role(AAM_Framework_Proxy_Role $role) : bool
    public delete_role(AAM_Framework_Proxy_Role $role) : bool
    public get_role_user_count(AAM_Framework_Proxy_Role $role) : int
    public get_wp_roles() : WP_Roles

}
```

## get_all_roles()

Get the list of all registered roles on the current site. The result of the execution is the array of `AAM_Framework_Proxy_Role` objects.

```php
public get_all_roles() : array
```

## get_editable_roles()

Get the list of all editable roles on the current site. This method heavily relies on the WordPress core filter [editable_roles](https://developer.wordpress.org/reference/hooks/editable_roles/). The result of the execution is the array of `AAM_Framework_Proxy_Role` objects.

```php
public get_editable_roles() : array
```

## get_role_by_slug()

Get a single role by its unique slug (aka ID). The result of the execution is a single `AAM_Framework_Proxy_Role` object. The method throws `UnderflowException` exception if role does not exist or is not editable when `$editable` param is set to `true`.

```php
public get_role_by_slug(string $slug, ?bool $editable = true) : AAM_Framework_Proxy_Role
```

## get_role_user_count()

Get the approximate count of users assigned to given role. This method relies on the WordPress core function [count_users](https://developer.wordpress.org/reference/functions/count_users/) to fetch the number.

```php
public get_role_user_count(AAM_Framework_Proxy_Role $role) : int
```

## create_role()

Create a new role. The only required parameter is the `$name`. If the `$slug` is **not** provided, the random and unique slug generates with PHP core function [uniqid](https://www.php.net/manual/en/function.uniqid).

The optional `$capabilities` param expects a plain array of string values that are assumed to be the list of capabilities to add to the new role. Under the hood, the list transforms into an associated array of capabilities that WordPress core expects.

To promote standardization and best practice for naming convention, if either `$slug` or `$capabilities` are provided, they are sanitized with the WordPress core function [sanitize_key](https://developer.wordpress.org/reference/functions/sanitize_key/). If any of the provided values becomes empty after the sanitization process, the method throws the `InvalidArgumentException` exception.

If the `$slug` param is provided, the method validates that it is unique and throws the `DomainException` exception if the role with provided slug already exists.

```php
public create_role(string $name, ?string $slug = null, ?array $capabilities = []) : AAM_Framework_Proxy_Role
```

## update_role()

Update existing role. All the role's attributes are subject to change with one exception - if an existing one has at least one user assigned, the `slug` becomes read-only to preserve integrity.

The method throws the `DomainException` exception if there is an attempt to change the slug for role with one or more users.

```php
public update_role(AAM_Framework_Proxy_Role $role) : bool
```

## delete_role()

Delete an existing role. The method throws the `DomainException` exception if there is an attempt to delete a role with one or more users.

```php
public delete_role(AAM_Framework_Proxy_Role $role) : bool
```

## get_wp_roles()

Prepare and return the WordPress native `WP_Roles` object as-is.

```php
public get_wp_roles() : WP_Roles
```