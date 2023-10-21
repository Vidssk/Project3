import React from 'react';
import './App.css';
import './input.css'
import PageBio from './Components/PageBio.js';
import bioData from './Components/bios';
import DataInput from './Components/DataInput';
import FunctionsSection from './Components/FunctionsSection';

function DescriptiveStatsPage({ numbersArray, setNumbersArray }) {
  return (
    <div className="Descriptive-Stats-Wrapper">
      <PageBio bios={bioData[0]}/>
      <div className='descriptive-user-container'>
        <section className='left-section'>
          <h2>Input User data separated using comma:</h2>
          <p>Example Input: 1,50,30,10,45</p>
          <DataInput setNumbersArray={setNumbersArray}/>
        </section>
        <section className='right-section'>
          <h2>Graphs from user input:</h2>
          <p>This is the content for the right section.</p>
        </section>
      </div>
      <div className='functions-wrapper'>
        <FunctionsSection numbersArray={numbersArray}/>
      </div>
    </div>
  );
}

export default DescriptiveStatsPage;
