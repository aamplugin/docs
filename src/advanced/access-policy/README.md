---
title: JSON Access Policy
---

Managing access and security to WordPress websites can be a challenging task. While it all is based on a simple concept of roles & capabilities, it is not always clear how to give the correct permissions to users so they can do only what is necessary.

Have you ever been in a situation where you had to manually recreate the same access and security settings over and over again on each WordPress website your company owns? Or, maybe, you are a software engineer who is tired of copying & pasting code that does one-off tasks like capability removal, role creation, hiding metaboxes/widgets, etc.
You could also learn the hard way that granting too much access may significantly increase the risk of a user error or your website being compromised.

When you need a cohesive, standardized, and self-documented way to define and distribute access and security settings across WordPress websites, this is where the access policies may help you the most.

The _Access Policy_ is a well-structured JSON document that contains one or more statements, params, and dependencies that collectively define access settings to a website’s resources and actions.

The great benefit of policies is the ability to back-trail any access control changes because now you have the list of all policy revisions with the timestamp and identity of the person that introduces the changes. It is handy for various compliance and security reasons.

When the policy is defined, you can attach it to any role, individual user, visitor, or programmatic service. You can revoke it at any time without going through the overhead of deleting physical records or manually changing user permissions.

Access policy is a revolutionary way to manage access and security for WordPress websites, and we are excited to share this flexibility and power with the WordPress community.