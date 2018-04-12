---
title: Services, Content Providers and MVP pattern
tags:
- android
- app
- engineering
- mobile
- mvp
- sdk
- services
- software
---
This week I got myself wondering when would be the **best practical cases** to use Services, Content Providers, and Model-View-Presenter pattern.

Although the SDK Documentation provides a recommendation on when to use each of these, I thought the content to be a little spread out. If you implement the MVP pattern, how should you connect your View to your Service, for instance?

I’m still experimenting and researching some ideas, but for the sake of hacking, I got some sense of how to put them together. Yes, I know it is basic stuff, but one should never be afraid of reviewing the basics, ¯\_(ツ)_/¯

## Start off by getting things right
My first step was to search what other developers have been sharing about [Service and IntentService](https://stackoverflow.com/questions/15524280/service-vs-intentservice). The name _Service_ is, at least for me, misleading as it always made me think of a content provider that execute tasks in the background. I was getting it wrong, and the article above helped me understand what a `Service` really is (besides [official documentation](https://developer.android.com/training/run-background-service/create-service.html)).

So, if a Service is not a provider of content, but a more generic tool in our arsenal, understanding the usage of [Content Providers](https://stackoverflow.com/questions/3350408/exact-difference-between-content-provider-and-sqlite-database) become much more straightforward.

Still, in the Services Realm, it is good to have a refresher of the difference between **processes** and **threads** are. Simply put, according to [documentation](https://developer.android.com/guide/components/processes-and-threads.html), a _Process_ is the group of threads the application run onto, but there is a caveat in which one or more of the app’s components could run in different processes.

_Threads_ that are not the main/UI thread are called _worker or background threads_. Nothing complicated with that, they are processes that should not execute UI code and run in parallel with the UI thread.

## Now let’s start the quest
In a nutshell and if we ignore for now the [JobScheduler usage recommendation](https://developer.android.com/training/best-background.html) starting from 5.0,

1. **If your task is simple, use simple tools**: Don’t kill a fly with a bazooka. For merely pulling data from an API, use libraries like [Retrofit](http://square.github.io/retrofit/) that execute the remote job for you smoothly.
2. **Presenter should use an [Interactor](https://github.com/MindorksOpenSource/android-mvp-interactor-architecture)**, meaning it delegates the data pulling job to another class and gets its results to render the view.
3. **Interactor will be the interface to all the remote communication** and provides the Presenter with the data it retrieves either from Content Providers, SQL Databases or APIs.
4. **Interactor can give Presenter with more than just results**. It can deliver back to the presenter messages of what is the stage of the request and partially feeding it until the request is finishing. It allows the Presenter to make the View show meaningful information regarding the step of the request to the user, and yet decouple the chain and make the code easily testable.

Am I wrong? Maybe. Is it the best approach? Perhaps not. Regardless, it has helped me in this week to organize the pieces that make an application and solve some misunderstandings I always had. As soon as I get an update on this, I come back 😉
