
        // Initialize the typing animation
        const typingAnimationElement = document.getElementById('typing-animation');

        // Create an array of typing text
        const typingTexts = [
            
            'Web Developer  ',
            'Full Stack Developer  '
        ];
        function playTypingAnimation(text) {
            for (let i = 0; i < text.length; i++) {
                setTimeout(() => {
                    typingAnimationElement.textContent += text[i];
                }, i * 200);
            }
            setTimeout(() => {
                typingAnimationElement.textContent = '';
                playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
            }, text.length * 200);
        }
        playTypingAnimation(typingTexts[0]);
    