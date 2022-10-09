---
title: Reflecting on my first year at FlyCode
description: A retrospective on my first year as a founding engineer at FlyCode
date: 2020-10-07
redirect_from:
  - /blog/first-year-in-flycode
  - /blog/first-year-in-flycode/
---

Recently, it's been a year since I joined [FlyCode](https://flycode.com) as a founding engineer. Coincidentally, I got a quieter weekend so I decided to reflect a bit on my first year at the startup.

But first, how did I get there: a year and a half ago I left a startup a friend of mine started and left. The departure of one of the co-founders was dramatic and eventually, I decided it was not the right place for me as I came to work with that friend. So, heartbroken I decided to take a summer break (which was delayed to help my friends at [MagicYard](https://www.magicyard.co) get started but that's a story for another time).

During vacation time, I couldn't help myself and started researching what would be my next move. I invited entrepreneurs that inspire me to meet for coffee and asked them for a piece of advice. I asked: "what should I do to get ready to start a startup?" and they gave me various answers: from "Just do it" to "Try to work in the enterprise".

A bit later I also asked one of my friends who are well connected in the Tel Aviv startup scene if she knows about interesting opportunities. She connected me with her brother, who is the CTO of FlyCode. Around that time I realized the right thing for me would be to be one of the first employees in an early-stage startup and experience firsthand the initial steps of building a company and working with talented founders that I can learn from. FlyCode seemed like a good fit, we moved forward and I started working last October.

When I got to FlyCode, they had already secured some money, interviewed some companies, worked through an initial ideation process, and started to build a POC of a system for managing texts in web apps. They were not yet certain who is the buyer or what is the business model but that text is an interesting enough aspect of applications that PMs and other non-coding teammates want to edit and that wanted to validate the assumption that people are willing for a bot to send PRs to their code.

My first job was to build an integration with GitHub and extract texts from language files (used in [internationalization systems](https://en.wikipedia.org/wiki/Internationalization_and_localization)). Building the integration with GitHub was not easy. As not a lot of companies are doing it (I mean there are but it's still a niche) there is not a lot of written material about this (but I'm ultimately grateful for the GitHub docs for apps). I would say from speaking with other people examining the space of code-based applications they usually underestimate the edge cases and difficulties of integrating with GitHub.

After we had a working pipeline of connecting to GitHub and reading texts I also had to build a bot that would be able to create PRs with the changes people make to texts in FlyCode. Surprisingly, editing data files wasn't easy either! Specifically, editing JSON in place was not a simple task.

By that time we started to pitch companies a system for managing texts (also hardcoded in files as we were optimistic it could be done shortly) and got a landing page with the general vision of the company with a narrative focused on the collaboration of non-coding teammates with developers.

We all reached out to as many people as possible and got our first design partners. I remember my excitement at talking for the first time with engineers from companies like Kong. It's one thing to build a product, but sharing it with customers and seeing their excitement about your vision is a whole other thing. With them, we started to fine-tune the MVP. First, for a company that needed to manage JSON language files and a bit later for hardcoded texts in [Angular template files](https://angular.io/guide/template-syntax), [React JSX](https://reactjs.org/docs/introducing-jsx.html), and [Vue Single File Components](https://vuejs.org/guide/scaling-up/sfc.html). My experience with ASTs came in handy there.

It was cool to create a workflow for non-technical people to update texts that are hardcoded in frontend code they can't access and/or understand themselves. Also, nailing the right DX for our GitHub bot was a cool UX challenge. As an engineer by training with a background in design, I felt like I had a lot to contribute.

In February my good friend Gal joined FlyCode. It's always fun to work with friends, especially with those I collaborated with in the past (Gal was with me in the two former places). I also appreciated the team that agreed to bring him over. Doing startups without him would be much less fun.

Around March we streamlined our pitch for developers and tested it out in different forums to get feedback. We iterated on our message for developers trying to convert as many people as possible from a landing page to the product. Once it was good enough we started preparing for submitting it to [Hacker News](https://news.ycombinator.com/).

At the end of April, we submitted our developer page to Hacker News as [Show HN](https://news.ycombinator.com/item?id=31166924). Since I am the most active member of the Hacker News team, I led this effort. It worked well, we reached the top page quickly, stayed there for about 6 hours, and gained 185 points. We got some interesting feedback and many installations. Overall it was definitely worth the effort.

A little bit after the Show HN we got contacted by [YCombinator](https://ycombinator.com) and we joined the summer batch (S22) of the program. It was very exciting for me as the last time I participated in YC I wasn't as involved as I wanted to be. I felt like we could benefit a lot from working in a startup that participates in the program.

During YC, we were focused on selling our MVP to as many people as possible. I've taken an active part in the effort and done a lot of lead generation, cold-emailing, starting conversations with people coming into the product, and anything that could help with selling the product while maintaining production stability and fixing bugs. The founders shared with me interesting lessons from the partners and workshops they attended (as much as they could) and overall I felt like the program helped us focus and improve our skills of selling and measuring success.

In July, we prepared and launched FlyCode on [FlyCode on Product Hunt](https://www.producthunt.com/products/flycode) and got to 2nd product of the day with 594 up-votes! It created some really interesting conversations and leads and I had the privilege of being at the centre of that effort (with me narrating the walkthrough video). Aside from that, I had an interview on the [Prisma live stream](https://youtu.be/R_nVzarAOUM?t=643) about my role in FlyCode. It was a pleasure to work with the [Prisma](https://prisma.io) team again.

Also, during that time with the encouragement of the founders, I started a new podcast called [Merged](https://anchor.fm/merged-podcast) (which is sponsored by FlyCode). In it, I got to talk with some of the most interesting people in the product development world. It was cool I could reach out to people on social media and they graciously agreed to be interviewed. I'm very proud of the result.

The program ended in September and as the holiday season was about to start in October in Israel (it's a bit different every year) we took the time to reassess and plan our next moves.

All in all, I feel like I've grown a lot in the past year. I learned a lot about defining and building the MVP of a startup, sales, go-to-market, marketing and generally being a helpful contributor in an early-stage environment. My goal wasn't to become a better engineer. However, as I was working with a very experienced CTO I obviously learned a lot from him. I also got to work with the two other founders and touch almost every aspect of the business. This made me feel a little bit more ready to start my own business.

For people that are looking to be entrepreneurs, I think a situation like in FlyCode in which I came to help the founders with everything (not just code) and got exposed to most of the business operations is a stepping stone toward entrepreneurship. It is not easy to be one of the first employees in a startup. In many cases, you will have to work harder, earn less, and maybe get some nice options. They are a very risky asset for common people, and you have to navigate through all the ups and downs of starting a business with the founders (with differing levels of involvement). But with startups with founders like me, I feel like it can be worth it. If they share enough, and you get to be involved with (almost) everything I think it's a great growth opportunity.

As for the product, I'm very proud of what we built. We have created a bridge between code and non-technical creators, and I can't wait until more and more people take action with shaping their products, but for now, I have to keep our plans for the future to myself.
