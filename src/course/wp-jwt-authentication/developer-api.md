---
title: Developer API Overview
order: 3
---

All the AAM services are "developer-friendly" and the JWT Tokens service is not an exception. You can programmatically manage JWT tokens for any user and the API is well-documented [here](/advanced/api/service/jwt).

In this quick chapter, we briefly go over an example of issuing a new token so you can have a better understanding of how to use the API.

Let's say that you work on your JWT token management feature. AAM framework simplifies the work for you by introducing the [AAM_Framework_Service_Jwts](/advanced/api/service/jwt) class. This class has just a few helpful methods to cover what you need.

::: info Note!
You are not going to find the `update_token` method because practically it changes the entire token. So it is as good as just deleting the original token and issuing a new one.
:::

We strongly encourage you to avoid instantiating the class directly and use the [Framework Manager](/advanced/api/framework-manager) to obtain the instance with the `AAM_Framework_Manager::jwts` method. Below is an example of the functional code that you can use to issue a new token for a given user ID.

```php
<?php

/**
 * Issue new JWT token
 *
 * @param integer $user_id User ID
 * @param array   $claims  Array of claims
 *
 * @return string
 */
function issue_jwt_token(int $user_id, array $claims = []) : string {
    // Don't get intimidated by the "ServiceContext" class. This is nothing more
    // then just a container for anything you want to pass to the requesting service.
    // In our case, we want to pass the user subject to let know the service that owns the
    // tokens
    $service = AAM_Framework_Manager::jwts(
        new AAM_Framework_Model_ServiceContext(array(
            'subject' => AAM_Framework_Manager::subject()->get('user', $user_id)
        ))
    );

    // The `create_token` method returns the array of various properties about the token.
    // However, for the purpose of the demo, we will care only about the token itself.
    return $service->create_token($claims)['token'];
}

// Prepare the list of claims that we want to include in the token
$claims = array(
    'exp'        => time() + 86400, // expires in one day
    'department' => 'IT'            // a custom claim
);

// The $token variable contains the raw JWT token as string.
$token = issue_jwt_token(1, $claims);
```

As you main notice, this substantially simplifies the process of token creation and you do not have to worry about things like signing algorithm or secret, and mandatory token properties. In the example above, we defined the token's expiration time, however, this is not required. Under the hood, AAM takes care of this.

::: info Note!
AAM comes with several configurations that you can use to adjust how JWT tokens are issued and you will learn about them in the [Configurations](/course/wp-jwt-authentication/configurations) chapter.
:::

Now, that you know how to manage JWT tokens in different ways, you are ready to learn how to customize token service. In the next chapter, we are going to explain the difference between asymmetric and symmetric signing.