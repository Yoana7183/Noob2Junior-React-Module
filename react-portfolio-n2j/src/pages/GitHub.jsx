import React from 'react';
import BackButton from '../components/back-button-navbar';
import GitHubFindDev from '../feature-gitHub/GitHubFindDev';

export default function GitHub() {
  return (
    <div>
      <BackButton />
      <GitHubFindDev />
    </div>
  );
}
