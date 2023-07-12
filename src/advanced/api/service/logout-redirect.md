---
title: Logout Redirect
---

## Introduction

Collection of methods to work with Logout Redirect.

```php
class AAM_Framework_Service_LogoutRedirect {

    public get_redirect(AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public set_redirect(array $rule, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public reset_redirect(AAM_Framework_Model_ServiceContext $inline_context = null) : array

}
```

## get_redirect()

Get current logout redirect.

```php
public get_redirect(AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## set_redirect()

Set logout redirect

```php
public set_redirect(array $settings, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## reset_redirect()

Reset logout redirect to default.

```php
public reset_redirect(AAM_Framework_Model_ServiceContext $inline_context = null) : array
```