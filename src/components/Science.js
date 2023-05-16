import React from 'react';
import Cards from './Cards';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import BackButton from './BackButton';

function Science() {
  return (
    <div className="science">
      <BackButton/>
      <h1>Science</h1>
      <Link 
        title="Game 1"
        />
      <Link
        title="Game 2"
        />
      <Link
        title="Learning Resource"
        />
      <Link
        title="Learning Resource"
        />
    </div>
  );
}

export default Science;