---
title: URI
---

### Syntax

`URI:<uri>`

### Definition

Manage access to any individual URL or group of relative URLs (wildcard `*` denotation is available with premium [Comlete Package](/premium)). Additionally, define how to handle access denied redirect with the `Metadata` property.

The `URI` resource accepts a **relative path** to any page on your website. For example, if the full URL to the "Authenticated User Only" is `https://mydomain.com/category/authenticated-user-only` then you should provide only the relative path, which is the `/category/authenticated-user-only`.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "URI:/category/authenticated-user-only"
        }
    ]
}
```

::: info FYI!
The URI may also contain query parameters (GET params), and the order is irrelevant.

AAM also normalizes URI by trimming trailing forward slash `/` before evaluating for the match. For example, the `/hello-world/` and `/hello-world are identical.
:::

As mentioned above, the `URI` resource allows defining access denied redirect with the `Metadata` property. The following redirect options are available.

### Custom Message

The message can be any plain text or HTML. You can also define a message in any language or even prepare multiple conditional statements that will apply based on a user's attributes (e. g. location or preferred language).

The sample statements  below adept the custom message based on user's preferred language.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "URI:/category/authenticated-user-only*",
            "Metadata": {
                "Redirect": {
                    "Type": "message",
                    "Message": "<h3>You are not allowed to see this page!</h3>"
                }
            },
            "Condition": {
                "Like": {
                    "${SERVER.HTTP_ACCEPT_LANGUAGE}": "en-US*"
                }
            }
        },
        {
            "Effect": "deny",
            "Resource": "URI:/category/authenticated-user-only*",
            "Metadata": {
                "Redirect": {
                    "Type": "message",
                    "Message": "<h3>Sie dürfen diese Seite nicht sehen!</h3>"
                }
            },
            "Condition": {
                "Like": {
                    "${SERVER.HTTP_ACCEPT_LANGUAGE}": "de-AT*"
                }
            }
        }
    ]
}
```

### Redirect to Existing Page

Redirect the user to any existing page by specifying either a valid page ID or page _slug_. The example below redirects a user to the "Access Denied" page.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "URI:/category/authenticated-user-only*",
            "Metadata": {
                "Redirect": {
                    "Type": "page",
                    "Slug": "access-denied"
                }
            }
        }
    ]
}
```

### Redirect to The Login Page

Redirect a user to the login page and bring them back to the original location after a successful login. The example statement below redirects visitor to the login page.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "URI:/category/*",
            "Metadata": {
                "Redirect": {
                    "Type": "login"
                }
            }
        }
    ]
}
```

::: info FYI!
By default, AAM redirects a visitor to the default `/wp-login.php` endpoint. However, you can override this behavior with WordPress core hook [login_url](https://developer.wordpress.org/reference/hooks/login_url/).
:::

### Redirect to URL

Redirect a user to any valid and allowed URL for a website. AAM takes security seriously. That is why all the redirects are managed by the WordPress core function [wp_safe_redirect](https://developer.wordpress.org/reference/functions/wp_safe_redirect/).

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "URI:/category/authenticated-user-only/",
            "Metadata": {
                "Redirect": {
                    "Type": "url",
                    "URL": "https://mydomain.com/restricted-access-page"
                }
            }
        }
    ]
}
```

### Trigger a Callback

Trigger PHP callback. The valid callback has to be specified. For more information, refer to the [Callbacks](http://php.net/manual/en/language.types.callable.php) page.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "URI:/category/authenticated-user-only/",
            "Metadata": {
                "Redirect": {
                    "Type": "callback",
                    "Callback": "MyAccessController::deny"
                }
            }
        }
    ]
}
```