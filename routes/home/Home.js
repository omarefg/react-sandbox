import React from 'react';
import { Link } from 'react-router-dom';
import { optimizeYourReactAppRoute } from '../routes';

export function Home() {
  return (
    <nav>
      <Link to={optimizeYourReactAppRoute}>Optimize your react app</Link>
    </nav>
  );
}
