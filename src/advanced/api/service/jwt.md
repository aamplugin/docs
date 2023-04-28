---
title: Jwt Tokens
---

## Introduction

Collection of methods to work with JWT Tokens.

```php
class AAM_Framework_Service_Jwts {

    public get_token_list(AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public get_token_by_id(string $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public create_token(array $claims, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public delete_token(string $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
    public reset_tokens(AAM_Framework_Model_ServiceContext $inline_context = null) : array

}
```

## get_token_list()

Get the list of tokens issued for a given user.

```php
public get_token_list(AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## get_token_by_id()

Get a token by its ID (JWT token ID or `jti`).

```php
public get_token_by_id(string $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## create_token()

Create a new token.

```php
public create_token(array $claims, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## delete_token()

Delete existing token.

```php
public delete_token(string $id, AAM_Framework_Model_ServiceContext $inline_context = null) : array
```

## reset_tokens()

Reset (delete) all tokens issued for a given user.

```php
public reset_tokens(AAM_Framework_Model_ServiceContext $inline_context = null) : array
```