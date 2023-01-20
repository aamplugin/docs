---
title: aam_edit_permalink
tag: aam-v7
---

This capability is managed by the **Additional Caps** service that is enabled by default in the free AAM version. You can toggle this service on the [AAM Settings page](/plugin/advanced-access-manager/ui-overview#settings-page) on the _Services_ tab.

The `aam_edit_permalink` is a custom capability that you create manually. Upon creation, all users and roles that do not have this capability explicitly granted will not be able to edit or change permalink for posts, pages and custom post types **if only** you use classic editor.

![WordPress Edit Permalink](./assets/wordpress-edit-permalink.png)

::: info Note!
The `aam_edit_permalink` capability integrates with the WordPress core filter [get_sample_permalink_html](https://developer.wordpress.org/reference/functions/get_sample_permalink_html/), which is not applicable to Gutengerg editor. We will be introducing more access controls for Gutengerg block in AAM v7.
:::