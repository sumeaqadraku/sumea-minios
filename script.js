// Define a list of colors to be used for each line
const colors = ['#FF6347'];

// This function adds a line of text to the terminal output with a random color
function addTerminalOutput(text) {
    // Select a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Create a new paragraph element
    const outputLine = document.createElement('p');
    outputLine.style.color = randomColor;  // Apply the random color

    // Insert the text into the new paragraph
    outputLine.innerHTML = text;
    
    // Append the new line to the terminal output
    document.querySelector('.terminal-output').appendChild(outputLine);
    
    // Scroll to the bottom of the terminal output
    document.querySelector('.terminal-body').scrollTop = document.querySelector('.terminal-body').scrollHeight;
    
}

// Function to process the command entered by the user
function processCommand(event) {
    if (event.key === 'Enter') {
        const command = event.target.value;
        addTerminalOutput(`C:\\Users\\Admin&gt; ${command}`); // Show the typed command

        if (command === "!help") {
            addTerminalOutput("!help: Available commands are as follows:<br>- !aboutme: Get to know who Sumea is.<br>- !portfolio: Check out cool projects on GitHub.<br>- !reachout: Reach out via contact form.<br>- !clear: Clear the screen.<br>- !stats: Display fun stats.<br>- !clock: Show the current time.<br>- !shutdown: Simulate shutdown.");
        } else if (command === "!aboutme") {
            addTerminalOutput("!aboutme: Sumea, the creator of this terminal-like environment, is a systems engineer at Wavelo, passionate about software enginneering, particularly in systems architecture. A lover of tech, constantly exploring new areas like NLP, and dedicated to sharing knowledge with the world.");
        } else if (command === "!portfolio") {
            addTerminalOutput("!portfolio: Check out these amazing projects by Sumea:<br> -NLP-based voice recognition tool(https://github.com/sumeaqadraku/Impact-of-NLP-in-Voice-Based-Accident-Reporting).<br>-employee-management-app(https://github.com/sumeaqadraku/employee-management-app)<br>-A Python-based decoder (https://github.com/sumeaqadraku/caesar_cipher_decoder) <br> -Cognitive Decline Patters Analyzer (https://github.com/sumeaqadraku/Analyzing-Cognitive-Decline-Patterns-in-Alzheimer-s-Patients-Using-MRI-Data)");
        } else if (command === "!reachout") {
            addTerminalOutput("!reachout: Want to get in touch? Type 'open contact' to fill out the form and send a message!");
        } else if (command === "!clear") {
            clearTerminalOutput();
        } else if (command === "!stats") {
            addTerminalOutput("Sumea's Stats: Loading...");
            addTerminalOutput("--------------------------------------");
            addTerminalOutput("Projects Developed: 20+");
            addTerminalOutput("Lines of Code Written: 15,000+");
            addTerminalOutput("Hours Spent Learning: 800+");
            addTerminalOutput("Favorite Language: Python");
            addTerminalOutput("--------------------------------------");
            addTerminalOutput("Top GitHub Repos:");
            addTerminalOutput("   - [AI Chatbot] AI-powered chatbot project using NLP");
            addTerminalOutput("   - [NLP Voice Recognition] Voice assistant powered by NLP");
            addTerminalOutput("   - [Web Scraper] Python-based web scraping tool");
            addTerminalOutput("   - [Genetic Algorithms] Implementing genetic algorithms for optimization");
            addTerminalOutput("   - [Neural Networks] Building neural networks with TensorFlow");
            addTerminalOutput("--------------------------------------");
            addTerminalOutput("Achievements:");
            addTerminalOutput("   - Coding Streak: 80+ days");
            addTerminalOutput("   - First Full Stack App: Completed in 2023");
            addTerminalOutput("   - GitHub Contributions: 600+");
            addTerminalOutput("   - Published Research Paper on AI: 2024");
            addTerminalOutput("   - Speaker at Tech Conference: 2023");
            addTerminalOutput("   - Contributed to Open Source: 10+ Projects");
            addTerminalOutput("--------------------------------------");
            addTerminalOutput("Current Project Status: AI Chatbot (in progress), Genetic Algorithms (in progress)");
            addTerminalOutput("--------------------------------------");
            addTerminalOutput("Console Color Theme: Green with custom font");
            addTerminalOutput("");
            addTerminalOutput("");
            addTerminalOutput("");
            addTerminalOutput("--------------------------------------");
            addTerminalOutput("Passions:");
            addTerminalOutput("   Genetics: Research in gene editing and CRISPR technology");
            addTerminalOutput("   Psychology: Studying human cognition and behavioral science");
            addTerminalOutput("   Philosophy: Exploring the nature of consciousness and free will");
            addTerminalOutput("   AI & Machine Learning: Continuously exploring new AI advancements");
            addTerminalOutput("   Environmental Sustainability: Passionate about green technology and sustainable living");
            addTerminalOutput("   Continuous Learning: Always exploring new domains like NLP, quantum computing, and robotics");
            addTerminalOutput("   Public Speaking: Sharing knowledge at meetups and conferences");
            addTerminalOutput("--------------------------------------");
            addTerminalOutput("Fun Fact: Learned to code at age 12 and never stopped since!");
        }
        
        } else if (command === "!clock") {
            addTerminalOutput("!clock: The current time is: " + new Date().toLocaleTimeString());
        } else if (command === "!shutdown") {
            addTerminalOutput("!shutdown: Shutting down terminal... System going offline... Goodbye! 👋");
            setTimeout(() => {
                location.reload(); // Simulate reload (shutdown)
            }, 2000);
        } else {
            addTerminalOutput(`Command '${command}' not found. Type !help for a list of commands.`);
        }

        // Clear the input field after processing the command
        event.target.value = "";
        
        // Update the input field with the prompt
        event.target.placeholder = "C:\\Users\\Admin&gt;";
    }


// Clear the terminal output
function clearTerminalOutput() {
    const terminalOutput = document.querySelector('.terminal-output');
    terminalOutput.innerHTML = '';
}

