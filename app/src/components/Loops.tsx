// src/components/Loops.tsx

import React from 'react';

const Loops: React.FC = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1>Understanding Loops in Python</h1>
        <p>

        </p>

        <h2>1. For Loop</h2>
        <p></p>

        <pre><code>{`
            for i in range(5):
                print(i)
                `}
        </code></pre>
        <p>This will print the numbers from 0 to 4.</p>

        <h2>2. While Loop</h2>
        <pre><code>{`
        i = 0
        while i < 9:
            print(i)
        `}</code></pre>
        <p>This will print the numbers from 0 to 9.</p>

        <h2>Python Compiler</h2>
        <p>Use the embedded Python compiler below to test your code:</p>
        <iframe
            title="Python Compiler"
            src="https://trinket.io/embed/python/c602fdf514fe"
            style={{ width: '100%', height: '600px', border: 'none' }}
            frameBorder="0"
            allowFullScreen
        ></iframe>
        </div>
    );
};

export default Loops;