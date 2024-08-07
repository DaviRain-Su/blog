---
title: Nothing in Rust
date: 2024-6-30
---

## Outline

- 我假装这里有东西，但实际上没有。
    - PhantomData
- 这里现在是空的
    - Null
    - Option::None
- 这里永远不会有东西。
    - The empty tuple
- 我会让你一直等到时间的尽头，空手而归。
    - The never type

这是一个关于 Rust 语言中表达“nothing”的一些方式的短篇选集。

在编程中，“nothing”这个概念有几种不同的解释：

- “我假装这里有东西，但实际上没有。”
- “这里现在是空的。”
- “这里永远不会有东西。”
- “我会让你一直等到时间的尽头，空手而归。”

虽然这听起来像是我的前任说的最后一句话，但我很好。

## 我假装这里有东西，但实际上没有。(“I’m pretending like there’s something here, but there actually isn’t.”)

### PhantomData

Rust标准库中有很多高质量的代码，但是很少有像`std::marker::PhantomData`这样纯净优雅的示例。（它的实现和`std::mem::drop`一样优雅纯粹。）

`PhantomData<T>`是一种零大小的类型，无论T是什么。这就像对编译器撒一个小谎言：你声称持有一个`T`，但实际上并不是。与一些谎言不同，这实际上有益于代码。

在实践中，我看到它主要用于两种情况：

1. 持有生命周期说明符，限制其包含的结构体的生命周期。这对于将生命周期人为地附加到原始指针上可能很有用。

```rust
struct PointerWithLifetime<'a, T> {
    pointer: *const T,
    _marker: std::marker::PhantomData<&'a ()>,
}
```

2. 为了模拟持有类型T的值，当实际值由另一个系统持有（或管理）时。您可能会在与非传统存储模型或FFI交互时看到这种情况。

```rust
mod external {
    pub fn get(location: u64) -> Vec<u8> { /* ... */ }
}

struct Slot<T> {
    location: u64,
    _marker: std::marker::PhantomData<T>,
}

impl<T: From<Vec<u8>>> Slot<T> {
    fn get(&self) -> T {
        T::from(external::get(self.location))
    }
}
```

## 这里现在是空的。（“There is nothing here now.”）

### Null

> There’s no null in Rust.

你被欺骗了，可能还被控制了。我懂的。“哦，Null 没有任何问题。”

在安全的 Rust 中这是正确的。

然而，有时需要拔掉创可贴，探究表面下正在发生的事情。

```rust
let n: *const i32 = std::ptr::null();
unsafe {
    println!("{}", *n); // Segmentation fault
}
```

（提醒：原始指针只能在不安全的代码块中进行解引用。）

Rust 的设计使您很少需要深入研究指针操作。您可能会在与 C 代码交互时或者在使用 Rust 重写 Quake III 时遇到原始指针（*const 和 *mut 类型）。

### Option::None

标准库提供了 `Option` 枚举类型，其中包含两个变体 `Some` 和 `None`。这是表示可能存在或不存在的值的推荐方式，
而不是使用空指针。它就像一个小的安全包装器，您应该使用它，除非您知道自己在做什么并准备好了后果，或者是单独工作。

但是，使用空指针和使用 `None` 之间存在显着差异。首先，`Option<T>` 是一个拥有的类型，
而原始指针只是指向内存中的一些空间。这意味着，除了在使用原始指针时必须小心的不安全操作和所有其他事项之外，`None` 的大小可以变化，
适应它所包围的东西的大小。它只是一个枚举类型 `Option<T>` 的变体，如果 `T` 是 `Sized`，
则任何 `Option<T>` 值都至少与 `T` 一样大，包括 `None`。而 `*const T` (当 `T: Sized` 时) 总是与 `usize` 相同大小。

Type	| Size
`*const T`	| 8 (platform-dependent)
`Option<&T>`	|8 (platform-dependent)
`Option<std::num::NonZeroU8>`	|1
`Option<u8>`	| 2
`Option<std::num::NonZeroU32>`	| 4
`Option<u32>`	| 8
`Option<std::num::NonZeroU128>`	| 16
`Option<u128>`	| 24

## 这里永远不会有东西（“There will never be anything here.”）

### The empty tuple

空元组写作空括号 `()`。

我曾经写过 Java 代码。虽然不是完美的，但至少很有品位。在 Java 中，具有 void 返回类型的方法不返回值，无论您给出什么或多少内容。

空元组在 `Rust` 中具有类似的作用：不返回实际值的函数隐式返回空元组。但是，它的用途比这更加多样化。

由于空元组是一个值（尽管是没有内容且大小为零的值），也是一种类型，
因此有时将其用于参数化 Result 类型以表示一个不提供有意义反馈的易错函数可能会很有用。

```rust
impl Partner {
    fn process_request(&mut self, proposition: Proposition) -> Result<(), (u32, RejectionReason)> {
        use std::time::{SystemTime, Duration};
        use chrono::prelude::*;

        self.last_request = SystemTime::now();

        if SystemTime::now().duration_since(self.last_request).unwrap() < Duration::from_secs(60 * 60 * 24 * 7) {
            Err((429, RejectionReason::TooManyRequests))
        } else if proposition.deposit < self.minimum_required_deposit {
            Err((402, RejectionReason::PaymentRequired))
        } else if SystemTime::now().duration_since(self.created_at).unwrap() < Duration::from_secs(60 * 60 * 24 * 366 * 18) {
            Err((451, RejectionReason::UnavailableForLegalReasons))
        } else if Local::now().hours() < 19 {
            Err((425, RejectionReason::TooEarly))
        } else if Local::now().hours() > 20 {
            Err((503, RejectionReason::ServiceUnavailable))
        } else if proposition.len() >= 6 {
            Err((413, RejectionReason::ContentTooLarge))
        } else if !proposition.flushed() {
            Err((409, RejectionReason::Conflict))
        } else if !matches!(proposition.origin_address, Location::Permanent(..)) {
            Err((417, RejectionReason::ExpectationFailed))
        } else {
            Ok(())
        }
    }
}
```

## 我会让你一直等到时间的尽头，空手而归。(“I’m going to leave you, waiting here, empty-handed, until the end of time.”)

### The never type

如何调用一个函数的返回类型，它不仅不返回值，而且根本永远不会返回？
嗯，您可以尝试所有传统方法都无济于事 - 您将永远无法在那一点之后继续，因此需要一些精细的处理。

这就是所谓的“never”类型。以下是几种遇到它的方式

```rust
let never_loop = loop {}; // loop never exits
let never_panic = panic!(); // panic terminates execution

let value: u32 = match Some(1) {
    Some(x) => x,
    None => return, // `return` is of type never
};
```

虽然语法仍处于实验阶段，但“never”类型用感叹号 ! 表示。与此同时，您可以使用 Infallible 作为替代。

当实现一个具有您永远不需要的关联类型的 trait 时，“never”类型可能会很有用。再次以 Result 为例：

```rust
trait FailureLogProvider {
    type Error;
    fn get_failure_logs(&self) -> Result<Vec<FailureLog>, Self::Error>;
}

impl FailureLogProvider for Partner {
    type Error = !;
    fn get_failure_logs(&self) -> Result<Vec<FailureLog>, Self::Error> {
        Ok(self.failure_log)
    }
}
```

在示例中的函数实现始终成功，但是 trait 允许实现失败。为了表示这一点，关联的 Error 类型是“never”类型。

[原文](https://geeklaunch.io/blog/nothing-in-rust/)
