---
title: Mobile Developement with Xamarin
---

For my final capstone project at Nashville Software School, I wanted to dive deep into native mobile development. Native apps still provide a better mobile experience than the mobile-optimized web, and with the right tools can be developed rather quickly. Intrigued by it's promise to deliver native iOS and Android apps from shared C# code, the tool I chose for this comprehensive capstone was [Xamarin](https://www.xamarin.com/).

With Xamarin, I wrote 100% of my application's business logic in a Portable Class Library, one time. Using Xamarin Forms, I wroted 100% of my application's UI in that PCL as well, which then compiles into native UI elements for each platform. Additionally, Xamarin's DependencyService allows you to access native features (like the camera, or device storage) from the PCL using dependency injection. Leveraging these concepts, my final product was an iOS and Android native app called **Green Apron**, that looks uniquely native on each platform, and only has one code base to build on or debug.

<div style="text-align:center">
  <img src="/img/green-apron.png" alt="Green Apron logo">
</div>

I'm very proud of Green Apron, but it was definitely a process getting to the final product. Choosing my development environment, for instance, exhausted a couple days of trial and error, until finally settling on Visual Studio on an unlicensed copy of Windows 10 in Bootcamp on my Macbook Pro (it's a long story). I also spent some time with Xamarin Studio on OSX, using it's XAML Previewer to visualize view components. Otherwise, Visual Studio was the best IDE for this project as I was simultaneously developing Green Apron's back-end with ASP.NET Core WebAPI.

Learning Xamarin's take on mobile development was challenging, but very rewarding and productive. Depending on the situation, I built views both programatically with C#, or via template with XAML (Xamarin's XML-like markup language) and data binding. Navigation was accomplished through a Master-Detail page, pushing and popping pages and modals to the Navigation stack. I wrote an API to manage Green Apron-specific data, and also linked the client with Spoonacular's API for recipe and ingredient data. Writing HTTP requests in C# was a new one for me, but just another obstacle that I overcame and added to my toolbelt for the future.

It's clear that Xamarin, recently acquired by Microsoft, has a strong community of support. It really feels like an up-and-coming star in mobile development, and I look forward to deepening my knowledge of the platform as I continue to develop this project and others.

You can find out more about Green Apron and check out the code [here on GitHub](https://github.com/MattKraatz/greenapron).
