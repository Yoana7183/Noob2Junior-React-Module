import React from 'react';
import BackButton from '../components/back-button-navbar';
import GitHubFindDev from '../feature-gitHub/GitHubFindDev';
import DataProvider from '../feature-gitHub/context/DataContext';
export default function GitHub() {
  return (
    <>
      <BackButton />
      <DataProvider>
        <GitHubFindDev />
      </DataProvider>
    </>
  );
}
