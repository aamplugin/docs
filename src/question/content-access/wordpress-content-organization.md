---
title: How is WordPress content organized?
---

WordPress CMS is the most popular content because it implements a straightforward way to organize content. However, because it uses several different terms to describe it, we find it helpful to review all known types of content and explain how they relate to each other.

First and foremost, Merriam-Webster probably most accurately defines the term content - as "_the principal substance (such as written matter, illustrations, or music) offered by a website_".

To effectively manage content, it has to be organized (categorized, grouped, classified, etc.). That is why WordPress core offers two main types of content: _post_ and _term_. The remaining part of this page describes the ideas behind each type, how they are classified, and how they relate.

### Post & Post Type

Typically we talk about posts, pages, attachments, orders, contact forms, etc., as something completely different from each other without realizing that they all are _posts_. They all are stored in the same database table `wp_posts` and treated by the WordPress core the same way.

The only two substantial differences between them are the post type attribute and the list of capabilities that grant access to various actions (e. g. edit, delete, publish).

::: info Again!
To be 100% clear, every _post_ is classified by the post type attribute. For example, any regular post that you write is the post of the post type `post`, and page - is a post of the post type `page`.
:::

While a _post_ classifies by its post type, it also can be hierarchical or non-hierarchical. The only difference is that the hierarchical post may have a parent post.

The diagram below visually displays how posts are related to hierarchical and non-hierarchical post types. Access settings and properties are propagated down the hierarchical order from the "Post Type" to "Parent Post(s)" if any, and down to the individual "Post".

::: center
![WordPress Post - Post Type Relation](./assets/wp-post-posttype.png =400x)
:::

### Term & Taxonomy

With an increasing number of _posts_, there is a need to categorize or tag posts for various reasons. That is why WordPress core introduces another type of content - _term_.

All the created _terms_ are stored in the database table `wp_terms` and are classified by `taxonomy`. For example, we say "post categories" to describe terms of taxonomy `category` and "post tags" for terms of taxonomy `post_tag`.

Similarly to the _post type_, _taxonomy_ can be hierarchical and non-hierarchical. It is common to call terms that belong to hierarchical taxonomy - "categories" and terms that belong to non-hierarchical taxonomy - "tags".

The diagram below visually displays how `terms` are related to hierarchical and non-hierarchical `taxonomy`. Access settings and properties propagate down the hierarchical order from the "Taxonomy" to the "Parent Term(s)" if any, and down to the individual "Term".

::: center
![WordPress Term - Taxonomy Relationship](./assets/wp-term-taxonomy.png =400x)
:::

### Content Hierarchy

Putting it all together, the diagram below shows the complete picture of the content types and how they relate. This way, you can visually see how the access controls can propagate down the hierarchical tree to any requested content.

::: center
![WordPress Content Hierarchy](./assets/wp-content-hierarchy.png =400x)
:::

The free AAM plugin, with the help of premium [Complete Package](/premium) allows defining access controls for each level separately. And because access controls and properties propagate down the hierarchy, the inherited settings can be overwritten.
