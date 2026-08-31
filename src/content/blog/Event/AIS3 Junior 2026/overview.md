---
title: "2026 Ais3 junior overview"
description: "Ais3 junior."
pubDate: "2026-8-30"
tags: ["2026", "Ais3", "Camp", "Mandarin"]
---
<!--2026_Ais3_junior_overview-->
###### ~~結果我是在HITCON聽不懂[台語的議程](https://hitcon.org/2026/zh-TW/agenda/3e34044a-45dc-4eb6-b70d-da9b8d79261b/)時才想起來要寫，當初說好隔天就寫的w~~。<br><br><br>

## 收穫
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最有收穫的應該是reverse，畢竟我reverse除了[picoctf](https://picoctf.org)(嚴肅吐槽新ui)上的題目照著別人的exploit解過幾次就沒有更進一步了。<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**reverse**:我學會改`jnz`之類和改變數的(ghidra是真神，~~ida是邪教~~)。<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**crypto**:我一直在偷看我`cryptohack`寫好的wp，只能說無腦`sage`還是太好玩了XD。<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**pwn**:我還是都不太會(┬┬﹏┬┬)。<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**web**:我學會了`sql`的`payload`要怎麼拼(感謝同組的電神教會我)，還學會了`file upload`的題型怎麼打。<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**misc**:很有趣，但沒解出來會很躁，尤其是一看就知道考點是甚麼但試了又不對。<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**ai**:其實我比較想數學的部分，~~我應該就不會在上課時玩galgame了~~。<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/0GzLgn2fgcI" title="黃氏兄弟【不專心】首張單曲MV ｜ Official Music Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我還得到了還沒寄出的Ais3 junior貼紙，還沒寄出的營隊證書，庫彭資安長的名片，和一堆電神的聯絡方式XD。
## 第一天
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一天是教Linux基本指令還有web。結果我覺得最常用的`clean`竟然沒有講，~~學cs的都不愛乾淨嗎~~。web我也是終於學會了卡我很久的sql注入。然後web我path traversal的一句木馬我沒有搞懂。
```php
<?php system($_GET["cmd"]);?>
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中餐我忘記吃甚麼，只知道晚餐是去交大的餐部吃炸醬麵(然後我有一大半沒吃完ㄏㄏ)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;吃完晚餐後被抓去寫作業，然後竟然有人有體力在這之後去打排球!?
![image](https://hackmd.io/_uploads/ryr9SwFwGg.png)
##### 第一天心得:
我覺得最難的是sql語法，~~我卡很久才發現其實沒那麼難~~。然後上課用的xampp的環境一直錯誤沒辦法用，搞得後來我都沒在上課一直在修，~~然後xampp就被我刪掉了。~~

## 第二天
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二天學ai，功課出超級難，我完全不懂ai資安到底在幹嘛，~~還是我去認一堆爸爸媽媽然後prompt inject時使用~~。我對ai最深刻的印象是幾個月前有好幾個人在脆上幻想自己搞出了agi，例如鼎鼎大名的atlas world(我找不到他的github了何意為。)
早餐我吃麥當勞，中晚吃忘記吃甚麼了，只知道那天搞得很晚(然後最後受不了了vibe code還失敗ㄏㄏ)。
##### 第二天心得:
老實說ai這領域我去年有試著學過，感想就是~~很像在疊樂高~~。然後如果我真的要往ai發展的話應該會是reinforcement learning，~~絕對不會碰ai的資安~~。去年會去玩ai是因為我躺在床上doomscroll的時候就看到[ai warehouse](https://www.youtube.com/@aiwarehouse)這個在youtube上的寶藏頻道(真的超級好看)。~~我之後一定要做出一個會用到rl的專案~~。

## 第三天
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我最期待的crypto終於來了，~~大部分時間都在講古典好難過~~。然後還教了reverse和pwn這兩個我一直不太敢碰的題目。pwn我也就只知道stack和heap和buffer overflow這幾個名詞，怎麼算offset我都不知道。reverse我只會打開ghidra把檔案丟進去然後發現檔案太大要分析很久然後就默默放棄了w。不過幸好不是鯨魚出crypto功課，~~不然可能就不用睡了~~(畢竟單弄reverse我都弄到很晚了XD)。
早餐忘記吃甚麼了，晚餐沒吃，但中午吃包子。
##### 第三天心得:
今天有我很有興趣的crypto，但也有超不熟悉的pwn和reverse。我覺得今天收穫最大的是reverse，我學會更加熟悉操作ghidra，還學會怎麼改條件了。但是更希望有天可以學會pwn，不然比賽都只能看著黑色的pwn發呆(雖然不只pwn是全黑的XD)。

## 第四天
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;非常開心終於能回家，我來時是我爸載我，回去時是坐超級久然後又超級晃的公車才上高鐵，早知道就搭計程車了，我是真的沒想到新竹公車竟然沒有專用道然後會跟其他車一起塞車???刷新我的三觀。後來跟RCEs的隊長R3X DJ一起坐高鐵回台北。
##### 第四天心得:
時間過好快喔突然就要結束了。~~終於可以回家拉屎了~~，這幾天我總共只拉一次(雖然沒人想知道XD)。Misc的感想就是很好玩(除了pyjail)，~~基本上比賽我只解得出misc和welcome~~，很可惜osint(我怎麼一直拼成oinst)在比賽中基本上只會有一題。

## 專題
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;專題的主題是白兔的"我有酷酷的工具"。我那時候在義大利，出的力只有幫忙code review和回答QA，真的非常感謝喵靈。
github:[https://github.com/lin3598197/Ruk1r3n_1s_cut3](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## 總而言之
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;這幾天認識了超多電神，好可惜沒看到傳說中的鯨魚。如果不算歸程的話最開心的時候應該是庫彭資安長演講的那個時候，那時候dc直接被訊息淹沒，超級好笑，很可惜忘記要要簽名。然後那幾天點名時有看到一個人完全沒來，真的可惜了那個名額，我朋友很可惜就沒去了。AIS3真的是一個很好的資源(~~而且還免費~~)。我要狂刷cryptohack，明年AIS3希望能上。

接著附上一個縣祭文:<br>
[![image](https://hackmd.io/_uploads/HkdZ-DdPfg.png)
](https://www.threads.com/@wei_303bc1/post/DbFznF7G-RC)<br>
這篇文就到這裡啦希望讀者讀的開心。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;----2026/8/23 
