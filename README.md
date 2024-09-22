# QuickLook


## Overview

The **Instant Word Meaning** Chrome extension provides users with the ability to get the meaning of any word without leaving the current webpage. Simply select a word and use a shortcut to instantly view its definition. This tool is perfect for enhancing productivity and improving the reading experience without interrupting your workflow.

## Key Features

* Get the definition of any word without leaving the webpage.
* Easy-to-use interface with a simple shortcut to show the meaning.
* Lightweight and fast—does not slow down browsing.
* Works across various websites and web applications.
* Provides audio pronunciation (when available)

## Demo




https://github.com/user-attachments/assets/b90e725e-a786-40fa-8653-7115a99a28b8




## Installation

1. **Download the Extension Files**
   Clone or download this repository to your local machine:

   ```bash
   git clone https://github.com/Sujansinhthakor/QuickLook.git
   ```

2. **Enable Developer Mode in Chrome**
   * Open Chrome and go to `chrome://extensions/`.
   * Enable "Developer mode" by toggling the switch in the top-right corner.

3. **Load the Extension**
   * Click "Load unpacked" and select the folder where you cloned the extension files.
   * The extension will be added to your Chrome browser.

4. **Start Using**
   * Navigate to any webpage, highlight a word, and press the **Right Control key twice** to view its meaning instantly.

## Usage Instructions

1. Double-click the **Right Control** key after selecting any word on a webpage to see its meaning.
2. The definition will appear in a popup without requiring you to leave the current page.
.
## Technical Details

- The extension uses vanilla JavaScript and doesn't require any external libraries.
- Definitions are fetched from the [Free Dictionary API](https://dictionaryapi.dev/).
- The extension listens for the right Control key presses and checks for double-presses within a 500ms window.
- It creates a custom tooltip to display the definition and pronunciation icon.

## Limitations

- Works only for single words (no spaces allowed in selection).
- Requires internet connection to fetch definitions.
- Audio pronunciation is not available for all words.

## Contributing

Contributions to improve the extension are welcome. Please feel free to submit pull requests or open issues to suggest enhancements or report bugs.
