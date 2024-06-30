---
title: About Rust tips
date: 2024-6-30
---

## 在rust中如何为本crates中的类型带有可选的feature编写测试

在 Rust 中，如果你想为你的 `crate` 中的类型编写带有可选的 `feature` 的测试，你可以使用`cfg_attr`属性和`#[cfg(feature = "feature_name")]`属性来做到这一点。

以下是一个例子：

```rust
// 在lib.rs或者main.rs中
#[cfg(feature = "feature_name")]
pub struct MyStruct {
    // ...
}

#[cfg(test)]
mod tests {
    #[test]
    #[cfg(feature = "feature_name")]
    fn test_my_struct() {
        // 在这里写你的测试
    }
}
```


在这个例子中，`MyStruct`只有在`feature_name`被启用时才会被定义，同样，`test_my_struct`测试也只有在`feature_name`被启用时才会被运行。

要运行这个测试，你需要使用以下命令，其中`my_crate`是你的 `crate` 的名字：

```bash
cargo test --features feature_name
```

这个命令会启用`feature_name`特性并运行所有的测试，包括依赖于这个特性的测试。

## 将 Vec<Result<T>, E> 转换为 Result<Vec<T>, E>

要将 `Vec<Result<T, E>>` 转换为 `Result<Vec, E>`，可以使用 `Iterator trait` 中的 `try_fold ()` 方法。下面是一个示例实现：

在这里，我们使用 `into_iter ()` 将 `Vec` 转换为迭代器。然后调用 `try_fold ()`，传入一个初始值 `Vec::new ()` 和一个闭包，该闭包接受两个参数：一个累加器（`acc`）和一个 `Result（res）`。

```rust
fn vec_result_to_result_vec<T, E>(v: Vec<Result<T, E>>) -> Result<Vec<T>, E> {
    v.into_iter().try_fold(Vec::new(), |mut acc, res| {
        match res {
            Ok(t) => {
                acc.push(t);
                Ok(acc)
            },
            Err(e) => Err(e)
        }
    })
}
```

闭包模式匹配 `Result` 变体，将 `Ok` 值推入 `acc` 向量并返回 `Ok (acc)`，如果 `Result` 是 `Err`，则返回 `Err (e)`。`try_fold ()` 方法将继续迭代迭代器中的剩余项，并将更新后的累加器值传递给每个后续调用闭包的调用。

如果原始 `Vec` 中的任何 `Result` 是 `Err`，则 `try_fold ()` 将短路并返回遇到的第一个 `Err`。否则，它将返回带有解包的 `T` 值的 `Vec` 的 `Ok (acc)`。

## Rust十进制和16进制之间的互相转换

在 Rust 中，可以使用 `format!()` 宏将十进制数格式化为十六进制字符串。下面是一个简单的示例实现：

```rust
fn decimal_to_hex(decimal: u32) -> String {
    format!("{:X}", decimal)
}
```

这里使用了 `{}` 格式化字符串，它将无符号十进制数转换为大写十六进制字符串。例如，将数字 123456789 转换为十六进制字符串，可以这样调用函数：

```rust
let hex_string = decimal_to_hex(123456789);
println!("{}", hex_string); // 输出: "75BCD15"
```

注意，如果要处理更大的数字，可以使用 u64 或 u128 类型。如果需要将十六进制字符串转换回十进制数字，则可以使用 `u64::from_str_radix ()` 函数。

## and_then 和 map在使用上有什么区别

在 Rust 中，and_then 和 map 都是用于在对 Option 或 Result 进行转换时使用的方法，但它们的使用方式有所不同。

map 方法将一个 Option或 Result<T, E> 映射到一个新的 Option或 Result<U, E>，其中函数闭包中的操作是应用于 Option 或 Result 中包含的值的。如果原始值是 None 或 Err，则映射函数将不会被执行，而是直接返回一个新的 None 或 Err。

例如，下面是使用 map 方法将 Option中的值加倍的示例：

and_then 方法在使用上与 map 类似，但是，它的返回值类型是 Option或 Result<U, E> 而不是 U。在 and_then 的闭包中，我们必须返回一个新的 Option 或 Result，而不是直接返回一个值。这意味着 and_then 可用于将一个 Option 或 Result 转换成另一个 Option 或 Result，同时也可以进行一些逻辑测试。

```rust
let some_number = Some(5);
let doubled = some_number.map(|x| x * 2);
assert_eq!(doubled, Some(10));
```


例如，下面是一个使用 and_then 方法将 Option中的值乘以 3 的示例，如果该值小于 10，则返回 None：

在上面的示例中，我们在 and_then 的闭包中测试了 some_number 是否小于 10。如果是，则返回 None，否则返回 Some (x * 3)，其中 x 是原始 Option中的值。在第一个示例中，some_number 的值为 5，因此，闭包返回 None，导致整个表达式返回 None。在第二个示例中，some_number 的值为 11，因此，闭包返回 Some (33)，导致整个表达式返回 Some (33)。

```rust
let some_number = Some(5);
let result = some_number.and_then(|x| {
    if x < 10 {
        None
    } else {
        Some(x * 3)
    }
});
assert_eq!(result, None);

let some_number = Some(11);
let result = some_number.and_then(|x| {
    if x < 10 {
        None
    } else {
        Some(x * 3)
    }
});
assert_eq!(result, Some(33));
```

因此，在使用时，map 用于简单的值转换，而 and_then 用于更复杂的操作和逻辑测试。
