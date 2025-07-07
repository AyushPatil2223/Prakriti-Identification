// src/components/card.jsx

import React from 'react';

const Card = ({ children, className }) => (
  <div className={`shadow-lg rounded-2xl overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 bg-white ${className}`}>
    {children}
  </div>
);

export { Card, CardContent };
