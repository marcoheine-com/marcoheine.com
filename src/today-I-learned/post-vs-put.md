---
title: POST vs. PUT
date: 2022-05-07
path: /post-vs-put
tags: ['API']
---

As I was recently part of developing a RESTful API, I stumbled a lot about the
**differentiation** between POST and PUT. I really tried to find clear
definitions for both of these CRUD Operations.

After searching the whole Internet, my **conclusion** was:

> _"Both PUT and POST can be used for creating."_

and

> _"POST should be used to create a resource, and PUT should be used to modify
> one"_

and

> _"PUT should be used to create a resource, and POST should be used to modify
> one"_

Great.

After searching some more I found this statement: "Better is to choose between
PUT and POST based on idempotence of the action.".

Idempotence? What's that now?

**Idempotence** or an **idempotent operation** means it has no additional effect
if it is called more than once whith the same input parameters. PUT is such an
idempotent operation.

Here is an example:

If a user sends a PUT request twice because the network failed at first and
nevertheless both request manage to make it to the server, that's not a problem.

If the same happens with a POST request, that can cause some bad side effects,
like updating different parts of an object.

So updating something twice is bad and you're doing it with POST? Use PUT for
that!

Other than that I'm still not 100% sure if I've understood the distinction of
PUT and POST, but the idempotent example clears a few things up.

I keep coming back to this
[stackoverflow thread](https://stackoverflow.com/questions/630453/what-is-the-difference-between-post-and-put-in-http)
where I think there is a lot of knowledge in there.
