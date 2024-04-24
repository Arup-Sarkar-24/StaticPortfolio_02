import React, { useState, useEffect } from 'react';

function TypingSpeedTest() {
  const [sentences] = useState([
    'The quick brown fox jumps over the lazy dog.',
    'The five boxing wizards jump quickly.',
    'Pack my box with five dozen liquor jugs.',
    'Mr. Jock, TV quiz PhD, bags few lynx.',
    'How quickly daft jumping zebras vex.',
    'Waltz, bad nymph, for quick jigs vex.',
    'Jazzed phantoms blew my crux vow.',
    'Five quacking zephyrs jolt my wax bed.',
    'Blowzy night-frumps vexed Jack Q.',
    'Big fjords vex quick waltz nymph.',
  ]);
  
  const [lineNo, setLineNo] = useState(0);
  const [randomSentences, setRandomSentences] = useState([]);
  const [correctTyping, setCorrectTyping] = useState(0);
  const [wrongTyping, setWrongTyping] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [inputSentence, setInputSentence] = useState('');
  const [mistakes, setMistakes] = useState([]);

  // Randomly select a set of sentences for the typing test
  useEffect(() => {
    const selectRandomSentences = () => {
      const shuffledSentences = [...sentences].sort(() => Math.random() - 0.5);
      setRandomSentences(shuffledSentences.slice(0, lineNo));
    };
    selectRandomSentences();
  }, [lineNo]);

  // Compare the user's input with the sentence to type
  const compareSentences = (sentence, inputSentence) => {
    const mistakesList = [];
    const inputWords = inputSentence.toLowerCase().replace(/[\p{Punctuation}]/gu, '').split(/\s+/);
    const sentenceWords = sentence.toLowerCase().replace(/[\p{Punctuation}]/gu, '').split(/\s+/);
    const maxLength = Math.max(inputWords.length, sentenceWords.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < inputWords.length && i < sentenceWords.length) {
        if (inputWords[i] !== sentenceWords[i]) {
          mistakesList.push(`replace ${sentenceWords[i]} with ${inputWords[i]}`);
        }
      } else if (i < inputWords.length) {
        mistakesList.push(`add ${inputWords[i]}`);
      } else if (i < sentenceWords.length) {
        mistakesList.push(`remove ${sentenceWords[i]}`);
      }
    }
    setMistakes(mistakesList);
  };

  const handleLineNoChange = (e) => {
    const lineNoInput = parseInt(e.target.value, 10);
    if (lineNoInput > 0) {
      setLineNo(lineNoInput);
    }
  };

  const handleInputChange = (e) => {
    setInputSentence(e.target.value);
  };

  const startTest = () => {
    setStartTime(Date.now());
    setCorrectTyping(0);
    setWrongTyping(0);
    setMistakes([]);
  };

  const submitInput = () => {
    const sentenceToType = randomSentences[0];
    if (inputSentence.trim().toLowerCase() === sentenceToType.trim().toLowerCase()) {
      setCorrectTyping((prevCorrect) => prevCorrect + 1);
      alert('Good job! Next one.');
    } else {
      setWrongTyping((prevWrong) => prevWrong + 1);
      compareSentences(sentenceToType, inputSentence);
      alert('Wrong. Check the console for mistakes.');
    }
    setElapsedTime((Date.now() - startTime) / 1000); // in seconds
  };

  return (
    <div className='flex flex-col bg-gradient-to-b from-gray-800 to-blue-800'>
      <h2>Welcome to the Typing Speed Test Game!</h2>
      <div>
        <p>You have to type the given sentences correctly:</p>
        <ul>
          {sentences.map((sentence, index) => (
            <li key={index}>Sentence {index + 1}: {sentence}</li>
          ))}
        </ul>
      </div>
      <div>
        <label htmlFor="lineNo">Enter how many sentences you want to type: </label>
        <input
          type="number"
          id="lineNo"
          min="1"
          onChange={handleLineNoChange}
        />
      </div>
      {lineNo > 0 && (
        <div>
          <h3>Start Typing Test</h3>
          <button onClick={startTest}>Start Test</button>
          {randomSentences.length > 0 && (
            <div>
              <p>Sentence to type: {randomSentences[0]}</p>
              <textarea
                value={inputSentence}
                onChange={handleInputChange}
              />
              <button onClick={submitInput}>Submit</button>
              <div>
                <p>Elapsed Time: {elapsedTime} seconds</p>
                <p>Total Correct Sentences Typed: {correctTyping}</p>
                <p>Total Wrong Sentences Typed: {wrongTyping}</p>
                {mistakes.length > 0 && (
                  <div>
                    <h4>Mistakes:</h4>
                    <ul>
                      {mistakes.map((mistake, index) => (
                        <li key={index}>{mistake}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TypingSpeedTest;
