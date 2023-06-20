---
title: aam_extract_jwt_filter
---

### Definition

```php
apply_filters('aam_extract_jwt_filter', null, string $method);
```

### Description

Filter that allows managing a custom method to authenticate requests with a JWT token. The default JWT methods are well-documented on the [service-jwt-bearer](/plugin/advanced-access-manager/configpress/service-jwt-bearer) page. However, if neither satisfies your unique requirement, you can declare a custom method and use the `aam_extract_jwt_filter` to hook into the token extraction process.

### Example

In this example we show how to extract a JWT token from the HTTP POST request body.

```php
add_filter('aam_extract_jwt_filter', function($token, $method) {
    if (empty($token) && ($method === 'post_body')) {
        $payload = json_decode(file_get_contents('php://input'), true);
        $token   = $payload['token'] ?? null;
    }

    return $token;
}, 10, 2);
```