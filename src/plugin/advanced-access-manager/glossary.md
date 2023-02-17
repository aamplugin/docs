---
title: Glossary
order: 4
---

The WordPress ecosystem is gigantic, and millions of people use it daily. So, it is reasonable to assume that WordPress users use different words (terms) to describe the same things. For example, one user may say - "I have 100 orders in my database", while another says - "I have 100 posts or the order post type in my database". Both statements are correct.

We are doing our best to stay consistent with the terminology throughout the portal. We also use the _italic font_ to emphasize these terms. So if you ever wonder what any particular term means, refer to this glossary page.

**_post_** or **_posts_** - any type of post stored in the database table `wp_options`. Mentally you may think about WordPress posts, pages, orders, or contact form submissions as separate entities. However, under the hood, they are all alike and managed by WordPress core almost identically.

**_taxonomy_** - unique classifier or _terms_. Taxonomy is not an entity that stores in a database or any files on the server. It is a virtual classifier. A good analogy is the word _car_. It means nothing to you unless you can physically see and drive it. So while the _car_ is a taxonomy that classifies the means of transportation, the car _Tesla Model X with license plate XXF-0000_ is the physical instance of a car.

**_term_** or **_terms_** - an instance of a specific _taxonomy_ that is stores in the `wp_terms` database table. From the real-world analogy above, the  "_Tesla Model X with license plate XXF-0000_" is the instance of the _car taxonomy_.

**_hierarchical taxonomy_** - a type of taxonomy that allows creating hierarchy of _terms_ where each child _term_ has only one parent _term_. Many WordPress users call this type of taxonomy a "category".

**_tag_** or **_tags_** - a taxonomy type where all _terms_ are on the same level. There are no parent or child _terms_. A good example of _tags_ is the WordPress core "Post Tags".

**_backend_** - the WordPress CMS admin area. Any page that starts with  `/wp-admin/` is part of the admin area.

**_frontend_** - any page or URL that is not part of the _backend_.

**_metabox_** - a small UI component on the edit screen of the _backend_. [The official WordPress documentation](https://developer.wordpress.org/plugins/metadata/custom-meta-boxes) describes _metabox_ as "_When a user edits a post, the edit screen is composed of several default boxes: Editor, Publish, Categories, Tags, etc. These boxes are meta boxes. Plugins can add custom meta boxes to an edit screen of any post type_". Based on the recent push to use Gutenberg in WordPress, _metaboxes_ will become obsolete. AAM will support [the ability to manage access to individual _metaboxes_](/plugin/advanced-access-manager/service/metabox-widget) as long as WordPress core supports them.

**_widget_** - a small UI component that can render on of both _backend_ and _frontend_ sides. Conceptually it is very similar to the _metaboxes_, however, they are available only on the _backend_ `Dashboard->Home` page and on the _frontend_. It is also soon to become an obsolete functionality with the raise of the Gutenberg blocks.