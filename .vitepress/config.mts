import { defineConfig, loadEnv } from 'vitepress';
import { SearchPlugin } from 'vitepress-plugin-search';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    return defineConfig({
        base: env.VITE_APP_BASE_URL,
        title: 'xams-framework',
        description: '123',
        srcDir: 'src',
        outDir: './build',
        head: [
            [
                'link', { rel: 'icon', href: '/logo.png' },
            ],
        ],
        themeConfig: {

            // https://vitepress.dev/reference/default-theme-config
            nav: [
                { text: 'Home', link: '/' },
                { text: 'Examples', link: '/markdown-examples' },
            ],

            sidebar: [
                {
                    text: 'Examples',
                    items: [
                        { text: 'Markdown Examples22', link: '/demo/api-examples' },
                        { text: 'Markdown Examples', link: '/markdown-examples' },
                        { text: 'Runtime API Examples', link: '/api-examples' },
                    ],
                },
            ],

            socialLinks: [
                { icon: 'github', link: 'https://github.com/xams-creator/dusk' },
            ],
        },
        vite: {
            publicDir: '../public',
            plugins: [
                SearchPlugin({
                    // ...flexSearchIndexOptions,
                    previewLength: 62,
                    buttonLabel: 'Search',
                    placeholder: 'Search docs',
                    allow: [],
                    ignore: [],
                }),
            ],
        },
    });
});
