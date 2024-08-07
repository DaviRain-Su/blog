---
title: Rust Resources Every Learner Should Know in 2023
date: 2023-06-30
---

去年，我开始学习Rust，主要是为了应用于嵌入式系统。当时，我也在一篇名为“[35个Rust学习资源，每个初学者在2022年都应该知道](https://apollolabsblog.hashnode.dev/35-rust-learning-resources-every-beginner-should-know-in-2022)”的帖子中分享了我所遇到的所有学习材料。自那时以来，我并没有停止学习 Rust，而是不断努力巩固自己的基础。因此，我一直在寻找新的学习资源。

在本文中，我将通过添加更多的资源以及对之前未曾利用的一些付费资源的思考，扩展去年的帖子。提醒一下，当时，我将资源分为了6个主要类别：1）阅读材料，2）实践资源，3）YouTube 视频，4）Git 资源，5）速查表，以及6）问题论坛。今年我增加了3个更多的类别，它们是7）课程，8）播客，以及9）新闻通讯。在相关情况下，我还将为资源的级别添加注释，无论是初学者（👶）、中级（👨），还是高级（👴）级别。

我想再次强调，我的学习之旅始于 Rust 官方的语言资源“the book”，然后我主要通过完成令人惊叹的 Rustlings 练习来练习。我在本文中提到的所有其他资源都是我在学习过程中遇到的，以澄清我在“the book”中阅读的概念或当我在某个 Rustlings 练习中遇到困难并希望进行更多探索时使用的。最后，当我被问及是否会因为手头的资源而学习 Rust 时，如果有的话，基于手头的资源，我可能会首先从下面提到的快速摘要资源开始，然后再着手“the book”。如果我要选择付费资源，那么“Beginning Rust”将是我选择的书籍。

## 1）阅读材料 📚

### 快速摘要

- 👶[《Rust 指南》](https://tourofrust.com/)是 Rust 编程语言的一步一步指南。它很好地概述了语言，并允许学习者修改代码示例以进行实验。

- 👶[《半小时学会 Rust》](https://fasterthanli.me/articles/a-half-hour-to-learn-rust)是一个快速概述，涵盖了许多 Rust 的概念，并提供了快速示例。所有内容都在单个网页上！这个资源对于快速刷新各种概念也非常有用。

- 👶[《温和介绍 Rust》](https://stevedonovan.github.io/rust-gentle-intro/readme.html)是一本简短的书，概括了 Rust 的主要概念。作者提出的想法是，在深入了解像“the book”这样的更复杂的资源之前，先“试用”了解足够的语言知识。

### 🆓 Free Online Books:

- 👶 [Rust Book "The Book"](https://doc.rust-lang.org/book/)：这是由Mozilla基金会的Rust开发团队编写的Rust编程语言官方书籍。这是我开始学习Rust的地方，也是我最喜欢的资源之一。在编写Rust代码时，我经常会回到这本书中查找信息。


- 👶 [Rust By Example：Rust by example](https://doc.rust-lang.org/rust-by-example/)收集了各种Rust概念的可运行示例。当我在"The Book"中学习概念时，我发现它很有用，可以作为参考资料。

- 👶 [Easy Rust](https://dhghomon.github.io/easy_rust/)：这是一种试图使用“易懂的英语”来教授Rust编程语言的资源，适用于非英语母语的学习者。我个人发现它在澄清概念方面很有用。这本书的好处是，每章节中都链接了一个与该章节相关联的YouTube视频。

- 👴 [Rust Atomics and Locks](https://marabos.nl/atomics/)：这本书由优秀的Mara Bos编写，可免费获取。正如书名所示，它介绍了Rust原子和锁的相关知识。因此，这本书的内容在编写并发应用程序代码时非常有用。通常来说，这并不是初学者可以轻松掌握的内容，但是，当你在Rust知识方面有所进步时，这是一本必须了解的资源。

- 👴 [Rust Design Patterns](https://rust-unofficial.github.io/patterns/intro.html)：如果你想编写更符合Rust编程语言惯例的代码，这是一个很好的资源。对于初学者来说，这不是一本好书，而是在进一步学习Rust时可以参考的书籍。如果你来自另一种编程语言，这本书也可以帮助你理解设计模式的不同之处。阅读这本书的部分内容实际上帮助了我阅读其他人的代码。

### 💲 付费印刷书籍：

我个人完全依赖免费材料来学习Rust，但是这里列出的书籍是我在学习之后获得的。此外，一些人可能更喜欢更有触感的免费书籍，其中“the book”本身也可以作为纸质版购买。

- 👨 [Rust in Action](https://www.manning.com/books/rust-in-action)：去年我购买了这本书。Rust in Action是一本很棒的读物，提供了许多例子，但我不会推荐给初学者。作者（Tim Mcnamara）本人也建议那些已经熟悉一些Rust的人去阅读本书。我的个人经验是，这本书帮助我澄清了一些我仍然不太清楚的Rust概念。另一方面，在书的更深层次上，有一些我跳过的章节，我发现那些章节更专注于特定的应用领域。最后，附带一提，作者Tim Mcnamara还维护着一个与Rust相关的Youtube频道，在下面的视频部分列出。
- 👨 [Programming Rust: Fast, Safe Systems Development](https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/)：这本书被评为亚马逊畅销书。去年我也得到了一本。本书详细介绍了在Rust中做同样事情的许多细节和不同方法。我认为这是一本非常好的参考书，因为我感觉它覆盖了语言的每个方面。不过我不建议初学者阅读，因为有时可能会有点压倒性。
- 👶 [Beginning Rust: From Novice to Professional](https://www.amazon.com/Beginning-Rust-Professional-Carlo-Milanesi/dp/1484234677)：如果您想购买书籍，并且您是初学者，我会说这是您应该选择的书籍。我发现这本书是教授Rust最易理解的书籍之一。这本书的好处是它的材料也与Educative上的实践材料相结合。
- 👴 [Rust for Rustaceans](https://rust-for-rustaceans.com/)：这是高级用户中广受欢迎的一本书，拥有很好的评价，但是我还没有得到过。我之所以推荐它，是因为作者Jon Gjengset有一个我非常喜欢的Youtube频道（下面的视频部分有更多详细信息）。

## 2） 练习材料 🏋️‍♂️
### 🆓 免费资源

- 👶 [Rustlings](https://github.com/rust-lang/rustlings)是一个git项目，包含了一些小练习来学习Rust。我非常喜欢这个资源，因为它涵盖了"The Book"中的每个主题，并且有时会很有挑战性。我完成了所有的练习，每当我完成一项困难的任务时，我都感到非常有成就感。我最喜欢的是利用迭代器在单行中编写函数以找到一个数字的阶乘。
- 👶 [Exercism](https://exercism.org/tracks/rust)有一个实践Rust的学习路径。我觉得这些练习的呈现方式很有趣。尽管我发现这些练习有点过于简单，这可能是因为我在学习的较晚时才发现这个资源。
-  👶 [Codewars](https://www.codewars.com/?language=rust)允许您与同行一起进行编程挑战。这很酷，可以帮助您磨练技能。我发现这对于弄清楚自己是否正确理解某些概念非常有用。
- 👶 [Coding Game](https://www.codingame.com/start)是一个基于游戏的学习编程网站，也支持Rust。我没有深入研究过它，但Coding Game有很多好评，因为它可以让学习变得有趣。
- 👶 [StackUp](https://app.stackup.dev/)是一个开发者社区，您可以在其中学习，并通过参与我们的活动和任务赚取收益。
- 👨👴 [Advent of Code](https://adventofcode.com/)是一年一度的活动，您可以在其中使用任何您想要的语言解决小型（但高质量的）编程难题。它适用于您正在学习的任何语言。您可能会发现这个、这个和这个存储库很有用，它们为前几年提供了模板和解决方案。
- 👶👨👴 [LeetCode](https://leetcode.com/)是一个流行的面试准备平台，有各种不同难度的代码问题需要解决。如果您遇到困难，还有各种仓库和开发者解决Rust代码问题的视频资源。

### 💲 Paid Resources
- 👶 [Egghead.io](https://egghead.io/q/rust)是以项目为导向的资源，通过为工作构建项目来帮助开发人员建立组合。有各种有趣的选项，其中之一是通过一个课程步入Rustlings练习。
- 👶 [Educative](https://www.educative.io/)有几个实践学习Rust的资源，其中一个与“[从新手到专业人士的Rust](https://www.amazon.com/Beginning-Rust-Professional-Carlo-Milanesi/dp/1484234677)”一书联系紧密。

## 3） YouTube Videos 📹
- 👶 [Rust教程](https://www.youtube.com/playlist?list=PLLqEtX6ql2EyPAZ1M2_C0GgVd4A-_L4_5)，由Doug Milford提供，是我最喜欢的资源之一。Doug做了很好的工作，解释了Rust中的许多棘手概念。视频还介绍了不同的代码示例和场景，以解释概念。
- 👶 [CS Honors @ Illinois](https://www.youtube.com/channel/UCRA18QWPzB7FYVyg0WFKC6g/featured)是另一个我喜欢的去参考概念的频道。这个视频系列是基于伊利诺伊大学厄巴纳-香槟分校的CS196（现在是CS124）大一课程，由学生主持。这些课程视频并不完全涵盖Rust，但对于那些涵盖Rust概念的视频，我发现它们非常有帮助。
- 👶 [Lets Get Rusty](https://www.youtube.com/c/LetsGetRusty/featured)是一个有用的频道，提供每周有关Rust的视频。它有一个漂亮的播放列表，按照“书”的章节一一介绍。虽然我有时觉得视频节奏很快，一些解释有些困难。
- 👶 [Brad Traversy的Rust速成课程](https://www.youtube.com/watch?v=zF34dRivLOw)是一个快速的介绍，向绝对初学者介绍各种概念。
- 👶 [Ryan Levick](https://www.youtube.com/channel/UCpeX4D-ArTrsqvhLapAHprQ)是一位曾在微软工作的工程师，他在Rust上工作，并提供了一系列有关某些概念的有用解释的视频。还有一个很酷的项目，Ryan使用Rust为Microsoft Flight Simulator 2020构建SDK。
- 👨 [timClicks](https://www.youtube.com/channel/UClny6qj9Mv7uFo9XGUGYQBA)是由Tim Mcnamara创建的频道，涵盖了Rust中的各种主题，并提供现场编码流。Tim也是前面提到的Rust in Action书的作者。
- 👶 [Free Code Camp](https://www.youtube.com/watch?v=MsocPEZBd-M&t=1820s)为Rust提供了一个初学者教程，通过CLI应用程序进行操作。虽然有点有用，但我没有花太多时间在这个上面，因为我很难听清音频质量，视频在手机上很难观看。
- 👴 [Jon Gjengset](https://www.youtube.com/channel/UC_iD0xppBwwsrM9DegC5cQQ)提供了一系列关于Rust概念的视频，但这些视频并不是真正的入门级，因为它们假设了一定的知识水平。这些视频在您变得更加熟悉Rust概念时可能会更好。话虽如此，在我更深入地了解Rust之后，这是我非常喜欢的频道。在视频中，Jon将选择Rust中的某个特定主题，并从几乎所有角度来解决它。不过要小心，这些视频可能非常长！每个视频的长度可能不少于一个小时。最长的视频长达7小时20分钟！
- 👶 [Code to the Moon](https://www.youtube.com/@codetothemoon/featured) 提供了很好的视频，澄清了 Rust 中的特定难点。
- 👶 [Noboilerplate](https://www.youtube.com/@NoBoilerplate/featured) 提供了有趣且快速的 Rust 技术视频。
- 👶 [Dcode](https://www.youtube.com/watch?v=vOMJlQ5B-M0&list=PLVvjrrRCBy2JSHf9tGxGKJ-bYAN_uDCUL) 提供了一些高质量的 Rust 编程教程播放列表。
- 👶 [300 秒 Rust](https://www.youtube.com/@300secondsofrust) 提供了不同 Rust 概念的精短视频。如果您想快速刷新或深入了解某个概念，这将是一个很好的资源。
- 👶 [The dev method](https://www.youtube.com/watch?v=pGh-0cMvH5g&list=PLAJ-sYO1aGdxQ_skPPtJ7PlSAjTXM-atv) 提供了 Rust 视频列表，解释了特定的概念。我发现解释非常清晰，很容易理解。

## 4） Git资源💾
- [Rust编程语言](https://github.com/rust-lang)是寻找与Rust语言和其箱库相关的大多数文档和指南的主要来源。
- [Awesome Rust](https://github.com/rust-unofficial/awesome-rust)是一个非常好的仓库，拥有大量Rust代码和资源的精选列表。您可以找到基于Rust构建的不同领域的完整应用程序。
- [Ferrous Systems](https://github.com/ferrous-systems)是一家Rust咨询公司，也是Rust生态系统的主要贡献者之一。在他们的仓库中，Ferrous公开提供所有培训材料（代码示例和幻灯片），包括他们的嵌入式培训课程。
- [Algorithms Rust](https://github.com/TheAlgorithms/Rust) git仓库提供了许多基本标准算法的代码示例，包括数据结构、排序和字符串等。如果您正在为工作面试做练习，这是一个非常好的资源。

## 5） 课程 👨‍🏫
- 👶 [《Rust 初步》](https://learn.microsoft.com/en-us/training/paths/rust-first-steps/?WT.mc_id=academic-29077-cxa)是由 Microsoft 提供的免费课程，提供 Rust 入门视角。
- 👶 [《Rust in Motion》](https://www.manning.com/livevideo/rust-in-motion)是由 Carol Nichols 和 Jake Goulding 提供的付费短视频课程。Carol Nichols 是前面提到的《Rust 编程语言》的合著者。视频介绍 Rust 的基本方面。
- 👶 [《Rust Essential Training》](https://www.linkedin.com/learning/rust-essential-training)是 LinkedIn 上提供的付费课程，评价很高。它涵盖了对初学者至关重要的 Rust 基本方面。

## 6） 小抄 📃

有多种选择，选择最适合您的即可
- [Rust 语言小抄](https://cheats.rs/)
- [Rust 初学者小抄](https://quickref.me/rust)
- [Rust 小抄](https://phaiax.github.io/rust-cheatsheet/)
- 《让我们变得生疏的 Rust》小抄，需要在这里[注册](https://letsgetrusty.com/)以获取新闻简报。

## 7）问题论坛 🙋‍♂️

提问显然是学习的关键部分。Rustaceans 的友好和乐于助人让它变得更好。对于下面列出的资源，令人惊喜的是，你可以非常快速地得到问题的答案（大多数时间几乎是立即得到答案）。

- [The Rust Programming Language Discord](https://discord.com/invite/rust-lang)
- [The Rust Programming Language Community Discord](https://discord.com/invite/rust-lang-community)
- [The Rust Programming Language Subreddit](https://www.reddit.com/r/rust/)
- 还有 [Rust 语言论坛](https://users.rust-lang.org/)，我个人没有使用，因为我在前面的论坛中找到了我需要的。

## 9） 播客 📻

以下是一些有用的播客，讨论 Rust 概念和有趣的主题。
- [New Rustacean](https://newrustacean.com/)
- [Rustacean Station](https://rustacean-station.org/)
- [Building with Rust](https://podcasts.apple.com/gb/podcast/building-with-rust/id1553513574)
- [Rust Game Dev](https://rustgamedev.com/)

## 9） 新闻通讯 📰

为了保持对 Rust 的了解，可以订阅以下一些新闻通讯。这些新闻通讯每周提供与 Rust 相关的一切信息的汇总。
- [Awesome Rust Weekly](https://rust.libhunt.com/newsletter?ref=inboxreads)
- [This week in Rust](https://this-week-in-rust.org/?ref=inboxreads)
- [Rust Weekly](https://discu.eu/weekly/rust/?ref=inboxreads)
- [Rust in Blockchain](https://rustinblockchain.org/?ref=inboxreads)

## 结论

学习 Rust 不是一件容易的事情，因此利用尽可能多的资源来确认已掌握的知识变得必要。在我的学习过程中，我遇到了许多我觉得有用的资源，并在这篇文章中进行了总结。希望学习者能够找到它有用。你的经历如何？你最喜欢的 Rust 学习资源是什么？在评论中分享你的想法。👇
