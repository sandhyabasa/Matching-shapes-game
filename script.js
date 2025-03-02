// Step 1: Create Drag and Drop Functionality
function setupDragAndDrop() {
    let shapes = document.querySelectorAll('.draggable');
    let dropZones = document.querySelectorAll('.drop-zone');
    
    shapes.forEach(shape => {
        shape.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('shapeId', e.target.id);
        });
    });
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            let shapeId = e.dataTransfer.getData('shapeId');
            let draggedShape = document.getElementById(shapeId);
            
            if (zone.dataset.shape === shapeId) {
                zone.appendChild(draggedShape);
                playSuccessSound();
                showSuccessAnimation();
            } else {
                alert('Try again!');
            }
        });
    });
}

// Step 2: Success Feedback
function playSuccessSound() {
    let audio = new Audio('success.mp3');
    audio.play();
}

function showSuccessAnimation() {
    alert('Great job! You matched the shape correctly!');
}

// Initialize Game
setupDragAndDrop();
