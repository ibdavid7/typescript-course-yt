import React, { ReactElement } from 'react';

interface HeadingProps {
    title: string;
}

const Headings = ({ title }: HeadingProps): ReactElement => {
    return (
        <h1>{title}</h1>
    )
}

export default Headings