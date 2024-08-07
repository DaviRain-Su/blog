---
title: 关于在rust的程序中如何访问到提交的git commit
date: 2024-6-30
---

## Code example

```rust
use std::{borrow::Cow, process::Command};

fn main() {
	// Make git hash available via GIT_HASH build-time env var:
	output_git_short_hash();
}

fn output_git_short_hash() {
	let output = Command::new("git").args(["rev-parse", "HEAD"]).output();

	let git_hash = match output {
		Ok(o) if o.status.success() => {
			let sha = String::from_utf8_lossy(&o.stdout).trim().to_owned();
			Cow::from(sha)
		},
		Ok(o) => {
			println!("cargo:warning=Git command failed with status: {}", o.status);
			Cow::from("unknown")
		},
		Err(err) => {
			println!("cargo:warning=Failed to execute git command: {}", err);
			Cow::from("unknown")
		},
	};

	println!("cargo:rustc-env=GIT_HASH={}", git_hash);
	println!("cargo:rerun-if-changed=../.git/HEAD");
	println!("cargo:rerun-if-changed=../.git/refs");
	println!("cargo:rerun-if-changed=build.rs");
}
```

## 代码解释

这段代码的作用是使用 Rust 的 `std::process::Command` 模块来执行 Git 命令，从而获得当前代码库的 Git 哈希值，并将其设置为 GIT_HASH 环境变量。这个代码是通过在 Rust 项目根目录下创建 `build.rs` 文件来实现的。

下面是这个代码的工作原理：

1. 在 `build.rs` 文件中，定义了一个函数 `output_git_short_hash()`，它使用 Rust 的 `std::process::Command` 模块来执行 Git 命令，并将执行结果赋值给 output 变量。
2. 如果 Git 命令成功执行，函数将从 `output.stdout` 中获取 Git 哈希值，并将其保存在 `git_hash` 变量中。`Cow` 是 Rust 中的一个字符串类型，用于在运行时决定使用 `String` 还是 `&str` 来表示字符串。
3. 如果 Git 命令未成功执行，函数将输出一个警告信息，并将 `git_hash` 设置为 "unknown"。
4. 最后，函数将 `GIT_HASH` 环境变量设置为 `git_hash` 变量的值，并使用 `cargo:rerun-if-changed` 指令告诉 Cargo 什么情况下需要重新运行构建脚本。
	在本例中，当 ../.git/HEAD、../.git/refs 或 build.rs 文件发生变化时，Cargo 将重新运行构建脚本。
5. 在 `main.rs` 或其他 Rust 文件中，你可以使用 `std::env::var("GIT_HASH")` 来访问 GIT_HASH 环境变量，并获取 Git 哈希值。

总之，这段代码可以在 Rust 项目中通过执行 Git 命令获取 Git 哈希值，并将其设置为环境变量，从而方便其他 Rust 文件访问该值。

第四步使用了 `cargo:rerun-if-changed` 指令来告诉 Cargo 什么情况下需要重新运行构建脚本。
这个指令是 Rust 的编译器 Cargo 提供的一个特殊注释，用于控制项目的构建和重新构建行为。

具体来说，`cargo:rerun-if-changed` 指令的作用是告诉 Cargo 某些文件的改动会导致项目需要重新构建，这样 Cargo 就可以在这些文件发生变化时自动重新运行构建脚本。指令的语法如下：

```bash
cargo:rerun-if-changed=<filename>;
```
其中 `filename` 表示需要监视的文件名或文件夹名，可以使用相对或绝对路径。

在这个例子中，`cargo:rerun-if-changed` 指令告诉 Cargo 在以下情况下需要重新运行构建脚本：

- 当 `../.git/HEAD` 文件发生变化时。
- 当 `../.git/refs` 文件夹下的任何文件发生变化时。
- 当 `build.rs` 文件发生变化时。
- 这些文件的变化通常意味着 Git 代码库发生了变化，因此需要重新获取 Git 哈希值并重新编译项目。

需要注意的是，`cargo:rerun-if-changed` 指令只能在 `build.rs` 文件中使用，而且必须放在一个单独的行中，不能和其他代码混在一起。这是因为指令实际上是一种注释，不是 Rust 代码，所以不能包含在函数、结构体或其他 Rust 语言结构中。
