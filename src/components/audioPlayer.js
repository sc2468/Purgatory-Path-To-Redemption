const playSound = async () => {
    const soundObject = new Audio.Sound();
    try {
        await soundObject.loadAsync(require('./src/assets/audio/wind-howl.mp3'));
        await soundObject.playAsync();
        // Your sound is playing!

        // Don't forget to unload the sound from memory
        // when you are done using the Sound object
        // await soundObject.unloadAsync();
    } catch (error) {
        // An error occurred!
        console.log(error);
    }
}; 

export default playSound;
