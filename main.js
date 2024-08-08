const sdk = require("microsoft-cognitiveservices-speech-sdk");
const { transcript } = require("./transcript");
require("dotenv").config();

const subscriptionKey = process.env.SPEECH_KEY;
const serviceRegion = process.env.SPEECH_REGION;
const audioFile = "outputaudio.wav";

const speechConfig = sdk.SpeechConfig.fromSubscription(
  subscriptionKey,
  serviceRegion
);
const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);

let synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

synthesizer.speakSsmlAsync(
  transcript,
  function (result) {
    if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
      console.log("Synthesis finished.");
    } else {
      console.error(
        "Speech synthesis canceled, " +
          result.errorDetails +
          "\nDid you set the speech resource key and region values?"
      );
    }
    synthesizer.close();
    synthesizer = null;
  },
  function (err) {
    console.trace("err - " + err);
    synthesizer.close();
    synthesizer = null;
  }
);

console.log("Now synthesizing to: " + audioFile);
