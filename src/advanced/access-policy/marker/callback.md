---
title: CALLBACK
---

#### Syntax

`${CALLBACK.<callable>}`

#### Definition

Trigger any valid callback function or static method that returns some values. This is quite a powerful way to enhance your policies with some dynamic calculations. Each `CALLBACK` marker has to have a well-defined [PHP callback](http://php.net/manual/en/language.types.callable.php) as a string. This means that it has to be either a function name or a static method of a class.

In the example below, we’ll define a policy that restricts a user to access the _backend_ area if the user is not registered with some third-party authentication system (e.g. Active Directory).

```json
{
    "Statement": {
        "Effect": "deny",
        "Resource": "Capability:access_dashboard",
        "Condition": {
          "Equals": {
            "${CALLBACK.\\MyApp\\Auth::isRegistered}": false
          }
        }
    }
}
```

The code below is just a boilerplate for the actual integration with the third-party authentication server. The `ThirdParty\Connector` is assumed to be the bridge between the WordPress core and a third party.

```php
<?php
declare(strict_types=1);

namespace MyApp;

use ThirdParty\Connector;

/**
 * Adapter for some third-party authentication server
 */
class Auth {

    /**
     * Check if the current user is registered with the third-party
     *
     * @return bool
     */
    public static isRegistered() : bool {
        $registered = false;
        $user       = wp_get_current_user();

        if (is_a($user, 'WP_User')) {
            // Let's assume that the findUserByEmail method returns an object that contains
            // details about the user and `exists` property is either true or false
            $registered = Connector::findUserByEmail($user->user_email)->exists;
        }

        return $registered;
    }

}
```