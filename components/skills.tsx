import { useSectionInView } from '@/lib/hooks';
import React from 'react';

export default function Skills() {
    const { ref } = useSectionInView('Skills');

    return (
        <section ref={ref} id='Skills'>
            Skills
        </section>
    );
}
