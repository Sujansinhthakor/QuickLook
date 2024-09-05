let lastCtrlPress = 0;
const DOUBLE_PRESS_DELAY = 500; 

document.addEventListener('keydown', function(event) {
    if (event.code === 'ControlRight') {
        const currentTime = new Date().getTime();
        if (currentTime - lastCtrlPress <= DOUBLE_PRESS_DELAY) {
            const selectedText = window.getSelection().toString().trim();
            if (selectedText) {
                // Check if the selected text is a single word (no spaces)
                if (!/\s/.test(selectedText)) {
                    console.log("Selected word:", selectedText);
                    search(selectedText);
                } else {
                    alert("Please select only a single word");
                }
            } else {
                alert("No text selected");
            }
        }
        lastCtrlPress = currentTime;
    }
});

function search(word) {
    // base url
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    // GET request to the API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // first meaning 
            const firstDefinition = data[0].meanings[0].definitions[0].definition;
            
            // Display the first definition in a box above the selected text
            console.log("Definition:", firstDefinition);
            showDefinition(firstDefinition);

        })
        .catch(error => {
            console.error("Error:", error.message);
        });
}
let tooltipTimeout;
function showDefinition(definition) {
    // Remove any existing tooltip
    removeTooltip();

    const tooltip = document.createElement('div');
    tooltip.id = 'definitionTooltip';
    tooltip.textContent = definition;
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = '#2f2f2f';
    tooltip.style.color = '#ffffff';
    tooltip.style.border = '1px solid #ccc';
    tooltip.style.padding = '8px';
    tooltip.style.borderRadius = '4px';
    tooltip.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    tooltip.style.zIndex = '1000';
    tooltip.style.maxWidth = '250px';
    tooltip.style.wordWrap = 'break-word';

    document.body.appendChild(tooltip);

    // Get the position of the selected text
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Position
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`; // above text
    }

     // remove tooltip after mousemove
     document.addEventListener('click', removeTooltip);

     // Clear the timeout if there was one before
     clearTimeout(tooltipTimeout);
 
     // remove after 5 seconds
     tooltipTimeout = setTimeout(removeTooltip, 5000);
}
function removeTooltip() {
  const existingTooltip = document.getElementById('definitionTooltip');
  if (existingTooltip) {
      existingTooltip.remove();
  }
  // remove event listener - mousemove
  document.removeEventListener('click', removeTooltip);
}
onclick