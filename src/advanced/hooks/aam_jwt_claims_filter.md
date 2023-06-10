---
title: aam_jwt_claims_filter
---

### Definition

```php
apply_filters('aam_jwt_claims_filter', array $claims);
```

### Description

The subscribing function to this filter receives an associated array of key/value pair or claims that will be included in the JWT token. The expected return value is an associated array that may have nested properties.

::: warning Note!
Do not include sensitive information inside the claims. Also, keep the amount of data minimum to prevent large-size tokens.
:::

### Example

Including two additional claims.

```php
add_filter('aam_jwt_claims_filter', function($claims) {
    return array_merge(
        $claims,
        [
            'department' => get_user_meta($claims['userId'], 'user_department', true),
            'role'       => get_user_meta($claims['userId'], 'department_role', true)
        ]
    );
});
```