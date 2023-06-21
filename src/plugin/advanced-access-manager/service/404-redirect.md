---
title: 404 Redirect
---

::: info Quick Facts
- **It is free**. There is no need to purchase any premium add-ons to use all the features in this service.
- You have three different options to customize user experience when 404 Not Found occurs.
- You can customize the 404 redirect experience for any role or individual user.
- With the help of [Access Policies](/advanced/access-policy/param/404-redirect), the 404 experience can be adjusted by any number of conditions.
:::

The vast majority of WordPress themes come with a custom 404 page. However, you may still want to customize the user experience when the requested page is not found. The 404 Redirect service allows you to customize the redirect with a simple yet powerful UI interface.

![AAM 404 Redirect Service](./assets/aam-404-redirect-service.png)

Besides the default WordPress 404 experience, AAM offers three different redirect options.

- **Redirect to an existing page**. The option presents an additional drop-down with all the pages on the website to choose from.
- **Redirected to a URL**. Requires to provide a valid URL to redirect to. The redirect is managed by WordPress core "save redirect" which typically means the URL has to be either for the same domain or allowed domains. For details, refer to the [What is a safe redirect in WordPress?](/blog/what-is-a-safe-redirect-in-wordpress) blog.
- **Trigger a PHP callback function**. The option allows triggering a custom PHP function that handles user experience.