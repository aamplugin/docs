---
title: API Routes
---

## Introduction

Collection of methods to work with API Routes.

```php
class AAM_Framework_Service_ApiRoutes {

    public get_route_list(AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public get_route_by_id(int $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public update_route_permission(int $id, bool $is_restricted = true, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public delete_route_permission(int $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public reset_routes(AAM_Framework_Model_ServiceContext $inline_context = null) : array

}
```

## get_route_list()

Get the list of all registered RESTful API routes and their permissions.

```php
public get_route_list(AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## get_route_by_id()

Get a route by ID

```php
public get_route_by_id(int $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## update_route_permission()

Update RESTful API route's permission.

```php
public update_route_permission(int $id, bool $is_restricted = true, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## delete_route_permission()

Delete route's permission.

```php
public delete_route_permission(int $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## reset_routes()

Reset (delete) all route's permissions

```php
public reset_routes(AAM_Framework_Model_ServiceContext $inline_context = null) : array
```