const transcript = `
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
    <voice name="en-US-AndrewMultilingualNeural">
        <prosody rate="medium" pitch="medium">
            <p>
                <s>Hey there, Code Poets!</s>
                <break time="500ms"/>
                <s>Welcome back to the channel where we turn lines of code into pure magic.</s>
                <break time="500ms"/>
                <s>I’m Sidi and today we’re diving into something that's super cool and cutting-edge – Generative AI using Azure Cognitive Services.</s>
                <break time="500ms"/>
                <s>And here’s the kicker! what you’re hearing right now is the product of the very script we’re going to break down today.</s>
                <break time="500ms"/>
                <s>That’s right, this video’s audio was generated using the same text-to-speech code you’re about to see!</s>
            </p>
            
            <p>
                <s>Generative AI has been taking the tech world by storm.</s>
                <break time="500ms"/>
                <s>From creating realistic images to writing poetry that rivals Shakespeare — okay maybe not quite Shakespeare — but still it’s impressive!</s>
                <break time="500ms"/>
                <s>Today, I’m going to show you how to use Azure Cognitive Services to generate speech from text with just a few lines of code.</s>
                <break time="500ms"/>
                <s>Let’s get into it!</s>
            </p>
            
            <p>
                <s>First, let’s break down the code.</s>
                <break time="500ms"/>
                <s>What we have here is a simple Node J S script that integrates with Azure’s Cognitive Services.</s>
                <break time="500ms"/>
                <s>And as I mentioned earlier, the voice you’re hearing was generated using this exact script!</s>
            </p>
            
            <p>
                <s>We start by importing the necessary modules.</s>
                <break time="500ms"/>
                <s>We’re using the microsoft cognitive services speech sdk and dot env to manage our environment variables.</s>
                <break time="500ms"/>
                <s>This setup is pretty standard when you’re working with Azure services.</s>
            </p>
            
            <p>
                <s>Next, we load our subscription key and service region from environment variables.</s>
                <break time="500ms"/>
                <s>This is crucial for authenticating our app with Azure.</s>
                <break time="500ms"/>
                <s>Remember to store your keys safely — never hardcode them into your scripts!</s>
            </p>
            
            <p>
                <s>Here, we set up the speech Config using Speech Config from Subscription.</s>
                <break time="500ms"/>
                <s>This tells Azure which service we’re using and how to authenticate it.</s>
                <break time="500ms"/>
                <s>I’ve selected the voice en-US-AndrewMultilingualNeural, but you can choose from a variety of voices Azure offers.</s>
            </p>
            
            <p>
                <s>We then configure the output audio file with Audio Config dot from Audio File Output.</s>
                <break time="500ms"/>
                <s>This is where our generated speech will be saved.</s>
                <break time="500ms"/>
                <s>The Speech Synthesizer object ties it all together <break time="400ms"/> taking our speech and converting it into an audio file.</s>
            </p>
            
            <p>
                <s>Here’s the fun part — the actual text-to-speech conversion.</s>
                <break time="500ms"/>
                <s>The transcript variable holds the text we want to convert.</s>
                <break time="500ms"/>
                <s>We call speak Ssml Async on our synthesizer object, which sends the text to Azure <break time="400ms"/> and the resulting speech is saved to output audio dot wav.</s>
                <break time="500ms"/>
                <s>If the synthesis is successful<break time="200ms"/> we log synthesis finished — otherwise, we get an error message.</s>
            </p>
            
            <p>
                <s>And that’s it!</s>
                <break time="500ms"/>
                <s>With just a few lines of code, you’ve created an audio file from text using Azure Cognitive Services.</s>
                <break time="500ms"/>
                <s>How awesome is that?</s>
                <break time="500ms"/>
                <s>Imagine integrating this into your apps, creating interactive voice assistants<break time="200ms"/> or even narrating your own YouTube videos automatically — just like I did for this video!</s>
            </p>
            
            <p>
                <s>I’ve uploaded the full code to GitHub so you can download it and start experimenting.</s>
                <break time="500ms"/>
                <s>The link is in the description below.</s>
                <break time="500ms"/>
                <s>Go ahead, fork the repo, and make something amazing!</s>
            </p>
            
            <p>
                <s>If you enjoyed this video, make sure to smash that like button, subscribe to the channel, and hit the notification bell so you don’t miss any of our future coding adventures.</s>
                <break time="500ms"/>
                <s>As always, keep coding, keep creating, and I’ll see you in the next one.</s>
            </p>
            
            <p>
                <s>Happy coding, Code Poets!</s>
            </p>
        </prosody> 
    </voice>
</speak>
`;

module.exports = { transcript };
