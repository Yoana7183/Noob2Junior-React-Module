import React from 'react';
import Button from './components/Button';

export default function HomePage() {
  return (
    <div>
      <div>
        <nav>
          <li>Home</li>
          <li>About</li>
        </nav>
      </div>
      <div>
        <Button title="Landing Page" />
        <Button title="Landing Page - ez" />
        <Button title="Tips Calculator" />
        <Button title="Git Hub" />
        <Button title="E-commerce shop" />
      </div>
    </div>
  );
}
