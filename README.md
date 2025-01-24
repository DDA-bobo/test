# Chinese Name Generator

A smart web application that helps foreigners choose meaningful Chinese names with cultural interpretations.

## Project Overview
This application provides personalized Chinese name recommendations based on English names. Each suggested name comes with detailed cultural interpretations and meanings.

## Features
1. **Intelligent Name Generation**
   - Input: English name (supports first name or full name)
   - Output: 3 unique Chinese name suggestions
   - Each name ensures:
     * Phonetic harmony with English pronunciation
     * Compliance with Chinese naming conventions
     * Beautiful meaning and proper combination
     * Cultural appropriateness

2. **Cultural Interpretation**
   Each recommended name includes:
   - Character explanation
   - Overall meaning
   - Cultural elements
   - Personality traits
   - English interpretation

3. **User Experience**
   - Clean and intuitive interface
   - Simple 3-step process
   - Clear result display
   - Name favorites and export function

## Technical Architecture
- Frontend: HTML5, CSS3, JavaScript
- Name Generation System:
  * Chinese character database
  * Phonetic translation rules
  * Cultural appropriateness checking
  * Meaning combination algorithm

## Project Structure
```
demo2/
├── index.html          # Main webpage
├── css/               
│   └── style.css       # Styling
├── js/
│   ├── main.js         # Core application logic
│   └── database.js     # Character database and rules
└── README.md          # Project documentation
```

## Setup and Usage
1. Open `index.html` in a web browser
2. Enter an English name
3. Get personalized Chinese name recommendations

## Example
Input: "Michael"
Output:
1. 米凯乐 (Mi Kai Le)
   - Meaning: Joy and triumph
   - Cultural significance: Represents positivity and vitality

[More examples in the application]

## Deployment
### Online Access
Access the application online at: https://pm-rookie2025.github.io/test/

### Local Development
1. Clone the repository:
```bash
git clone https://github.com/pm-rookie2025/test.git
cd test
```
2. Run the local server:
```bash
python3 server.py
```
3. Access:
Open a browser and access http://localhost:8000

## Technology Stack
- Frontend: HTML5, CSS3, JavaScript
- Backend: Python (Flask)
- Deployment: GitHub Pages (static resources), Vercel (API)

## Project Structure
```
.
├── README.md           # Project documentation
├── index.html         # Main webpage
├── css/              # Style files
│   └── style.css     # Main style file
├── js/               # JavaScript files
│   ├── config.js     # Configuration file
│   ├── api.js        # API calls
│   └── main.js       # Main logic
└── server.py         # Backend server
```

## Contribution
Welcome to submit Issues and Pull Requests!

## License
MIT License
