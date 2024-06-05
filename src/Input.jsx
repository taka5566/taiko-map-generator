import React, { useState } from 'react';
import { generateMap } from './Generator.js'; 

 const Input = () => {
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState('');
  const [density, setDensity] = useState(0);
  const [length, setLength] = useState(10);
  const [hsValue, setHSValue] = useState('#SCROLL 1');
  const [bpmValue, setBPMValue] = useState('');
  const [songName, setSongName] = useState('');


    const [generatedMap, setGeneratedMap] = useState('');
    const handleClick = () => {

      if (selectedDifficulties.length === 0 || selectedPattern === '') {
      window.alert('Please select difficulties and pattern');
      return;
          if (songName === '') {
      window.alert('Please insert the song name');
      return;
    }
    if (bpmValue === '') {
      window.alert('Please insert the bpm value');
      return;
    }
    if (isNaN(bpmValue)) {
      window.alert('BPM must be a number');
      return;
    }
  }
      
      const data = {
      selectedDifficulties: selectedDifficulties,
      selectedPattern: selectedPattern,
      density: density,
      length: length
    };


    const map = generateMap(data);
    setGeneratedMap(map);

  const template =
`TITLE:${songName}
SUBTITLE:
LEVEL:10
BPM:${bpmValue}
WAVE:
OFFSET:-0.624
DEMOSTART:100.744
COURSE:Oni
SONGVOL:70
          
#START
${hsValue}
#MEASURE 4/4
${map}
#END`
;
  // Generate a text file
  const textFile = new Blob([template], { type: 'text/plain' });

  // Create a download link
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(textFile);
  downloadLink.download = 'uynoTATSUJIN.tja'; // Specify the desired file name with the .tja extension
  downloadLink.click();


  };

  const handleDifficultyChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDifficulties([...selectedDifficulties, value]);
    } else {
      setSelectedDifficulties(selectedDifficulties.filter((difficulty) => difficulty !== value));
    }
  };

  const handlePatternChange = (event) => {
    setSelectedPattern(event.target.value);
  };

  const handleDensityChange = (event) => {
    setDensity(parseFloat(event.target.value));
  };

  const handleLengthChange = (event) => {
    setLength(parseInt(event.target.value));
  };

  return (
    <div className='flex flex-col items-center justify-start
                    min-h-screen overflow-y-auto p-[10vh] space-y-8
                    animate-fade-in-and-slide-down'>
<div className="border-2 p-10 rounded-lg bg-stone-800/45 relative">
  <div className="absolute top-0 left-0 w-8 h-8 bg-center bg-no-repeat bg-cover redDon redDonTopLeft"></div>
  <div className="absolute top-0 right-0 w-8 h-8 bg-center bg-no-repeat bg-cover redDon redDonTopRight"></div>
  <div className="absolute bottom-0 left-0 w-8 h-8 bg-center bg-no-repeat bg-cover redDon redDonBotLeft" ></div>
  <div className="absolute bottom-0 right-0 w-8 h-8 bg-center bg-no-repeat bg-cover redDon redDonBotRight" ></div>
  <div className="space-y-8">      
  <p className='text-3xl'>Difficulties</p>
      <form className=''>
        <input
          type="checkbox"
          id="tuplet"
          value="tuplet"
          checked={selectedDifficulties.includes('tuplet')}
          onChange={handleDifficultyChange}
          className='m-3 checked:bg-black checked:border-transparent checked:bg-black'          
        />
        <label htmlFor="tuplet"className="">Tuplet</label>
        <br />

        <input
          type="checkbox"
          id="quintuplet"
          value="quintuplet"
          checked={selectedDifficulties.includes('quintuplet')}
          onChange={handleDifficultyChange}
          className='m-3'          

        />
        <label htmlFor="quintuplet">Quintuplet</label>
        <br />

        <input
          type="checkbox"
          id="duplet"
          value="duplet"
          checked={selectedDifficulties.includes('duplet')}
          onChange={handleDifficultyChange}
          className='m-3'          

        />
        <label htmlFor="duplet">Duplet</label>
        <br />

        <input
          type="checkbox"
          id="quadruplet"
          value="quadruplet"
          checked={selectedDifficulties.includes('quadruplet')}
          onChange={handleDifficultyChange}
          className='m-3'          

        />
        <label htmlFor="quadruplet">Quadruplet</label>
        <br />
      </form>
      <p className='text-3xl'>Patterns</p>
      <form>
        <input
          type="radio"
          id="basics"
          value="basics"
          checked={selectedPattern === 'basics'}
          onChange={handlePatternChange}
          className='m-3'          
        />
        <label htmlFor="basics">Basics</label>
        <br />

        <input
          type="radio"
          id="advanced"
          value="advanced"
          checked={selectedPattern === 'advanced'}
          onChange={handlePatternChange}
          className='m-3'          

        />
        <label htmlFor="advanced">Advanced</label>
        <br />

        <input
          type="radio"
          id="random"
          value="random"
          checked={selectedPattern === 'random'}
          onChange={handlePatternChange}
          className='m-3'          

        />
        <label htmlFor="random">Random</label>
        <br />
      </form>
    </div>
  </div>
    <div className=" border-2 p-10 rounded-lg bg-stone-800/45 relative space-y-4">
      <div className="absolute top-0 left-0 w-8 h-8 bg-center bg-no-repeat bg-cover blueDon blueDonTopLeft"></div>
      <div className="absolute top-0 right-0 w-8 h-8 bg-center bg-no-repeat bg-cover blueDon blueDonTopRight"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-center bg-no-repeat bg-cover blueDon blueDonBotLeft" ></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-center bg-no-repeat bg-cover blueDon blueDonBotRight" ></div>
    <div className="spcae-y-8">
      <form className=''>
        <label className='text-3xl p-5' htmlFor="density">Density</label>
        <input
          type="range"
          id="density"
          name="density"
          min="0"
          max="0.9"
          step="0.1"
          value={density}
          onChange={handleDensityChange}
        />
      </form>

      <form className='m-3'>
        <label className='text-3xl p-5' htmlFor="length">Length</label>
        <input
          type="range"
          id="length"
          name="length"
          min="10"
          max="100"
          value={length}
          onChange={handleLengthChange}
        />
      </form>
    </div>
  </div>
      <br/>
      <div>
        <label htmlFor="songNameInput">Song Name:</label>
        <input
          type="text"
          id="songNameInput"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="hsInput">HS:</label>
        <input
          type="text"
          id="hsInput"
          value={hsValue}
          onChange={(e) => setHSValue(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="bpmInput">BPM:</label>
        <input
          type="text"
          id="bpmInput"
          value={bpmValue}
          onChange={(e) => setBPMValue(e.target.value)}
        />
      </div>
      <div className="">
       <button className='text-3xl p-10 transition ease-in-out delay-150
       hover:-translate-y-1 hover:scale-110 duration-300 genImg whitespace-nowrap' 
        onClick={handleClick}>Generate Now!</button>
       {/* <p dangerouslySetInnerHTML={{ __html: generatedMap }}></p> */}
     </div>
    </div>
  );
};

export default Input;