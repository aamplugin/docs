---
title: USER_OPTION
---

#### Syntax

`${USER_OPTION.<pathToProperty>}`

#### Definition

Very similar to the [USER_META](/advanced/access-policy/marker/usermeta) marker, with the only difference in how the data is fetched from the database.

For this marker, AAM uses WordPress core function [get_user_option](https://developer.wordpress.org/reference/functions/get_user_option/), which works slightly differently from [get_user_meta](https://developer.wordpress.org/reference/functions/get_user_meta/).