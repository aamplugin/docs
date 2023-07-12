---
title: Changelog
order: 99
toc: false
contributors: false
breadcrumb: false
editLink: false
lastUpdated: false
prev: false
next: false
---

## v6.0.4

- **Bug Fixed**. Fixed the PHP warning `Creation of dynamic property ...IPCheck::$explicitOption is deprecated`.
- **Changed**. Adding "Category" column to the Pages or Media table view if custom "Category" taxonomy is enabled on the AAM Settings page.
- **New**. Add the "Changelog" link to the "AAM Complete Package" plugins table view in the WordPress backend area.
- **New**. Adding new `X-Instance-Id` custom header that contains hashed with `wp_hash` WordPress instance ID to deduplicate the same instances with multi-container setup. This is done to save $$ for customers that run WordPress websites on multiple containers behind load-balancer.
- **New**. Added support for the backend menu restricted mode feature. For more detail, refer to the [Backend menu restricted mode](/plugin/premium-complete-package/backend-access/backend-menu-restricted-mode).
- **New**. Added support for the admin toolbar restricted mode feature. For more detail, refer to the [Admin toolbar restricted mode](/plugin/premium-complete-package/backend-access/admin-toolbar-restricted-mode).
- **New**. Added support for the metaboxes & widgets restricted mode feature. For more detail, refer to the [Screen components restricted mode](/plugin/premium-complete-package/backend-access/screen-components-restricted-mode).
- **New**. Added support for the RESTful API restricted mode feature. For more detail, refer to the [RESTful API restricted mode](/plugin/premium-complete-package/restful-api-access/restricted-mode).

## v6.0.3

- **Bug Fixed**. Fixed the bug in the post visibility functionality that potentially malfunctioned.
- **Changed**. Improved the functionality that checks for the latest premium plugin updates.
- **Changed**. Implemented additional edge-case for post visibilities when access is defined through terms.

## v6.0.2

- **Changed**. Changed the endpoint that returns the premium plugin details about latest version.

## v6.0.1

- **New**. Added activation hook to the premium plugin to prevent activation unless the basic Advanced Access Manager plugin is installed and active.
- **Changed**. Adjusted tooltips to remove references to the legacy aamplugin.com website.
- **Changed**. Adjusted hierarchical role implementation to work with AAM RESTful API that [manages roles](advanced/restful/reference/roles).

## v6.0.0

- **Changed**. Initial implementation for a single plugin that contains all premium features in one.