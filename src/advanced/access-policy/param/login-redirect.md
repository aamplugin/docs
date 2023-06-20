---
title: Login Redirect
---

### Syntax

```json
{
    "Key": "redirect:on:login",
    "Value": {
        "Type": "page_redirect|url_redirect|trigger_callback|default",
        "PageSlug": "string",
        "PageId": "number",
        "Url": "string",
        "Callback": "string"
    }
}
```

### Definition

The login redirect behavior is expressed in the AAM access policy as the param `redirect:on:login`. The "Value" property contains attributes that define how to handle redirects.

The `Type` attribute defines what type of redirect to apply and can contain one of the following values:
- `page_redirect` is the redirect to an existing page.
- `url_redirect` is the safe redirect to a URL.
- `trigger_callback` invokes a custom PHP function that handles redirects.
- `default` is the default WordPress behavior.

Depending on the `Type` additional information may be required to fine-tune the redirect as follows:
- If the redirect type is page redirect, you can provide either the page slug or page ID for the destination page. We recommend using page slugs to make policies more readable.
- If the redirect type is URL, you should provide a valid URL. However,  AAM uses WordPress core safe redirect for security and compliance reasons. You can learn more about this from [What is a safe redirect in WordPress?](/blog/what-is-a-safe-redirect-in-wordpress) blog.
- If the redirect is a callback, a valid [PHP callback function](https://www.php.net/manual/en/language.types.callable.php) is required. AAM does not validate if the provided function exists.

Here is an example of the "login redirect" param where we redirect a user who has the Subscriber role to the `/members/` page.

```json
{
    "Param": [
        {
            "Key": "redirect:on:login",
            "Value": {
                "Type": "url_redirect",
                "Url": "https://demo.aamportal.com/members"
            },
            "Condition": {
                "In": {
                    "subscriber": "(*array)${USER.roles}"
                }
            }
        }
    ]
}
```
