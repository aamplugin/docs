---
title: What is a safe redirect in WordPress?
---

::: info Note!
This article is primarily for WordPress developers. However, we encourage you to read it even if you are not one. Redirects in WordPress are taken lightly because majority of users do not understand the risk of poorly handled redirect rules.
:::

In WordPress, both `wp_redirect` and `wp_safe_redirect` functions are used for redirecting users to another location. However, there is a difference in how they handle the redirection process. So, before we dive deeper into understanding how to handle safe redirects, let's understand the difference.

### Regular vs safe redirect

The **`wp_redirect`** is a basic redirection function in WordPress. It sends a redirect header to the browser, indicating the new location to which the user should be redirected. The function takes a URL parameter and redirects the user to that URL. It does not perform any security checks or sanitization on the URL provided. Therefore, if you use `wp_redirect` without validating the URL, it can be potentially unsafe and may allow for open redirects or other vulnerabilities.

The **`wp_safe_redirect`** is an enhanced version of `wp_redirect` and  includes some security checks. It performs a series of validations on the provided URL to ensure it is safe for redirection. These checks include:
- verifying that the URL is within the same site as the current page.
- verifying that the redirecting domain is explicitly whitelisted by the website owner.
- checking whether the URL uses the `http` or `https` protocol.

If the URL fails security checks, the function redirects a user to the "fallback" URL (which is typically an admin homepage). You can modify this behavior by using the [wp_safe_redirect_fallback](https://developer.wordpress.org/reference/hooks/wp_safe_redirect_fallback/) filter.

From the comparison above, you may get the hint that it is recommended to use safe redirects and be mindful of how you use regular redirects. For example, AAM plugin deliberately avoids regular redirects to prevent any possibilities of open redirects.

Now, let's explore how to whitelist trusted domains programmatically and with AAM [access policies](/advanced/access-policy/).

### Whitelist domains with code

WordPress core has the [allowed_redirect_hosts](https://developer.wordpress.org/reference/hooks/allowed_redirect_hosts/) that allows adjusting the list of whitelisted domains. The filter accepts the initial array of trusted domains (typically only the current website's domain) and expects an array of whitelisted domains in return.

In the example below, we programmatically add two additional domains  we trust.

```php
add_filter('allowed_redirect_hosts', function($domains) {
    if (is_array($domains)) {
        array_push($dommains, 'members.aamportal.com');
        array_push($dommains, 'store.aamportal.com');
    }

    return $domains;
});
```

### Whitelist domains with a policy

Another way to whitelist domains is to use the AAM access policy resource [Hook](/advanced/access-policy/resource-action/hook#definition). This resource allows tapping into any WordPress core or custom actions and filters to either change their behavior or return modified values.

In our case, we want to do very similar to the above code example and use `allowed_redirect_hosts` to add additional trusted domains. The following policy does the trick.

```json
{
    "Statement": [
        {
            "Effect": "merge",
            "Resource": "Hook:allowed_redirect_hosts",
            "Response": [
                "members.aamportal.com",
                "store.aamportal.com"
            ]
        }
    ]
}
```

::: info FYI!
As you can see, the access policy route allows customizing a trusted list of domains for each role or individual user.
:::