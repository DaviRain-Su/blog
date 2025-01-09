---
title: "About Rust Raw Pointer"
date: 2025-01-09
---

## Introduction

在Rust中可以使用原生指针，原生指针是一种裸指针，不受Rust的安全性检查限制。
原生指针有两种类型：`*const T`和`*mut T`，分别是不可变和可变的原生指针。

Rust提供了一个函数可以获取类型的大小：`std::mem::size_of::<T>()`。

## Example

这里提供了一个简单的例子，展示了如何使用原生指针。

```rust
let array: [i32; 5] = [1, 2, 3, 4, 5];
// size of array is 20，因为i32是4字节，所以数组大小是5*4=20，
// 这里直接使用std::mem::size_of_val(&array)也可以
println!("size of array: {}", std::mem::size_of_val(&array));
let raw = &array as *const [i32; 5];

// sizeof raw pointer
// output: size of raw pointer: 8
// because raw pointer is 64 bit
// 因为原生指针是64位，所以大小是8字节
println!(
    "size of raw pointer: {}",
    std::mem::size_of::<*const [i32; 5]>()
);
```

## 总结

原生指针是一种裸指针，不受Rust的安全性检查限制，可以直接操作内存。但是使用原生指针时需要特别小心，因为可能会导致内存安全问题。
