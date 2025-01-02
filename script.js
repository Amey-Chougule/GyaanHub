const dynamicText = document.querySelector(".text-3 span");
const words = ["Question Papers📝", "Notes📚", "Projects💻"]; // Adjust your words as needed

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    
    // Determine the text to display with the first letter fixed
    const prefix = currentWord.substring(0, 1); // First letter fixed
    const currentChar = currentWord.substring(1, charIndex + 1); // Remaining text
    
    // Concatenate the fixed first letter with the typing effect
    const displayText = prefix + currentChar;
    
    dynamicText.textContent = displayText;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length - 1) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();
