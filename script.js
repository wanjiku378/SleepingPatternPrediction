
async function predictSleepDuration() {
    try {
        // Get the input values for bedtime and wake-up time
        const bedtimeInput = document.getElementById('bedtime').value;
        const wakeupInput = document.getElementById('wakeup').value;

        console.log('Bedtime input:', bedtimeInput);
        console.log('Wake-up input:', wakeupInput);

        // Convert input times to minutes since midnight
        let bedtimeMinutes = convertTimeToMinutes(bedtimeInput);
        let wakeupMinutes = convertTimeToMinutes(wakeupInput);

        console.log('Bedtime minutes:', bedtimeMinutes);
        console.log('Wake-up minutes:', wakeupMinutes);

        // Adjust wake-up time if earlier than bedtime
        if (wakeupMinutes < bedtimeMinutes) {
            wakeupMinutes += 1440; // Add 24 hours (1440 minutes)
        }

        // Calculate sleep duration in minutes
        let sleepDurationMinutes = wakeupMinutes - bedtimeMinutes;
        console.log('Sleep duration (minutes):', sleepDurationMinutes);

        // Convert sleep duration from minutes to hours and minutes
        const hours = Math.floor(sleepDurationMinutes / 60);
        const minutes = sleepDurationMinutes % 60;

        // Display the result
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Predicted sleep duration: ${hours} hours and ${minutes} minutes.`;
    } catch (error) {
        console.error('Prediction error:', error);
        alert('An error occurred during prediction. Please try again.');
    }
}

// Helper function to convert time in HH:MM format to minutes since midnight
function convertTimeToMinutes(time) {
    const [hoursStr, minutesStr] = time.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    return hours * 60 + minutes;
}
