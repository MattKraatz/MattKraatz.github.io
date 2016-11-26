---
title: Building a bot with machine learning
---

Bots really started gaining steam this year, with Facebook and Kik (among others) opening up their massive messenging platforms to bot developers. It's an exciting time for chat interfaces, which are still in their infancy, and have the potential to overtake some more common application and web interfaces in popularity over time. Recently I attended a talk at [Nodevember 2016](http://nodevember.org/) here in Nashville from [Sarah Sexton](https://twitter.com/saelia?lang=en) about the Microsoft Bot Framework and was inspired to finally build a bot of my own.

What intrigues me immediately about the [Microsoft Bot Framework](https://dev.botframework.com/) is its integration with 8+ popular messenging services right out of the box, most notably Slack, Facebook Messenger and Kik. This enables you to write a bot one time in .NET or Node.js, host the application on Azure and distribute it across multiple platforms with ease. After finding the right documentation and tutorials, I was able to build and deploy my first simple bot in a matter of hours.

To get started, I decided to encapsulate the spirit of "Yes Men" into a simple bot. Basically, any time someone sought agreement in a conversation, my YesBot should chime in with a random statement of agreement like "I couldn't agree more!" or "I couldn't have said it better myself". Sometimes you just need someone to agree with you.

There are a few different ways to get this done. I could just have YesBot respond to its name being attached to a message, for instance: "I write good code, yesbot?". But that approach seemed a bit cheesy and would rarely come up in natural conversation. Another option is to look for certain phrases like "agreed?" or "what do you think" or "yes?", which works a little better but requires a static understanding of potential intent.

The approach I finally took was to use another one of Microsoft's tools, [LUIS](https://www.luis.ai/) (or Language Understanding Intelligent Service). LUIS is a machine-learning service that maps utterances (any message text) to pre-defined intents and entities. YesBot requires just two intents, RequestAgreement and None(no action), though I am experimenting with a third--Provoke--to give YesBot a little more character. LUIS works with simple training, where you provide sample utterances and label those against your specific intents. After you start pinging LUIS with real utterances, you are able to review and correct the decisions it makes, theoretically making the service more intelligent over time.

So far, I have YesBot deployed personally to Slack, GroupMe and Skype--with more services planned--and I'm asking my friends to try and break it. After YesBot has been published to a public directory I'll post an update. The source code is available [here on GitHub](https://github.com/mattkraatz/yesbot).

If you're looking to write your own bot with the Microsoft Bot Framework, I would highly suggest checking out these resources:
 * [Getting Started walkthrough](https://blogs.msdn.microsoft.com/sarahsays/2016/06/01/microsoft-bot-framework-part-1/)
 * [Another walkthrough incorporating LUIS](http://www.c-sharpcorner.com/article/an-interactive-bot-application-with-luis-using-microsoft-bot/)

Happy coding!
