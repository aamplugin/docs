---
title: service.secure_login.login_attempts
---

### Syntax

`service.secure_login.login_attempts = "number"`

The default value is: `8`

### Definition

Define how many times a user can enter an invalid password before they are temporarily locked. The duration of the lock depends on the [service.secure_login.time_window](/plugin/advanced-access-manager/configpress/service-securelogin-time-window) configuration. The default duration is 20 minutes, so if the user enters invalid password eight times within the first 60 seconds, then they'll be locked out for the remaining 19 minutes.

AAM, under the hood uses WordPress core [authenticate](https://developer.wordpress.org/reference/hooks/authenticate/) hook to control login attempts.