import React from 'react';
import Cards from './Cards';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

function Math() {
  return (
    <div className="math">
      <h1>Math</h1>
      <Link 
        title="Game 1"
        description="This is the description for Game 1"/>
      <Link
        title="Game 2"
        description="This is the description for Game 2"/>
      <Link
        title="Learning Resource"
        description="This is the description for Resource 1"/>
      <Link
        title="Learning Resource"
        description="This is the description for Resource 2"/>
    </div>
  );
}

export default Math;