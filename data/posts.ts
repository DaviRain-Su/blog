export interface Post {
  id: string
  title: string
  description: string
  date: string
  category: string
  slug: string
}

export const posts: Post[] = [
  {
    id: '1',
    title: '禅者的初心📒',
    description: '1. 是智慧在追寻智慧。 2. 初学者的心是开放的，而行家的心是收紧的。 3. 我们的本心内含万物，它本自具足。 4. 如果你的心是空的，它可以随时接受任何事物；它向所有的事物开放。初学者的心是开放的，而行家的心是收紧的。 5. 分别心太重，是自我束缚。太过苛刻和贪婪，你的心便不会丰饶富足。而失去了本自具足的心，我们会失守所有的戒律。 6. 当我们没有成就的思想，没有自我的思想，我们就是真正的初学...',
    date: 'FEB 2025',
    category: 'Tech',
    slug: 'chanzhe'
  },
  {
    id: '2',
    title: 'TingHu语录📒',
    description: '1. 大多数人最后跑不赢比特币这句话我都不知道讲了多少次了 实际上最后很多人还亏钱 。 如果你指望我通过推荐你买小山寨跑赢比特币，那还是别关注我了，我没有办法给出我认为合理的建议。 2. 现在说也许还早，但是大家可以记住这一条，年底筛选投资标的的时候， 2019-2021这轮牛市表现一般的老币，全部不作为目标，也许有个别会例外， 但是，不值得浪费时间，除非你有一双慧眼。放了那么多水都没拉起来的老币...',
    date: 'FEB 2025',
    category: 'Tech',
    slug: 'T'
  },
  {
    id: '3',
    title: 'About Rust Raw Pointer',
    description: 'Introduction 在Rust中可以使用原生指针，原生指针是一种裸指针，不受Rust的安全性检查限制。 原生指针有两种类型： const T 和 mut T ，分别是不可变和可变的原生指针。 Rust提供了一个函数可以获取类型的大小： std::mem::size_of::<T> 。 Example 这里提供了一个简单的例子，展示了如何使用原生指针。 rust let array: i32;...',
    date: 'JAN 2025',
    category: 'Tech',
    slug: 'rust-raw-pointer'
  },
  {
    id: '4',
    title: '学习Ocaml的资源',
    description: '- Introduction to Objective Ocaml http://courses.cms.caltech.edu/cs134/cs134b/book.pdf Objective Caml 简介。 - OCaml from the Very Beginning https://ocaml-book.com/ 一本非常温和的教科书，推荐用于本课程。本书的 PDF 和 HTML 格式都是...',
    date: 'JUL 2024',
    category: 'Tech',
    slug: 'earn-ocaml-sources'
  },
  {
    id: '5',
    title: 'About Rust tips',
    description: '在rust中如何为本crates中的类型带有可选的feature编写测试 在 Rust 中，如果你想为你的 crate 中的类型编写带有可选的 feature 的测试，你可以使用 cfg_attr 属性和 cfg feature = "feature_name" 属性来做到这一点。 以下是一个例子： rust // 在lib.rs或者main.rs中 cfg feature = "feature_...',
    date: 'JUN 2024',
    category: 'Tech',
    slug: 'ust-tips'
  },
  {
    id: '6',
    title: 'Rust Resources Every Learner Should Know in 2023',
    description: '去年，我开始学习Rust，主要是为了应用于嵌入式系统。当时，我也在一篇名为“ 35个Rust学习资源，每个初学者在2022年都应该知道 https://apollolabsblog.hashnode.dev/35-rust-learning-resources-every-beginner-should-know-in-2022 ”的帖子中分享了我所遇到的所有学习材料。自那时以来，我并没有停止学习...',
    date: 'JUN 2023',
    category: 'Tech',
    slug: 'ust-sources'
  },
  {
    id: '7',
    title: 'Rust no-std',
    description: '改写 std 的库为支持 no_std 的库及写出一个支持 std 和 no_std 库的经验谈 github repo https://github.com/DaviRain-Su/rust-no-std-source 。 简介 首先介绍 std 和 no_std 的区别，然后介绍使用 no_std 库的方式，由于支持 no_std 的特性有两种不同的方式，因此使用 no_std 库也有两种方式...',
    date: 'JUN 2024',
    category: 'Tech',
    slug: 'ust-no-std'
  },
  {
    id: '8',
    title: 'Nothing in Rust',
    description: 'Outline - 我假装这里有东西，但实际上没有。 - PhantomData - 这里现在是空的 - Null - Option::None - 这里永远不会有东西。 - The empty tuple - 我会让你一直等到时间的尽头，空手而归。 - The never type 这是一个关于 Rust 语言中表达“nothing”的一些方式的短篇选集。 在编程中，“nothing”这个概念有...',
    date: 'JUN 2024',
    category: 'Tech',
    slug: 'otion-in-rust'
  },
  {
    id: '9',
    title: 'Learn Ocaml in Y Minutes',
    description: 'OCaml 是一种经过严格评估的函数式语言，具有一些命令式功能。 它与标准 ML 及其方言一起属于 ML 语言家族。 F 也深受 OCaml 的影响。 就像标准 ML 一样，OCaml 具有可交互使用的解释器和编译器。解释器二进制文件通常称为 ocaml ，编译器称为 ocamlopt 。还有一个字节码编译器 ocamlc ，但使用它的理由很少。 它还包括包管理器 opam 和构建系统 dune ...',
    date: 'JUN 2024',
    category: 'Tech',
    slug: 'earn_ocaml_by_y_minutes'
  },
  {
    id: '10',
    title: '翻译-区块链间通信协议:概述',
    description: 'Abstract 区块链间通信协议（IBC）是一个端到端的、面向连接的、有状态的协议，用于在独立的分布式账本上的模块之间进行可靠、有序和认证的通信。IBC是为异质账本之间的互操作而设计的，这些账本排列在一个未知的动态拓扑结构中，以不同的共识算法和状态机运行。该协议通过指定足够的数据结构、抽象和通信协议的语义来实现这一点，一旦被参与的账本实施，它们就可以安全地进行通信。IBC与有效载荷无关，并提供了...',
    date: 'JUN 2024',
    category: 'Tech',
    slug: 'bc'
  },
  {
    id: '11',
    title: '关于在rust的程序中如何访问到提交的git commit',
    description: 'Code example rust use std::{borrow::Cow, process::Command}; fn main { // Make git hash available via GIT_HASH build-time env var: output_git_short_hash ; } fn output_git_short_hash { let output = Comm...',
    date: 'JUN 2024',
    category: 'Tech',
    slug: 'ow-to-get-commit-in-rust'
  },
  {
    id: '12',
    title: 'History of Lossless Data Compression Algorithms',
    description: '1 Introduction 有两种主要的压缩算法类型：有损和无损。有损压缩算法通常涉及减小文件的大小，通过删除需要大量数据以保持完整保真度的细节。在有损压缩中，由于删除了关键数据，不可能恢复原始文件。有损压缩最常用于存储图像和音频数据，并且虽然可以通过数据删除实现非常高的压缩比，但本文不涵盖此类压缩算法。无损数据压缩是将文件大小减小，以便解压缩功能可以完全恢复原始文件并且不会丢失数据。无损数据压...',
    date: 'JUN 2024',
    category: 'Tech',
    slug: 'ldca'
  },
  {
    id: '13',
    title: 'Git Fork and Upstreams ：如何去做一个很酷的技巧',
    description: 'Fork 项目来进行自己的修改，可以让你轻松地整合自己的贡献，但是如果你没有将这些修改发回上游 - 也就是发回父亲仓库 -- 你就有可能失去对他们的跟踪，这可能会导致你的版本库中出现不同的线路。为了确保所有贡献者都从同有个地方获取信息，你需要了解一些关于 git forking 与 git upstream 如何交互的原理。在这篇博客中，我将向你介绍基础知识，疑难杂症，甚至给你留下一个很酷的小技巧...',
    date: 'JUN 2024',
    category: 'Tech',
    slug: 'it-frok'
  },
  {
    id: '14',
    title: 'Crypto-currency in bitcoin',
    description: '哈希 大家应该都比较熟悉哈希函数的工作原理，密码学中用到的哈希函数被称为crypto-graphic hash function. 它有两个重要的性质：一个叫做collision resistance. 这个地方的collision是指哈希碰撞。 如果有两个输入 x, y且 x ≠ y , hash函数是H v , 但是H x = H y .这就叫做哈希碰撞。 两个不同的输入算出来的哈希值是相等的...',
    date: 'JUN 2024',
    category: 'Tech',
    slug: 'rypto-currency-in-bitcoin'
  },
  {
    id: '15',
    title: '星荣英语01',
    description: '- I like the food. - I don\'t like the food. - I like to do it. - I don\'t like to do it. - I like to do it now. - I don\'t like to do it now. - I like to be here. - I don\'t like to be here. - I don\'t li...',
    date: 'DEC 2024',
    category: 'Tech',
    slug: 'learning01'
  },
  {
    id: '16',
    title: 'Machine Learning And Algorithmic Trading(Textbook)',
    description: '机器学习和算法交易 教材 红色标记的内容是可选的,因为这些内容主要是对之前黑色文本部分的补充和扩展。这取决于你想学习的难度和速度! 你应该先完成第一本教材,然后再决定是先学习机器学习部分还是衍生品部分,当然你也可以同时学习这两部分。 这两个领域有一些交叉点,我个人更偏爱前者 机器学习 ,不过它们实际上是相互独立的,学习其中一个并不需要另一个领域的知识。 所有教材都提供了亚马逊链接,但要注意避免使用...',
    date: 'DEC 2024',
    category: 'Tech',
    slug: 'machine_learning_and_algo_trading'
  },

]

export const stats = {
  totalPosts: posts.length,
  categories: Array.from(new Set(posts.map(p => p.category))).length
}