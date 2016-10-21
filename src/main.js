// src/main.jsx
import React from 'react';
import { render } from 'react-dom';

import Hello from './components/hello.js';
import World from './components/world.js';
import Counter from './components/counter.js';

render(
    <div>
      <Counter count="100" />
    </div>,
    document.getElementById('app')
);

