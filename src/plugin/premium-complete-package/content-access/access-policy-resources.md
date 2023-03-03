---
title: Extend access policy
---

[Access policy](/advanced/access-policy/) is the recommended way to manage access controls to WordPress websites for many reasons. That is why we ensured that the new capabilities that the premium Complete Package introduces are also manageable with access policies.

::: info Note!
If you are unfamiliar with access controls as code (aka ACaC) or find policy examples intimidating, please do not stress yourself out.

Indeed, we recommend using access policies to define access controls for WordPress resources. However, the word "recommended" should not force you to learn this subject immediately. Take your time and get used to AAM and how it works through UI. Then, naturally, you'll find your way into the world of JSON access policies.
:::

The premium Complete Package extends the free AAM plugin with the following new resources.

- [PostType](/advanced/access-policy/resource-action/posttype) - provides the ability to define default access controls to all _posts_ of the declared post type.

- [Taxonomy](/advanced/access-policy/resource-action/taxonomy) - gives the ability to define default access controls to all terms that belong to the declared taxonomy.

- [Term](/advanced/access-policy/resource-action/term) - allows defining access controls to the declared term of any taxonomy.

The premium Complete Package also introduces a custom marker's source [IPSTACK](/advanced/access-policy/marker/ipstack) that allows obtaining the geographical location of a user.