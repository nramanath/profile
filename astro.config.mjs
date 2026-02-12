// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false,
    },
    site: 'https://nramanath.github.io',
    base: '/profile',
    integrations: [
        starlight({
            title: 'Ramanathan Nachiappan',
            description:
                'Professional developer portfolio showcasing experience, skills, and projects',
            customCss: ['./src/styles/ui-tweaks.css', './src/styles/resume.css'],
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'English',
                    lang: 'en',
                },
            },
            social: [
                {
                    icon: 'github',
                    label: 'GitHub Repository',
                    href: 'https://github.com/nramanath/profile',
                },
                {
                    icon: 'linkedin',
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/ramnachiappan/',
                },
            ],
            sidebar: [
                {
                    label: 'Profile',
                    items: [
                        { label: 'About Me', slug: 'about-me' },
                        { label: 'Skills', slug: 'skills' },
                        { label: 'Experience', slug: 'experience' },
                        { label: 'Projects', slug: 'projects' },
                        { label: 'Resume', slug: 'resume' },
                    ],
                },
            ],
            components: {
                Head: './src/components/Head.astro',
            },
        }),
    ],
});
