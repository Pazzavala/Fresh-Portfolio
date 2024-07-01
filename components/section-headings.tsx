import React from 'react';

type SectionHeadingProps = { children: React.ReactNode };

// The way out componet accepts props is by children
export default function SectionHeading({ children }: SectionHeadingProps) {
    return <h2 className='text-3xl font-medium capitalize mb-8'>{children}</h2>;
}
