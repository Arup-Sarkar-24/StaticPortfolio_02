import React, { useEffect, useRef, useState } from 'react';
import interact from 'interactjs';

function TextBox() {
    const boxRef = useRef(null);
    const [cursorStyle, setCursorStyle] = useState('move'); // Default cursor is set to "move"

    const inlineStyles = {
        position: 'absolute',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        padding: '10px',
        resize: 'both',
        overflow: 'auto',
        cursor: cursorStyle, // Set the cursor style dynamically based on the state
        width: '800px',
        height: '200px',
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

    return (
        <div className = 'top-[35%] left-10px'>
        <div
            ref={boxRef}
            style={inlineStyles}
            id="draggableBox"
            onMouseMove={handleMouseMove} // Set the onMouseMove event to handle cursor changes
        >
            <p className="text-secondary">This is movable and resizable Typing Box , you can move, resize and type here.</p>
        </div>
        </div>
    );
}

export default TextBox;
