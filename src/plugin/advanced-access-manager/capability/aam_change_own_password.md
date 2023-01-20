---
title: aam_change_own_password
---

This capability is managed by the **Additional Caps** service that is enabled by default in the free AAM version. You can enable or disable this service on the [AAM Settings page](/plugin/advanced-access-manager/ui-overview#settings-page) on the _Services_ tab.

The `aam_change_own_password` is a custom capability that you create manually. Upon creation, all users and roles that do not have this capability explicitly granted will not be able to change their own password on the _Profile_ page.

The capability is deeply integrated with the WordPress core functionality and leverages the [show_password_fields](https://developer.wordpress.org/reference/hooks/show_password_fields/) filter to hide password fields on the _Edit Profile_ page.

In addition, it uses the WordPress core [check_passwords](https://developer.wordpress.org/reference/hooks/check_passwords/) action to wipe incoming credentials if the user tries to bypass HTML form or leverage RESTful API.