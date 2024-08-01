// script.js
document.addEventListener('DOMContentLoaded', () => {
    let time = 10 * 60; // 10 minutes in seconds
    const timerElement = document.getElementById('time');
    const form = document.getElementById('exam-form');
    
    // Update the timer every second
    const updateTimer = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        if (time > 0) {
            time--;
        } else {
            alert('Time is up!');
            form.submit();
        }
    };
    
    setInterval(updateTimer, 1000);

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        alert('Exam submitted!');
        // You can add additional logic here to handle form data and display results
    });
});
