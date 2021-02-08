---
title: Some Advice for Leading Tech Teams
date: 2021-02-08
description: Some advice I wish I could give to a younger version of myself, before I took on the responsibility of leading a team
image: https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=600
tags: [Engineering, Management, Advice, Manager]
categories: [Engineering, Management]
---

Going from a programmer, to a team lead, to a Director of Engineering can be quite a jump. How do you lead or manage a team of developers who are, by and large, individualistic?

I've been programming since I was about 10 and leading teams for a bit of time now. I don't assume to know all of the answers, but what I do have are insights on how I found leading a development team.

## Preface

I'm a programmer. I've been a programmer since I was about 10 or 11 years old. I was a programmer way before I knew what a programmer actually was.

I enjoy looking at problems and visualizing solutions. I revel in the creativity that developing software brings me. I may not be able to draw, but I can create code that bears MY perks and signature.

Even though Software Development is based on the Science subjects (maths, science, engineering), it allows for interpretation. No one question can be boiled down into one singular answer, and that mutates Software Development from a pure science to subjective, creative problem solving.

Even though Developers / Programmers / Software Engineers / Coders (whatever term you wish to use) typically fall into the "office" work-life, it is very important to understand that developers do not subscribe in totality to that existence.

Developers are creative workers. Looking at a problem could generate multiple solutions depending on the developer, each solution varying in complexity and each solution differing based on complexity.

Anecdotally, I've experienced that while developers enjoy structure - from a strict code style, to a high percentage code coverage - overall I don't believe developers enjoy getting railroaded into following a strict corporate mindset, i.e. being expected to buy into the Company Culture or forced to partake in Team Building Exercises.  

Now, knowing all of this, how did I handle leading a team of developers?

## Organise One-On-Ones Often

Organise a One-on-One meeting often, ideally at the same time and day every 2-4 weeks. Try not to perform ad-hoc One-on-One meetings as your team members may not be prepared. Also it's important that the meetings don't happen less often than once every 2-4 weeks, as the goal is to catch potential issues soon to mitigate problems down the road.

I would typically organise no more than one One-on-One in the morning and another in the afternoon, as to not burn myself out  (which would consequentially affect those meetings and the overall quality of them).

One-on-Ones are a great tool to ensure honest and transparent communication is frequently occurring between you and your team, and that no one issue is allowed to bubble up slowly over time without your awareness. They are also a great tool for tracking employee objectives (short term, mid term and long term).

It is highly recommended to track each team members One-on-One within a shared document, i.e. on OneNote or OneDrive. This document can be divided into Objectives and One-on-One sessions. Each Session then can contain Questions asked within that session, the answers and anything of interest that came up during the meeting.

Generally when I organise One-on-Ones I randomly select 15 questions, ranging from Job Satisfaction to Career Progression, using a simple bash script I put together - it can be found here [https://github.com/GavinKenna/One-On-One-Question-Chooser](https://github.com/GavinKenna/One-On-One-Question-Chooser). I used [Vidal Graupera's](https://github.com/VGraupera) One-On-One Questions repo as the base, and that can be found here: [https://github.com/VGraupera/1on1-questions](https://github.com/VGraupera/1on1-questions).

After the Questions have been selected I add them to the Meeting agenda so that the team member has a chance to review and think about their potential answers.

During the meeting itself it's very important to have it away from the team, for instance in a meeting room. You may also find having it in a cafe while having a coffee is also a great choice as it lends itself to a more informal, casual flow of conversation - before Covid of course.

### Tips

> * Have the meeting face-to-face, ideally in a meeting room away from other employees.
> * Break the meeting into 3 sections - Goals , Questions and Actions.
>   1) Goals can be broken into Short Term (next One-on-One meeting), Mid Term (3-5 months away) and Long Term (1 year away). These Goals can be discussed in each One-on-One and progress can be tracked. Examples:
>       * Short Term Goal : Have codebase running locally.
>       * Mid Term Goal   : Become SME on particular project.
>       * Long Term Goal  : Run team.
>   2) Questions should change each session to give variety and explore different avenues. We should also avoid vague questions should as "How are things?" and instead ask probing questions should as "If you could change one thing in our team right now, what would it be?"
>   3) Actions are trackable objectives, typically assigned to myself (the manager). An Action could be to give access to a particular system, or purchase training for the employee.
> * Keep track of every One-on-One meeting on a shared document with that employee. This document will contain all One-on-Ones had, questions asked (and their answers). It will also contain Actions put aside for future meetings. Personally I use OneNote.
> * Divide your employees into One-on-One groups. Each group will be asked the same questions individually which may be helpful in finding the overall tone of the team.
> * Show what Questions you will be asking before the One-on-One meeting, as to give your employee time to consider the answer.
> * As I mentioned above - ask Probing Questions that will help reveal the general tone of the team. It's helpful to foresee problems that may occur which may allow you to prepare, instead of problems slowly bubbling up.
>   * Probing Question examples may be:
>     * If you were me what changes would you implement?
>     * Do you feel everyone on the team is pulling their own weight?
>     * What is the biggest issue our team/company is facing and what do you think is the cause and solution?

