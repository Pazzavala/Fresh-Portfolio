import { useSectionInView } from '@/lib/hooks';
import React from 'react';

export default function Experience() {
    const { ref } = useSectionInView('Experience');

    return (
        <section ref={ref} id='Experience'>
            Experience
        </section>
    );
}
