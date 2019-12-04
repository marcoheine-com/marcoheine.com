---
title: Website Performance Optimization
date: 2016-03-31
path: /website-performance-optimization
---

Nowadays Websites need to load fast to compete and meet user expectations. If I google something, open up a suggested result and this website doesn't load in a few seconds I'm immediatly closing it and keep looking for another result. That sounds harsh and arrogant but that's what I got used to over the last years.

    Why Performance matters
    Where to start
    Minify CSS/JS Files
    Compress Images
    Reduce HTTP Requests
    Additional Advice
    Sources/ Further Reading

Why Performance Matters

I don't want to wait up until 4 or 5 seconds for the website to load. I want to see my results immediatly and if that's not going to happen I'm looking further even if that website I just closed would have had the perfect answer to my google search query.

This is why Website Performance and Speed matters to me and why I'm trying to improve these aspects on every website I'm working on. But am I the only one, used to this behaviour, not wanting to wait longer than a few seconds for a website to load?

Luke Wroblewski gathered some interesting facts about this topic. The most interesting fact in my opinion is, that:

    "If a page load takes more than two seconds, 40% are likely to abandon that site"

You can find the sources to all facts on the link above. His Conclusion is that "speed matters online" and "even 100 millisecond delays in load times negatively impact user experience and conversions".

A recent example shows that Website Performance/Speed can make a huge difference. After a "reboot" GQ cut the webpage load time by 80%. The reasons for very slow loading times in the first place where mainly a lot of calls to the server for ad tags, features and additionally the GQ website was published on multiple CMS. So they reduced their calls to the server by 400%, migrated to a single CMS, decluttered the entire website and cut the page load time by 80%, so now it loads in under two seconds.

Note: I'm not saying, that I'm already an expert in optimizing performance and page speed and because of that I'm gathering a few methods here to learn even more about these topics for myself.

Where to start

While I'm working on a project or if I want to test a website which I find interesting, the first thing I usually do is heading over to Googles PageSpeed Insights. With this tool you can test your website twice for efficiency: on mobile and on desktop.

PageSpeed Insights captures the time your website needs to load the content "above the fold" and the time for loading the whole content. Additionally it tests your website on user experience and in the end you'll get a rating between 0 and 100.

But this tool isn't leaving you out in the cold after giving you this rating. It gives also useful advice on how to achieve a better rating. It explicitely tells you, what you're doing wrong and how you can change that. The Page Speed Insights shows, which rules for better speed and which rules for better user experience must be satisfied. I think it's a great tool which not only tests everything but also tells you how you can do better.

Another tool I don't want to miss for testing a websites performance is the Chrome Dev Tools Network Panel. It "records information about each network operation on a page, including detailed timing data, HTTP Requests and response headers, cookies and more." You just have to open the Chrome Developer Tools (Cmd + Shift + I on a Mac and Ctrl + Shift + I on Windows) and switch to the Networks Panel. Than just hit F5 to reload and record your pages network activity.

This Gif shows the Networks Panel


I will just explain the core features here, the link above explains the Network Panel in depth. It is structured in five panes from top to bottom: The Controls give you the opportunity to change the look and a few functions. With Filters you can control which resources are displayed in the Request Table. The Overview shows a complete timeline of when the resources were retrieved.

The Request Table is the most interesting pane in my opinion. It lists every resource that was retrieved. You can sort it by name, by size, type and so on. By default it is sorted by the time it was retrieved. Finally the summary tells about the total number of requests, the amount of data transferred and the loading times.

So for a quick use of the Network Panel, you can see just in a few seconds how much requests your pages needs, how much data is transferred, how long it takes to load and which are the biggest files that need to load longest.

Minify CSS/JS Files

After having multiple ways of testing your websites performance, there are a few steps one can take to improve it. Minifying the CSS and JS Files is a big step to achieve it. This means to delete all whitespaces and comments in the files, so minified files mostly look like all code is standing on one line.

There are multiple online tools who are able to do that. But as I recently started using Gulp, it does the job for me. The Gulp Plugin clean-css just needs the original folder of your CSS file and the final destination and all the minify stuff is done in the background.

gulp.task('minify-css', function() {
  return gulp.src('assets/css/**/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('assets/css'));
})

Compress Images

The same goes with compressing Images. Images take the most space on a websites weight so compressing them is usually a good idea. I also used a Gulp Plugin to solve this task, imagemin, and saved a lot of space.

gulp.task('imagemin', function() {
  return gulp.src('assets/img/**.*')
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(gulp.dest('assets/img'));
});

In Addition to compress the images I'm always looking for ways to not use images. Therefore I always try to solve issues with CSS before implementing an Image. There is so much more that can be done with CSS than ever before. Also inline SVG is a nice solution and I used this technique a lot throughout making this website.

Reduce HTTP Requests

As shown in the example above with the GQ website having a lot HTTP Requests is one of the biggest performance pitfalls. Every single request increases the page load time and additionally some requests need to wait because others have to finish. One way to solve this problem is to combine files. For example many developers like to have different CSS files. One for the main page layout, one with the responsive styles and so on. The same goes with JS files.

But remembering that every single file is one HTTP request, having a lot of different CSS and JS files seems to be a really bad idea. So combining all CSS files into one leads to only one HTTP request. You can still use different CSS files in the development process as there are several techniques to combine them for production like the sass @import which, in contrast to the CSS @import rule, doesn't create an additional HTTP request.

Another way to reduce HTTP requests is to use Image sprites. This technique includes to create one single image out of all your background images and leads to, you guessed it, just one HTTP request instead of many. Than you just position it so that only the preferred image is displayed and the rest is hidden. Hugo Giraudel created a little script called spritesh which takes all of your SVG files and creates one sprite automatically. Very helpful!

Additional Advice

At this time this should be common sense. If you have a script implemented into your website, the page stops whatever it is doing when it reaches the script and executes it. So putting your script into the head will block the page rendering. The solution for this problem is putting the script before the closing body tag. The page will render completely and the script tag loads after the DOM is loaded so there is no half loaded website or something like this. There are also a few other solutions to this like the attributes async & defer but as they are not combatible with all browsers yet they won't work correctly in every browser.

Another useful tip is to enable Gzip. Gzip makes it possible to recude the size of your complete website. Gzip works on the server and most hosting providers will automatically compress your website with Gzip.

So that was my experience with website performance optimization so far. I know I'm just at the beginning of the topic and there are a lot more ways to improve performance so the learning never stops.

If you have got more tips or advices I would really appreciate it, if you share them with me. Just send me an email to hello@marcokuehbauch.com or reach out to me on Twitter!

Sources & Further Reading

    Need for Speed 2: Improving Front-End Performance via Jonathan Suh
    Performance & Organization via Shay Howe
    The Imortance (and Ease) of Minifying your CSS and JavaScript via Scott Hanselman
    Performance Tools by Robin Rendle via Robin Rendle
