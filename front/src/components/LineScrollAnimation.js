import { Box } from '@mantine/core';
import React, { useEffect, useState } from 'react';

export default function LineScrollAnimation() {
    const [maxHeight, setMaxHeight] = useState()

    console.log(`${maxHeight}px`, 'max')

    useEffect(() => {
        const body = document.body,
            html = document.documentElement;

        const height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        setMaxHeight(height)
        const path = document.getElementById('Path_440');
        const theFill = document.getElementById('theFill');

        const handleDraw = () => {
            let l = path.getTotalLength();
            let dashoffset = l;
            const e = document.documentElement;

            theFill.setAttributeNS(null, 'stroke-dasharray', l);
            theFill.setAttributeNS(null, 'stroke-dashoffset', l);

            dashoffset = l - window.scrollY * l / (e.scrollHeight - e.clientHeight);

            console.log(
                'window.scrollY',
                window.scrollY,
                'scrollTop',
                e.scrollTop,
                'scrollHeight',
                e.scrollHeight,
                'clientHeight',
                e.clientHeight,
                'dash-offset',
                dashoffset
            );

            theFill.setAttributeNS(null, 'stroke-dashoffset', dashoffset);
        };

        window.addEventListener('scroll', handleDraw);

        return () => {
            window.removeEventListener('scroll', handleDraw);
        };
    }, []);

    return (
        <Box h='100vh' w='100px' mt='82px' className='fixed-pattern'>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox={`0 0 100.354 ${maxHeight}`}
                height={`${1500}`}
            >
                <defs>
                    <path
                        id="Path_440"
                        d="M110.907 1C2.21855 259.451 -24.2439 1036.34 128.532 1393.94C167.341 1484.78 233.814 1563.66 269.534 1699.77C314.184 1869.92 169.658 1986.76 128.532 2062.68C94.8316 2124.89 -43.0195 2374.44 15.1437 2626.96C73.3068 2879.49 266.009 3015.18 266.009 3213.32C266.009 3395.41 123.891 3497.84 52.7441 3630.82C-15.9941 3759.3 -10.7066 3948.83 143.22 4123.82C158.021 4143.35 195.839 4196.21 228.703 4251.4C269.784 4320.38 301.286 4555.82 143.22 4717.88C16.7677 4847.54 111.331 5176.16 204.642 5255"
                        fill="none"
                    />
                </defs>
                <use
                    xlinkHref="#Path_440"
                    stroke="#567"
                    strokeWidth={2}
                    strokeDasharray={8}
                />
                <use id="theFill" xlinkHref="#Path_440" stroke="#8CE969   " strokeWidth={3} />
            </svg>

        </Box>
    );
}
