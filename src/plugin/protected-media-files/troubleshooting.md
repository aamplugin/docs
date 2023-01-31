---
title: Troubleshooting
order: 9
---

In our experience supporting hundreds of projects, we noticed a few scenarios when the access controls to media items (physical files) do not work as intended. In this section, we disclose them here so you can troubleshoot and resolve an issue.

### Issue 1. All images on the website do not load.

When you adjust your server redirect rules, all the files inside the specified folder (typically `/wp-content/uploads`) are redirected to the AAM access control handler. If you have either [Advanced Access Manager](https://wordpress.org/plugins/advanced-access-manager) or [AAM Protected Media Files](https://wordpress.org/plugins/aam-protected-media-files/) plugin inactive, then no functionality can server file requests. In this case, make sure that you have **both plugins installed and active**.

If you no longer need to protect your media items, then delete the custom server redirect rules.

### Issue 2. CSS, JavaScript, and other files do not load correctly anymore.

When you update your server redirect rules as instructed in the [Installation](/plugin/protected-media-files/installation#setup-server-redirect-rules) section, literally all the files inside the `/wp-content/uploads` folder are served through the AAM access control handler.

You should be aware that there are some plugins and themes that repurpose the uploads folder to store custom CSS, JS, and other assets. Arguably this may not be the most healthy and secure way for the website. However, if that applies to you, then consider either excluding certain file types or folders from the redirect or doing redirects only for specific file types (e. g. redirect only if a file is `.pdf`).

### Issue 3. The access denied redirect rule does not apply

If you use the [Access Denied Redirect](/plugin/advanced-access-manager/service/access-deny-redirect) service to define user experience when access is denied to your media items, then you have to remember to enable the [Use Access Denied Redirect For Restricted Media Items](/plugin/advanced-access-manager/setting/media-access-denied-redirect) option on the AAM [Settings](/plugin/advanced-access-manager/ui-overview#settings-page) page.