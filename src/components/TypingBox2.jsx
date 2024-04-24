import React, { useEffect, useRef, useState } from 'react';
import interact from 'interactjs';


function TypingBox2() {

    /*Sentence data upload*/
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



    const boxRef = useRef(null);
    const [cursorStyle, setCursorStyle] = useState('move'); // Default cursor is set to "move"

    const inlineStyles = {
        position: 'absolute',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        top: '60%',
        right: '20px',
        padding: '10px',
        resize: 'both',
        backgroundColor:'blue',
        overflow: 'auto',
        cursor: cursorStyle, // Set the cursor style dynamically based on the state
        width: '800px',
        height: '400px',
    };

    useEffect(() => {
        const draggableBox = boxRef.current;

        if (draggableBox) {
            // Set up dragging functionality
            dragElement(draggableBox);

            // Set up resizable functionality using interact.js
            interact(draggableBox).resizable({
                edges: { top: true, left: true, right: true, bottom: true },
                listeners: {
                    move(event) {
                        const target = event.target;

                        // Update the element's size
                        target.style.width = `${event.rect.width}px`;
                        target.style.height = `${event.rect.height}px`;

                        // If the element is moved during resize, update its position
                        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.deltaRect.left;
                        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.deltaRect.top;

                        target.style.transform = `translate(${x}px, ${y}px)`;

                        target.setAttribute('data-x', x);
                        target.setAttribute('data-y', y);
                    },
                },
            });
        }

        // Clean up event listeners when the component unmounts
        return () => {
            if (draggableBox) {
                draggableBox.onmousedown = null;
                document.onmouseup = null;
                document.onmousemove = null;
            }
        };
    }, []);

    // Function to make the element draggable
    function dragElement(elmnt) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = `${elmnt.offsetTop - pos2}px`;
            elmnt.style.left = `${elmnt.offsetLeft - pos1}px`;
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    // Function to handle the cursor style change based on the mouse position
    // Function to handle the cursor style change based on the mouse position
    const handleMouseMove = (e) => {
        const box = boxRef.current;
        const rect = box.getBoundingClientRect();

        const edgeSize = 10; // Adjust this value as needed for more/less sensitivity
        let cursor = 'default';

        // Check for resize cursors near the edges
        if (e.clientX > rect.left && e.clientX < rect.right) {
            if (Math.abs(e.clientY - rect.top) < edgeSize) {
                cursor = 'n-resize';
            } else if (Math.abs(e.clientY - rect.bottom) < edgeSize) {
                cursor = 's-resize';
            }
        }

        if (e.clientY > rect.top && e.clientY < rect.bottom) {
            if (Math.abs(e.clientX - rect.left) < edgeSize) {
                cursor = 'w-resize';
            } else if (Math.abs(e.clientX - rect.right) < edgeSize) {
                cursor = 'e-resize';
            }
        }

        // Check for diagonal resize cursors near corners
        if (Math.abs(e.clientX - rect.left) < edgeSize && Math.abs(e.clientY - rect.top) < edgeSize) {
            cursor = 'nw-resize';
        } else if (Math.abs(e.clientX - rect.right) < edgeSize && Math.abs(e.clientY - rect.top) < edgeSize) {
            cursor = 'ne-resize';
        } else if (Math.abs(e.clientX - rect.left) < edgeSize && Math.abs(e.clientY - rect.bottom) < edgeSize) {
            cursor = 'sw-resize';
        } else if (Math.abs(e.clientX - rect.right) < edgeSize && Math.abs(e.clientY - rect.bottom) < edgeSize) {
            cursor = 'se-resize';
        }

        // Set the cursor to "move" if not near edges or corners
        if (cursor === 'default') {
            cursor = 'move';
        }

        // Update the cursor style in the state
        setCursorStyle(cursor);
    };

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
        <div className='flex flex-col'>
            <div
                ref={boxRef}
                style={inlineStyles}
                id="draggableBox"
                onMouseMove={handleMouseMove} // Set the onMouseMove event to handle cursor changes
            >
                <p className="text-black">This is movable and resizable Typing Box , you can move, resize and type here.</p>
                <h2>Enjoy the Typing Speed Test Game!</h2>
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
        </div>
    );
}

export default TypingBox2;
