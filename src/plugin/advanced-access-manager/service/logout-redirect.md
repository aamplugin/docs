---
title: Logout Redirect
---

::: info Quick Facts
- **It is free**. There is no need to purchase any premium add-ons to use all the features in this service.
- You have three different options to customize user experience after they successfully logout.
- You can customize the logout experience for any role or individual user.
- With the help of [Access Policies](/advanced/access-policy/param/logout-redirect), the logout experience can be adjusted by any number of conditions.
:::

The default logout experience for WordPress is a redirect to the login page of a website. In many cases, this is not a good user experience, as naturally, you want your users to be redirected to the home page. The Logout Redirect service allows you to customize the redirect with a simple yet powerful UI interface.

![AAM Logout Redirect Service](./assets/aam-logout-redirect-service.png)

Besides the default WordPress logout experience, AAM offers three different redirect options.

- **Redirect to an existing page**. The option presents an additional drop-down with all the pages on the website to choose from.
- **Redirected to a URL**. Requires to provide a valid URL to redirect to. The redirect is managed by WordPress core "save redirect" which typically means the URL has to be either for the same domain or allowed domains. For details, refer to the [What is a safe redirect in WordPress?](/blog/what-is-a-safe-redirect-in-wordpress) blog.
- **Trigger a PHP callback function**. The option allows triggering a custom PHP function that handles user experience after successful authentication.