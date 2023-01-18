---
title: aam_access_dashboard
---

This capability is managed by the **Additional Caps** service that is enabled by default in the free AAM version. You can enable or disable this service on the [AAM Settings page](/plugin/advanced-access-manager/ui-overview#settings-page) on the _Services_ tab.

::: danger Warning!
Be careful. Depriving the _Administrator_ role or your admin user of this capability will immediately lock you down from accessing the backend area of your website.
:::

The `aam_access_dashboard` is a custom capability that you create manually. Upon creation, all users and roles that do not have this capability explicitly granted will not be able to access the backend site of a website (in other words, any URL that starts with `/wp-admin/`).

This capability is handy when you need all your users to restrict access to the WordPress admin panel except a few. You can learn more about this from the [How to lock down the WordPress backend](/question/backend-access/lockdown-backend-area.md) Q&A.