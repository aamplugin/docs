---
title: aam_change_passwords
---

This capability is managed by the **Additional Caps** service that is enabled by default in the free AAM version. You can toggle this service on the [AAM Settings page](/plugin/advanced-access-manager/ui-overview#settings-page) on the _Services_ tab.

The `aam_change_passwords` is a custom capability that you create manually. Upon creation, all privileged users and roles that have the ability to manage other users, and do not have this capability explicitly granted, will not be able to change other users' passwords on the _Edit User_ page.

The capability is deeply integrated with the WordPress core functionality and leverages the [show_password_fields](https://developer.wordpress.org/reference/hooks/show_password_fields/) filter to hide password fields on the _Edit User_ page.

In addition, it uses the WordPress core [check_passwords](https://developer.wordpress.org/reference/hooks/check_passwords/) action to wipe incoming credentials if the user tries to bypass HTML form or leverage RESTful API.