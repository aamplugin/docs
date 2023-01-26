---
title: Protected Media Files
---

The "AAM Protected Media Files" is a free add-on for the Advanced Access Manager plugin. You can download both from the official WordPress plugin repository for free.
[AAM Protected Media Files](https://wordpress.org/plugins/aam-protected-media-files/).
[Advanced Access Manager](https://wordpress.org/plugins/advanced-access-manager/).
It is required to have both plugins installed and activated at all times if you need to protect your physical files on the server.

The plugin's only responsibility is to protect your physical files from being accessed by authorized users. It does not modify your files (encrypt in any way or move them to a random folder). It does not change your files' direct URLs either. So if you choose to deactivate and uninstall the plugin, your website will stay intact and fully functioning.

These are just a few facts about the plugin:

- It requires a simple manual step to configure a web server to protect direct access to any folder on your server (typically `/wp-content/uploads`). Check the [Installation](/plugin/protected-media-files/installation) section for detail.

- It does not change a physical file's location, content, or URL. Upon deactivation, everything goes back to normal.

- It protects any managed by WordPress core file types. For the list of all allowed extensions, check official WP documentation for the [wp_get_ext_types()](https://developer.wordpress.org/reference/functions/wp_get_ext_types/) core function.

- It allows managed access to any media file for visitors, any individual user, and roles or even defines the default access to all media files for everybody (if you have the [premium Complete Package](/premium) installed).

- It offers at least 3 different ways to define access controls to your files. For more information, refer to [Manage access with UI](/plugin/protected-media-files/access-controls-with-ui) and [Manage access with policies](/plugin/protected-media-files/access-controls-with-policy).