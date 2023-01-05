---
title: The AAM Complete Package is not properly installed
---

::: question Question
I see the "The AAM Complete Package is not properly installed" message on my WordPress admin panel. What should I do?
:::

![Incorrectly Installed Package Notice](./assets/incorrect-installation-notice.png)

First of all, do not panic. All the premium functionality is working as expected. So, please take your time to read through this Q&A and address the issue as we instruct.

Most WordPress plugins, typically go to the `/wp-content/plugins` folder, and each has a unique folder name. This name is also called _slug_. When WordPress core checks for installed plugins' updates, it uses these _slugs_ to detect if there are new updates. That is why it is so important to keep the plugin's slug untouched.

If you receive the admin notification "The AAM Complete Package is not properly installed", this is due to one of two possible reasons.

- Your license key was converted to a different product. For example, if you purchased the Plus Package license and we converted it to the Complete Package, the `/wp-content/plugins/aam-plus-package` folder will contain the Complete Package codebase.

- You manually changed the folder name to something different.

In both cases, sFTP to your server and rename the plugin's folder to the `aam-complete-package`. If you use versioning control like Github or Versions, make the changes to the folder name in your repo and redeploy your website.

::: warning Note!
When you change any plugin's folder name, you need to go back to the _Plugins_ page on your admin panel and reactivate the plugin. So, do not forget this step!
:::

If you do not do this crucial step, your WordPress instance will have no way to inform you about new Complete Package updates.

::: info FYI!
To avoid poor user experience, The "The unlicensed AAM Complete Package was detected" is visible only to the users that can install, update or delete plugins on your websites. Your subscribers, contributors, or editors **do not** see this message.
:::