## Learn to Delegate

One of the biggest problems I found was delegating work, namely development work.

Even though delegating work was the most obvious form of managing employees,  it was the most difficult task I encountered as a former developer.

As a developer I wanted to take all of the complex, exciting, initiative tasks that came down the line. Rebuild the backend? Yeah I want to be spearheading that. Taking our deployment method from manual to Automated CI/CD? Yup assign that task to me. Containerising our core application using Docker? I'm on it.

But as a Team Lead (and then as a Director of Engineering) I found it somewhat difficult to relinquish the development work to downstream teams and employees. After all, I was a Senior Software Developer in charge of writing a lot of the code before being Team Lead - why would that change?

The answer is that it needs to change. As a Team Lead, or Team Manager, or even Director of Engineer - it doesn't mean you continue your old role and take on new responsibilities, it means taking control on the new role entirely and finding the best person for your previous responsibilities. And that means relinquishing all aspects of your previous role (no matter how hard you find it).

The reason for this is simple - if you continue to design, develop, bug-fix and document, when will you find time to perform your main role? You were intrusted to lead your team effectively and efficiently - you can't do that if you're spread too thin.

Now that's not to say you won't be programming at all - probably just not as much as you're used to!

## Accept You Won't Be Programming As Much -  But Don't Let Your Knowledge Drop

Knowledge and Practice go hand in hand, and when you are no longer actively practising something you may notice your ability and knowledge diminishing.

This is as true for software development as anything, and this is something I truly struggled with when taking a step away from writing code everyday. Yes I understood the high level architecture of systems and how they may interface with 3rd party vendors, but could I implement as quickly as a junior developer on the team who is programming everyday within that system?

Possibly not. And that's OK. As I mentioned above you can't be expected to be able to perform every facet of the department, but that doesn't mean you shouldn't understand the high level workings of the System or Product your team is working on.

If you can't find time to step through the code itself then at least gain an insight into the system from an engineer or architect on the team. Learn about the entrypoints, it's tech stack, it's build and deployment infrastructure, how best to get an engineer ramped up on it, etc.

Outside of work, try to keep up with current tech trends and see where the industry is moving in terms of best practices.

## Be (More) Organised

Personally, moving from Developer to Team Lead and Director was signified by less work occurring in my IDE and more work happening in my Email client and meeting rooms.

This presented an immediate change in how I tracked my work. As a Developer I would track my work in the form of tickets (tasks, bugs, etc). I would take a ticket, action it, test it and close it. A simple flow of work.

As a Team Lead and Director, I found that my workload was more intangible and difficult to quantify.

I had more meetings to attend. I was no longer concerned about a Project's scope within a single Sprint but its entire lifecycle. Sprints had to be planned weeks in advance, and capacity and resourcing had to be accounted for.

This is where organisation plays a big part. How do you know how many developers you need a project? How can you accurately estimate the time frame of deploying a particular feature? For myself the answer is historical metrics.

Measuring deliverables via [Story Points](https://www.atlassian.com/agile/project-management/estimation) ensures we have a method to track what we can achieve in a certain timeframe with a certain amount of resources (developers).

Using this we're able to roughly estimate how long a feature/product will take and how many developers we will need. This method is invaluable when organising the teams' annual leave.

## Be Assertive - But Not Unreasonable

A simple piece of advice, but I think an important one. As a team lead you are the defacto representative of your team. Your department looks to you to protect them from unrealistic timelines, additional ad-hoc work and general pressure from other teams.

**Learn to say no to other department heads**.

While overall the company is a team, you have been tasked with overseeing your department and they look to you to shield them from as much as possible.

If a ticket comes in that is being pushed as a P1 and the requirements aren't clear cut, **say no**.

If there's implied pressure to work overtime (without explicitly requesting overtime, and thus earning more money), **say no**.

If your team has given accurate timeline's based on experience, and you're asked if it can be pushed ahead without additional resources, **say no**.

Now, obviously that doesn't mean to stonewall every other department just for the sake of it - overall each department is striving for the same goal but you just have to be mindful that your priority is to your team.

## Overcome The Strange Feeling of Leading People With More Experience

Like me, you may be tasked with leading people with more experience (and they may also be older).

While this can feel weird at first, giving instructions to those with a skillset far above your own, you need to understand that this is your role to lead.

Also, just because you are leading the team that does not mean you know more than your team. You should lean on these experienced developers (and junior developers) for their insights and take on their advice and suggestions on board. Their knowledge and wisdom can be a major asset.

As long as you are respectful towards all those who report to you, and don't make demands and you don't view your position as one that is "above" others, you should be fine.

## Block Out Your Calendar

With this role you may find your schedule getting busier and busier each day, so much so to the point that you feel your job is to attend meetings.

My simple trick to this is : block out one hour a day for lunch and two hours a day for focused work. That way when people go to schedule a meeting with you they will see the hours you are busy.
