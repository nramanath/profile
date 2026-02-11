// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://nramanath.github.io',
    base: '/profile',
    integrations: [
        starlight({
            title: 'Developer Career Profile',
            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/nramanath',
                },
            ],
            sidebar: [
                {
                    label: 'Profile',
                    items: [
                        { label: 'About Me', slug: 'about-me' },
                        { label: 'Experience', slug: 'experience' },
                        { label: 'Projects', slug: 'projects' },
                        { label: 'Tech Stack', slug: 'tech-stack' },
                    ],
                },
            ],
        }),
    ],
});
