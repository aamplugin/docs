---
title: Things you need to know
order: 2
---

## About media items

WordPress media items, under the hood, are managed by the core as `attachment` post types. Every time you upload a new file through the _Media Library_, two things happen: a new record is created in the database table `_posts`, and the file uploads to the `/wp-content/uploads` folder. That is why while managing access to media items, you have to ensure that both DB records and physical files are protected.

Things are getting more complicated with images because, depending on your website setup, the WordPress core may create thumbnails of different sizes when an image is uploaded. For example, if you upload the `armadillo.png` image through the _Media Library_, the WordPress core will also create several thumbnails (e. g. `armadillo-150x150.png`, `armadillo-300x300.png`, etc.). So, one image file instantly becomes a collection of 5 or more files on the server.

Luckily, the AAM Protected Media Files plugin takes into consideration these details and makes sure that all your physical files and DB records are properly protected.

## About server redirects

All the website files are owned by the server. Depending on your hosting provider, it can be Apache, Nginx, IIS, etc. That is why it is a crucial step to instruct your server to redirect any direct access to your protected files to the AAM access control handler.

9 out of 10 times, the reason the plugin does not work properly is that these redirect rules are not configured properly. In the [Installation](/plugin/protected-media-files/installation#setup-server-redirect-rules) section we give our best shot to guide you through the proper setup for Apache and Nginx servers.

If you do not understand the concept of server redirects, please consult with your hosting provider support team. Any decent hosting company is more than happy to assist you with this task.