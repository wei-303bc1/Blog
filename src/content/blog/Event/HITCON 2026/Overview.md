---
title: "2026 HITCON Overview"
description: "HITCON. First Expirience."
pubDate: "2026-8-27"
tags: ["HITCON", "2026", "Conference", "Event", "English"]
---
<!--2026_HITCON_overview-->

## Gained

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I learned more about how hackers' world work. I'm actually very shocked that the president of HIT(Allen Own) is stepping down. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I got a towel for 600 TWD with cute cat and dog on it. I think this towel is kinda overpriced actually.
![1787488151307 (1)](https://hackmd.io/_uploads/BJrFr_tDze.jpg)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I also tried jointing and made this ugly project(17 minutes I'm actually quite satisfied✌️) .
<div style="display: flex;">
  <img src="https://hackmd.io/_uploads/S17kmcYwfg.jpg" style="width: 50%; padding: 5px;">
  <img src="https://hackmd.io/_uploads/ryGkQctPGe.jpg" style="width: 50%; padding: 5px;">
</div>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The only thing that was a pity is that I didn't get the clothes.

## Day 1

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It was an awful day despite I learned some cool stuffs. Since I just came back from south Europe(Italy and Sweden if you are wondering), me and my family all ignored the alarm which made me miss the opening and also kept my friend waiting. I arrived in my dad's car, then I couldn't find my student id card so I had to show my grade report(failed 4 classes btw) to the staff🫩.

#### **Vulnerability Disclosure in the Age of AI**: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is the first agenda I heard in my life for HITCON by "`James Forshaw`". The core idea of this agenda is that how bug bounty should be changed in the new era with ai.

#### **Lunch**: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I went to have lunch with my RCEs teammates. I didn't like the food at all, I only finished the meat and the thing in the middle(yeah idk what it is called). The rice is hard and cold. SITCON's free food tastes better, and HITCON's expensive food taste like crap. I think instead of giving Haagen Dazs out for free HITCON should focus more about the damn food.
![hitcon2026 food](https://hackmd.io/_uploads/rypZ20YwGl.webp)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After lunch we went back and lock in.

**\[UnPwn2Own Berlin 2026 / $70,000\] Agent2Shell: Pre-Prompt RCEs in Claude Code, Cursor, and Gemini**:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was presented by a Japanese called "`Satoki Tsuji`". I didn't learn anything since I had no idea that there was a translater. Lock in was such a joke. Even after so many years of watching Japanese movies I still haven't learned Japenese(I usually skip this part).

#### **Pwn2OwNothing: When a KVM Full-Chain Escapes to Emptiness**: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is a sad story. Four researcher(`Bruce Chen`, `Peterpan0927`, `Weiming Shi`, `Jheng Bing Jhong`) giving everything they could and made their way to make a KVM full-chain escape chain, but due to  submission limitations they couldn't get the tickets to Pwn2Own Berlin. Life doesn't always go as the way we wanted, but thats just life. You either stay angry and waste your time, or simply accept it and move on.


#### **Vulnerabilities Assembled! The Vulnerability Factory Inside the Windows Kernel**: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The representer "`Angelboy`" reminds me of a Brawl Stars esport player lol. While i was thinking of this esport player, the agenda was already done. All I could remember is some key worlds like AFD, lego bricks. Using this logic, they made ai to reassemble new bugs and report them like a money printing machine.

#### **Keychained Melody - Grabbing the Keys to the iCloud Kingdom**: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I really wanted to learn how to catch AI cheating in CTFs, but since my friend(he is now my son) really wanted to learn how to hack Apple devices, I accepted reluctantly. "`Jaron Bradley`" demonstrats`CVE-2026-28860` and how he and his research teammate found this CVE using the `Circle of Trust` from Apple OS's ecosystem.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There were still time for an agenda, but since I had no interest in any of it, we made our way to dinner. On our way to the MRT we actually didn't know there was a shuttle bus. Since it was raining we waited 17 minutes for a taxi(600 TWD btw) just to see the taxi driver give up at the last 4 minutes. Me and my friend finally got to LaLaPort and eat ramen+crab sticks(it tasted so much better than the lunch). I forgot to take pictures but nevermind. And this is for Day 1.

## Day 2

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was really excited for this day because most of the techniques I wanted to learn about are stacked on today's scheduel. 

#### **Out of LINE：QR Code to Wormable RCE in LINE Client**:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Through all the agendas, I enjoyed this one the most. The presenter Flydragon was in the USA so he couldn't present it himself. He hired his friend "`Curious`" to present it for him. `Flydragon` talked about why he decided to attack `LINE` on an android phone as a bug bounty target.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On Threads there are lots of people complaining how `LINE` sucks, but is "`LINE` safe?" is a worth exploring topic. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The researcher anylized the messages of `LINE`. He then found out that the pictures are encoded with `base64`, after testing what would happen using an illegal picture(for example changing some characters in the `base64` decoded picture to make it unable to decode). The result was that the chat room crashed and couldn't be deleted. And then the presenter threw out a joke "LINE清得不乾淨"(translate for suface: **"LINE wasn't cleaned fully"** translate for a deeper meaning: "LINE清得" sounds like the president "William Lai" in Manderine, so the deeper meaning is a joke that means **"Is the president clean?"**)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This bug wasn't enough, the researcher wanted more. He eventually found out that the profile used `Lua`(a script language) to make special effects. Using this 6 year-old bug, just by clicking other's profile picture could accomplish `RCE`(remote code execution).
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After finding these bugs it's time for bounty, but then `LINE` has stopped bug bounty and the company already knew this bug already(which is obviously fake, if the bug is already known inside the company why didn't they fix it?) so he couldn't get any credit or money.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Flydagon` didn't  give up. He then found out that `LINE` also has story like `Instagram`(yeah but no one uses `LINE` story), the story also uses `Lua` to make effects. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After reporting the bug, `LINE` responded again with "It's a known bug". Which made `Flydagon` agent 007(0 bounty, 0 credits, 7 times begging in email).
<img src="https://hackmd.io/_uploads/SJQZ5lsPzl.png" width="50%">

#### **A History of Errors: The Evolution of Windows Error Reporting Exploits**:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This agenda was presented by a Korean named "`HeeChan Kim`". The accent sucks so I pulled out the translate of HITCON.
<img src="https://hackmd.io/_uploads/BJVddZowMg.jpg" width="50%">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yeah this world hates me.

#### **Lunch**: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Due to how disguting yesterday's lunch was, I gave my lunch to my son.

#### **The "Never Gave It Up" Harness: How AI Hacked a Payment Terminal and Turned It Into an Arcade**:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Chiao Lin Yu` took part of DEFCON and then found out that his card disappeared. He then decided to make research on card readers. He used Gemini 3.5 flash(without the sleep() function) as master to slave opus 4.6 to find bugs. 
<img src="https://hackmd.io/_uploads/S19DSEovfl.jpg" width="80%">

I forgot what vulnerability did he find, the only thing I remember is that I got rick-rolled.

<img src="https://hackmd.io/_uploads/HyxJp-jvfg.webp" width="50%">


#### **原初之穢：先莫管供應鍊夆毒，阮直接共官方發布源頭駭掉矣**:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Can't belive someone(`splitline`) used Taiwanese to present✌️. Because I couldn't speak Taiwanese and I didn't trust the translater of HITCON, we went to try jointing.

<img src="https://hackmd.io/_uploads/HkUh-miDze.webp" width="50%">

Bro elo is NOT that important🫩.

#### **Jointing**:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This experience is very special. I learned that I should stick with firmware and leave hardware alone.

#### **↖乂古法挖洞乂↘ 純邏輯 Microsoft Edge 零點擊沙箱逃逸鏈**：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is the only agenda everyone was excited for. `Orange Tsai`, one of the best hackers in the world, talked about how he escaped sandbox with logic on Microsoft Edge without the help of ai and won first place in Pwn2own Berlin(6500,000 TWD bounty and 17.5 Master of Pwn points btw). 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Orange` found out that `switch_profile` could be used to `self-xss`. But after changing tabs while delay, this vulnerability could be changed into a limited `universal xss`(UXSS) vulnerability.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are four limitations. First, the attacted website has to be on allowlist. Second, the user has to change the tab by his own. Third, the browser has to exist a profile. Forth and last, the profile email has to be known.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using `window.open(login.live.com)`, Microsoft Edge would open login.live.com and auto login with window's profile account. But there was still popup blocker which would make `window.open(login.live.com)` useless. Fortunatly, Microsoft left a whitelist for internal testing: `about:blank#quickAuthPopup`. Using this, `window.open(login.live.com)` finally worked. The last limit is to know what's the email of the profile. After using some subdomain under microsoft.com, and viewing their source code, the profile email was found out successfully. By now, all `UXSS` limitation are bypassed.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The next problem is, how to use `UXSS` to achive RCE?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In Microsoft Edge, there are some privilege pages that could write files into the computer, such as edge://settings or edge://downloads(something like that). Websites are banned to switch to those pages, read://(immersive reader tool) is also one of the privilege pages but isn't be banned to be switched. Using read://, we now have the permission to write and read files. Using edge's feedback api `edgeFeedbackPrivate.zipDiagnosticLogFiles` and path travel, the malware could be put in any folder except root.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After putting the malware in `telnet.exe` folder and restart, the malware could finally work!

## Overall

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I learned many more about how to find bugs. This is also my first time writting so many words for just an article. Maybe there are some mistakes in this blog because I didn't absorb all the knowledge or I forgot something. Overall I think the price of the ticket(2500 TWD for a student) was worth it(but please work more on the food). Huge thanks to my girlfriend Chloe who stayed with me while I was working on this blog and helped me on my grammer and spelling.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;----2026/8/25
