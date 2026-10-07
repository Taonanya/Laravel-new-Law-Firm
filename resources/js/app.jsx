import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

function AnimatedApp({ App, props }) {
    useEffect(() => {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const observer = reducedMotion || !('IntersectionObserver' in window)
            ? null
            : new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.dataset.revealVisible = 'true';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

        const revealTargets = (root) => {
            const targets = [];
            if (root instanceof Element && root.matches('[data-reveal]')) {
                targets.push(root);
            }
            if (root.querySelectorAll) {
                targets.push(...root.querySelectorAll('[data-reveal]'));
            }

            targets.forEach((target) => {
                if (target.dataset.revealReady) return;
                target.dataset.revealReady = 'true';
                if (observer) observer.observe(target);
                else target.dataset.revealVisible = 'true';
            });
        };

        const root = document.getElementById('app');
        if (!root) return undefined;

        revealTargets(root);
        const mutations = new MutationObserver((records) => {
            records.forEach((record) => record.addedNodes.forEach(revealTargets));
        });
        mutations.observe(root, { childList: true, subtree: true });

        return () => {
            mutations.disconnect();
            observer?.disconnect();
        };
    }, []);

    return <App {...props} />;
}

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<AnimatedApp App={App} props={props} />);
    },
    progress: {
        color: '#c8a951',
    },
});
