---
title: URLs Access
---

## Introduction

Collection of methods to work with URL Access.

```php
class AAM_Framework_Service_Urls {

    public get_rule_list(AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public create_rule(array $rule, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public update_rule(string $id, array $rule, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public delete_rule(string $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public reset_rules(AAM_Framework_Model_ServiceContext $inline_context = null) : array

}
```

## get_rule_list()

Get the list of access rules based on the provided subject (user, role, visitor, etc.).

```php
public get_rule_list(AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## create_rule()

Create a new rule.

```php
public create_rule(array $rule, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## update_rule()

Update an existing rule.

```php
public update_rule(string $id, array $rule, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## delete_rule()

Delete a rule.

```php
public delete_rule(string $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## reset_rules()

Reset all rules for provided subject (role, user, visitors, etc.

```php
public reset_rules(AAM_Framework_Model_ServiceContext $inline_context = null) : array
```