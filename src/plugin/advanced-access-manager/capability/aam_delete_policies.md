---
title: aam_delete_policies
---

Under the hood, each AAM access policy is stored as a custom post type `aam_policy`, and permissions to perform actions against this post type are defined during the custom post type registration.

::: info FYI!
For more information about capabilities for a post type, refer to the [get_post_type_capabilities](https://developer.wordpress.org/reference/functions/get_post_type_capabilities/) official WordPress developer page.
:::

The `aam_delete_policies` capability permits a user to delete any access policies. It is a custom capability, and if it is not explicitly created, AAM checks if a user has the `administrator` capability instead.