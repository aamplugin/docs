export default (options) => {
    const finalOptions = Object.assign({}, {
        normalSuffix: '',
        indexSuffix: '/',
        notFoundPath: '/404.html'
    }, options);

    return {
        name: 'clean-urls',

        extendsPage(page): void {
            const { frontmatter = {} } = page;

            if (frontmatter.permalink) return;
            if (!page.path) return;

            if (page.path === '/404.html') {
                // path for 404 page
                page.path = finalOptions.notFoundPath
            } else if (page.path.endsWith('.html')) {
                // normal path
                // e.g. foo/bar.md -> foo/bar.html
                page.path = page.path.slice(0, -5) + finalOptions.normalSuffix
            } else if (page.path.endsWith('/')) {
                // index path
                // e.g. foo/index.md -> foo/
                page.path = page.path.slice(0, -1) + finalOptions.indexSuffix
            }
        }
    }
}