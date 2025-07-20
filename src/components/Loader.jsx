import React from 'react'

export default function Loader() {
    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <svg width="100" height="100" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="#376d73" stroke-width="4">
                    <animate attributeName="r" from="18" to="18" dur="1s" values="18;15;18" repeatCount="indefinite" />
                    <animate attributeName="strokeWidth" from="4" to="4" dur="1s" values="4;6;4" repeatCount="indefinite" />
                </circle>
            </svg>
            <p className='text-white'>Loading...</p>
        </div>
    )
}
