const typedTextSpan = document.querySelector(".type-text")

const textArray = ["Fullstack Developer", "Backend Developer", "Frontend Developer", "Video Editor"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1); 
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else{
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
        }
}
type()

document.addEventListener("DOMContentLoader", function() {
    setTimeout(type, newTextDelay + 250);
});
