---
title: ARGS
---

### Syntax

`${ARGS.<pathToProperty>}`

### Definition

The `ARGS` marker allows you to inject values to the policy through the PHP code at the time the [statement](/advanced/access-policy/policy-overview#statement) or [param](/advanced/access-policy/policy-overview#param) evaluates. Fundamental, it is similar to [CONST](/advanced/access-policy/marker/const) or [CALLBACK](/advanced/access-policy/marker/callback) as it has a direct link to the PHP codebase. However, conceptually it is used for a different purpose.

The typical use case for the `ARGS` markers is when you need to pass some dynamic values generated in the code to the access policy and direct your application flow based on the outcome.

For example, this policy restricts a user to comment on all posts, if the user is marked as a "spammer" in some third-party service.

```json
{
    "Statement": {
        "Effect": "deny",
        "Resource": "PostType:post:posts",
        "Action": "Comment",
        "Condition": {
            "Equals": {
                "${ARGS.is_blacklisted}": false
            }
        }
    }
}
```
Now, you can programmatically verify if the current user is allowed to comment on posts or not as follows.

```php
if (is_user_logged_in()) {
    $manager = AAM::api()->getAccessPolicyManager();

    // Pinging the third-party service and verifying if a user is blacklisted or not
    $is_blacklisted = TheThirdPartyService::is_blacklisted(
        wp_get_current_user()->user_email
    );

    //This will return false
    var_dump($manager->isAllowed(
        'PostType:post:posts', array('is_blacklisted' => $is_blacklisted)
    ));
}
```

