---
templateKey: blog-post
title: Testing your interaction model before adding all your handlers
date: 2019-05-10T12:00:10.000Z
description: How to test your Interaction Model before you add all your handlers code.
tags:
  - Alexa
  - Test
  - Interaction Model
  - IntentReflectorHandler
---



![flavor wheel](/img/alexa_interaction_model.png)

After designing your Interaction model, it is always good to test whether the designed utterances are falling into the expected IntentRequest or not.

It is important that your interaction model is designed well in order provide better experience to users. If not, then once after you add the code for all the IntentHandlers and try to test it out, it will be difficult to understand what is giong on in the skill as you don't see anything like the screen based application behaviour.


## How to do that

So, before you write all your code.

Just write an IntentReflector. (The following example is meant for nodejs code. You can easily replicate the same to other languages as well.)

```const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === "IntentRequest";
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = "Triggered Intent is ${intentName}";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt("Add repromt, So that you can keep pushing more utterances")
            .getResponse();
    }
};
```
By, adding the above IntentReflector, you can always test out all the utterances that you have wrote.
In Alexa Interaction Model design, it is very important that you design the utterances well. Otherwise, user will experience more FallbackIntent responses or unexpected responses.

Please let us know your feedback @ this email address. Our motto is 'keep sharing something useful that we learn to the community!'