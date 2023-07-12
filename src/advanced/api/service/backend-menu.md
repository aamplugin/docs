---
title: Backend Menu
---

## Introduction

Collection of methods to work with Backend Menu service.

```php
class AAM_Framework_Service_BackendMenu {

    public get_menu_list(AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public get_menu_by_id(int $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public update_menu_permission(int $id, bool $is_restricted = true, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public delete_menu_permission(int $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public reset_permissions(AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public set_access_mode(string $mode, AAM_Framework_Model_ServiceContext $inline_context = null) : bool
    public get_access_mode(AAM_Framework_Model_ServiceContext $inline_context = null) : string

}
```

## get_menu_list()

Get the backend menu items list. The list may not be complete because AAM uses administrator user to index the list of all menu items. There are plugins that conditionally register new menu items. For example, add new menu if user has "Editor" role.

```php
public get_menu_list(AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## get_menu_by_id()

Create menu item (including its submenus)

```php
public get_menu_by_id(int $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## update_menu_permission()

Update menu's access permission

```php
public update_menu_permission(int $id, bool $is_restricted = true, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## delete_menu_permission()

Delete menu's access permission

```php
public delete_menu_permission(string $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## reset_permissions()

Reset all backend menu permissions.

```php
public reset_permissions(AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## set_access_mode()

Premium Feature. Set the backend menu access mode.

```php
public set_access_mode(string $mode, AAM_Framework_Model_ServiceContext $inline_context = null) : bool
```

## get_access_mode()

Premium Feature. Get the backend menu access mode.

```php
public get_access_mode(AAM_Framework_Model_ServiceContext $inline_context = null) : string
```