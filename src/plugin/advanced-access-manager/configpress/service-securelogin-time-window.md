---
title: service.secure_login.time_window
---

---
title: service.secure_login.time_window
---

### Syntax

`service.secure_login.time_window = "string|number"`

The default value is: `20 minutes`

### Definition

Declare the rolling over time intervals for the authentication. This configuration works in pair with [service.secure_login.login_attempts](/plugin/advanced-access-manager/configpress/service-securelogin-login-attemtps) to track the number of failed login attempts and prevent password brute force attacks.

When a user fails to enter the correct password, the clock starts, and the number of failed attempts increments up to the defined threshold with `service.secure_login.login_attempts` (default is 8). After that point, the user cannot login anymore until the login time window expires.

For example, if a user entered an incorrect password eight times within the first minute, then they have to wait for another nineteen minutes to start again.