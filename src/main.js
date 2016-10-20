// src/main.jsx
import React from 'react';
import { render } from 'react-dom';

import Hello from './components/hello.js';
import World from './components/world.js';

render(
    <div>
        <Hello />
        <World />
    </div>,
    document.getElementById('app')
);
