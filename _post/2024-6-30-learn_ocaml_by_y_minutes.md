---
title: "Learn Ocaml in Y Minutes"
date: 2024-6-30
---

OCaml 是一种经过严格评估的函数式语言，具有一些命令式功能。

它与标准 ML 及其方言一起属于 ML 语言家族。 F# 也深受 OCaml 的影响。

就像标准 ML 一样，OCaml 具有可交互使用的解释器和编译器。解释器二进制文件通常称为 ocaml ，编译器称为 ocamlopt 。还有一个字节码编译器 ocamlc ，但使用它的理由很少。

它还包括包管理器 opam 和构建系统 dune 。

它是强静态类型的，但它不使用手动编写的类型注释，而是使用 [Hindley-Milner](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system)
算法推断表达式的类型。在大多数情况下，它使得类型注释变得不必要，但可能是初学者困惑的一个主要根源。

当您处于顶层循环时，OCaml 将在您输入表达式后打印推断的类型

```ocaml
# let inc x = x + 1 ;;
val inc : int -> int = <fun>
# let a = 99 ;;
val a : int = 99
```

对于源文件，您可以使用 ocamlc -i /path/to/file.ml 命令打印所有名称和类型签名

```bash
$ cat sigtest.ml
let inc x = x + 1
let add x y = x + y

let a = 1

$ ocamlc -i ./sigtest.ml
val inc : int -> int
val add : int -> int -> int
val a : int
```

请注意，多个参数的函数的类型签名以[柯里化](https://en.wikipedia.org/wiki/Currying)形式编写。带有多个参数的函数可以表示为仅带有一个参数的函数的组合。上例中应用于参数 2 和 3 的 f(x,y) = x + y 函数相当于应用于 3 的 f0(y) = 2 + y 函数。因此有 int -> int -> int 签名。

```ocaml
(*** 注释 ***)

(*
  在OCaml中，注释是用 (* 和 *) 来包围的。OCaml支持嵌套注释，这意味着你可以在一个注释块中包含另一个注释块
*)

(*
  这是一个嵌套注释的示例
  (* 这是嵌套的注释 *)
  这里是外层注释的继续
*)

(*
  在OCaml中，确实没有单行注释的语法。所有的注释都使用 (* ... *) 的形式，并且可以跨多行
*)

(*** 变量与函数 ***)

(*
  在OCaml中，表达式可以用双分号 ;; 来分隔。在许多情况下，这种用法是多余的，但在一些教程中，
  为了方便将代码粘贴到解释器（REPL）中，会在每个表达式后使用 ;;。
  然而，在实际的源代码文件中，不必要地使用表达式分隔符通常被认为是不好的编程风格。
*)

(*
  在OCaml中，变量和函数的声明使用 let 关键字。这使得OCaml的声明语法非常简洁和一致。
*)
(*
  在OCaml中，变量默认是不可变的（immutable）。这意味着一旦为变量赋值，就不能再改变它的值。这种不可变性有助于确保程序的正确性和可预测性。
*)
let x = 10;;
(* print_endline (string_of_int x);; *)
Printf.printf "x = %d\n" x;;

(*
  在OCaml中，变量名可以包含字母、数字和下划线字符，但必须以字母或下划线字符开头。
  另外，OCaml对大小写敏感，因此变量名中的大小写字符是有区别的。
*)

(*
  OCaml确实允许在标识符中使用单引号字符。在这种情况下，单引号并没有特殊含义，它通常用于那些在其他语言中会使用诸如“foo_tmp”之类名字的情况。
*)
let foo = 1;;
let foo' = foo * 2;;
(* print_endline (string_of_int foo');; *)
Printf.printf "foo' = %d\n" foo';;

(*
  在OCaml中，编译器能够自动推断类型，因此通常不需要显式指定参数类型。然而，如果你希望或需要，你也可以显式地指定参数类型。
*)
let inc_int (x: int): int = x + 1;;
(* print_endline (string_of_int (inc_int 1));; *)
Printf.printf "inc_int 1 = %d\n" (inc_int 1);;

(*
  确实，在某些情况下，显式类型注解是必要的，特别是在解决两个具有相同字段名称的记录类型之间的歧义时。
  另一种选择是将这些类型封装在模块中，但这两个主题都超出了本教程的讨论范围。
*)

(*
  在OCaml中，递归函数定义需要使用 rec 关键字进行标记。
    这是因为OCaml采用了静态作用域规则，为了明确表示一个函数是递归的，需要显式地使用 rec 关键字。
*)
let rec factorial n =
  if n = 0 then 1
  else n * factorial (n - 1);;
(* print_endline (string_of_int (factorial 5));; *)
Printf.printf "factorial 5 = %d\n" (factorial 5);;

(*
  在OCaml中，函数是一等公民，这意味着函数可以作为参数传递给其他函数，也可以作为返回值返回。
  这种特性使得OCaml非常适合函数式编程范式，因为函数可以被视为数据，可以被操作和组合。
*)

(*
  在OCaml中，函数应用通常不需要在参数周围使用括号。这使得函数调用的语法更加简洁和自然。
*)
let fact_5 = factorial 5;;
(* print_endline (string_of_int fact_5);; *)
Printf.printf "factorial 5 = %d\n" fact_5;;

(*
  正确，在OCaml中，函数应用通常不需要在参数周围使用括号，除非参数是一个表达式。在这种情况下，使用括号可以明确表达式的边界，避免歧义。
*)
let fact_4 = factorial (2 + 2);;
(* print_endline (string_of_int fact_4);; *)
Printf.printf "factorial 4 = %d\n" fact_4;;

(*
  在OCaml中，函数可以有多个参数，这些参数可以用空格分隔。这种语法使得函数调用更加简洁和自然。
*)

(*
  在OCaml中，每个函数必须至少有一个参数。然而，有些函数在概念上不需要任何参数。
  为了处理这种情况，OCaml提供了一个特殊的类型，称为 unit 类型。unit 类型只有一个值，写作 ()。
*)
let print_hello () = print_endline "Hello, World!";;

(*
  在OCaml中，当调用一个接受 unit 类型参数的函数时，你必须显式地传递 () 作为参数。这是因为 unit 类型表示“无实际值”，但仍然需要满足函数签名的要求。
*)
print_hello () ;;

(*
  在OCaml中，函数调用是柯里化（currying）的，这意味着每个函数实际上只接受一个参数，并返回一个新的函数，该函数接受下一个参数。
  由于这种特性，当你调用一个函数但提供的参数不足时，不会导致错误，而是返回一个新的函数，等待剩余的参数。
*)
let make_inc x y = x + y;; (* make_inc is int -> int -> int *)
let inc_2 = make_inc 2;; (* inc_2 is int -> int *)
(* print_endline (string_of_int (inc_2 3));; *)
Printf.printf "inc_2 3 = %d\n" (inc_2 3);;

(*
  在OCaml中，函数调用是柯里化的，这意味着每个函数实际上只接受一个参数，并返回一个新的函数，该函数接受下一个参数。
  由于这种特性，你可以使用部分应用（partial application）来创建新的函数，这是一种非常强大的技术。
*)

(*
  在OCaml中，函数体可以包含多个表达式，其中最后一个表达式的值将作为函数的返回值。
  所有其他的表达式必须是 unit 类型。这种特性在编写命令式风格代码时非常有用，例如插入调试打印语句。
*)
let print_and_return x =
  print_endline (string_of_int x);
  x
;;
(* print_endline (string_of_int (print_and_return 42));; *)
Printf.printf "print_and_return 42 = %d\n" (print_and_return 42);;

(*
  在OCaml中，函数体可以包含多个表达式，其中最后一个表达式的值将作为函数的返回值。
  所有其他的表达式必须是 unit 类型。这种特性在编写命令式风格代码时非常有用，例如插入调试打印语句。
*)

(*
  在OCaml中，作为一种函数式编程语言，确实没有传统意义上的“过程”或者“子程序”。
  每个函数都必须返回一个值。对于那些主要是为了副作用而调用的函数，例如 print_endline，它们返回一个 unit 类型的值。
*)

(*
  在OCaml中，可以使用 let ... in 结构来链式定义多个变量，然后在表达式中使用它们。
  这类似于在命令式语言中将值赋给多个变量，然后在表达式中使用这些变量。
*)
let z = let x = 10 in
let y = 20 in
x + y;;
(* print_endline (string_of_int z);; *)
Printf.printf "z = %d\n" z;;

(*
  在OCaml中，可以使用 let ... in 结构来链式定义多个变量，然后在表达式中使用它们。
  这类似于在命令式语言中将值赋给多个变量，然后在表达式中使用这些变量。
*)

(*
  在OCaml中，除了使用链式的 let ... in 结构，还可以使用 let ... and ... in 结构来同时定义多个变量或函数。
  这在定义相互递归的函数时特别有用，因为使用普通的 let ... in 结构会导致编译器报错，指出存在未绑定的值。
*)
let rec
  is_even n = n = 0 || is_odd (n - 1)
and
  is_odd n = n <> 0 && is_even (n - 1);; (* 在OCaml中，<> 是不等于操作符，用于比较两个值是否不相等。它类似于其他编程语言中的 != 操作符。 *)
(* print_endline (string_of_bool (is_even 5));; *)
Printf.printf "is_even 5 = %b\n" (is_even 5);;


(*
解释:
  is_even 函数：
    如果 n 等于 0，则返回 true（n = 0）。
    否则，调用 is_odd 函数，传递 n - 1 作为参数。
  is_odd 函数：
    如果 n 不等于 0（n <> 0），则返回 true，并递归调用 is_even 函数，传递 n - 1 作为参数。
    否则，返回 false。
*)

(*
let rec
  is_even = function
    | 0 -> true
    | n -> is_odd (n - 1)
and
  is_odd = function
    | 0 -> false
    | n -> is_even (n - 1)
;;
*)

(* 在OCaml中，匿名函数（也称为lambda表达式）*)
let my_lambda = fun x -> x * x;;
(* print_endline (string_of_int (my_lambda 5));; *)
Printf.printf "my_lambda 5 = %d\n" (my_lambda 5);;

(*
  在OCaml中，匿名函数的语法是 fun x -> expr，其中 x 是参数，expr 是函数体。
  与普通函数不同，匿名函数不需要显式地指定参数类型，因为OCaml可以从上下文中推断出参数类型。
  但是，如果你想显式地指定参数类型，可以使用括号将参数类型括起来，例如 fun (x: int) -> expr。
*)

(*** 操作符 ***)

(*
  在OCaml中，操作符和函数之间的区别很小。实际上，每个操作符都可以作为函数调用。
  这种特性使得OCaml的操作符非常灵活，可以在需要函数的上下文中使用操作符。
*)

(+) 3 4 (* Same as 3 + 4 *);;
Printf.printf "3 + 4 = %d\n" ((+) 3 4);;

(*
  在OCaml中，操作符和函数之间的区别很小。实际上，每个操作符都可以作为函数调用。
  这种特性使得OCaml的操作符非常灵活，可以在需要函数的上下文中使用操作符。
*)

(*
  在OCaml中，整数和浮点数之间没有隐式转换。更有趣的是，OCaml使用不同的操作符来处理浮点数运算。
  这种设计决策有助于避免由于类型转换而导致的潜在错误，并确保程序的类型安全性。
*)

(* 12 + 3;; (* int addition *) *)
Printf.printf "12 + 3 = %d\n" (12 + 3);;
(* 12.0 +. 3.0;; (* float addition *) *)
Printf.printf "12.0 + 3.0 = %f\n" (12.0 +. 3.0);;
(* 12 / 3 ;; (* Integer division. *) *)
Printf.printf "12 / 3 = %d\n" (12 / 3);;
(* 12.0 /. 3.0 ;; (* Floating point division. *) *)
Printf.printf "12.0 / 3.0 = %f\n" (12.0 /. 3.0);;
(* 5 mod 2 ;; (* Remainder. *) *)
Printf.printf "5 mod 2 = %d\n" (5 mod 2);;


(*
  在OCaml中，一元负号（unary minus）是一个显著的例外，它是多态的。
  这意味着你可以使用相同的 - 操作符来表示整数和浮点数的负值。
  然而，OCaml也提供了专门用于整数和浮点数的一元负号形式。
*)
(* - 3 ;; (* Polymorphic, integer *) *)
Printf.printf "-3 = %d\n" (- 3);;
- 4.5 ;; (* Polymorphic, float *)
Printf.printf "-4.5 = %f\n" (- 4.5);;
(* ~- 3 (* Integer only *) *)
Printf.printf "~-3 = %d\n" (~- 3);;
(* ~- 3.4 (* Type error *) *)
(* Printf.printf "~- 3.4 = %f\n" ( ~- 3.4);; *)
(* ~-. 3.4 (* Float only *);; *)
Printf.printf "~-.3.4 = %f\n" ( ~-. 3.4);;

(*
  在OCaml中，你可以定义自己的操作符或重新定义现有的操作符。
  与Standard ML或Haskell不同，OCaml中只有某些符号可以用于操作符名称，
  并且操作符的首个符号决定了其结合性和优先级规则。
*)
(* let (+) a b = a - b ;; (* Surprise maintenance programmers. *) *)
(* print_endline (string_of_int (3 + 4));; *)
(* Printf.printf "3 + 4 = %d\n" (3 + 4);; *)

(*
  定义一个用于浮点数的倒数操作符是一个非常实用的例子。在OCaml中，一元操作符必须以 ~ 开头，因此我们可以定义一个新的操作符 ~% 来表示浮点数的倒数。
*)
let (~/) x = 1.0 /. x ;;
(* ~/4.0 (* = 0.25 *);; *)
(* print_endline (string_of_float (~/4.0));; *)
Printf.printf "~/.4.0 = %f\n" (~/4.0);;

(*** Built-in data structures ***)

(*
  在OCaml中，列表（Lists）使用方括号 [] 括起来，列表项之间用分号 ; 分隔。
*)
let my_list = [1; 2; 3; 4; 5];; (* Has type "int list" *)
(* print_endline (string_of_int (List.length my_list));; *)
Printf.printf "List.length my_list = %d\n" (List.length my_list);;

(* 打印每个元素 *)
List.iter (fun x -> Printf.printf "%d " x) my_list;;

(*
在OCaml中，元组（Tuples）可以（可选地）用圆括号 () 括起来，元组中的项用逗号 , 分隔。元组是一种固定大小、不同类型的集合。
*)
let first_tuple = 3, 4;; (* Has type "int * int" *)
let second_tuple = (3, 4);;

(* let third_tuple = (3, "hello", 4.5);; (* Has type "int * string * float" *) *)
(* print_endline (string_of_int (fst first_tuple));; *)
(* print_endline (string_of_int (snd first_tuple));; *)
(* print_endline (string_of_int (fst second_tuple));; *)
(* print_endline (string_of_int (snd second_tuple));; *)

(* 打印元组 *)
Printf.printf "fst first_tuple = %d\n" (fst first_tuple);;
Printf.printf "snd first_tuple = %d\n" (snd first_tuple);;
Printf.printf "fst second_tuple = %d\n" (fst second_tuple);;
Printf.printf "snd second_tuple = %d\n" (snd second_tuple);;


(*
  在OCaml中，如果你尝试用逗号 , 来分隔列表项，你将得到一个包含元组的列表，这通常不是你所期望的结果。
*)
let bad_list = [1, 2; 3, 4];; (* Has type "(int * int) list" *)
(* print_endline (string_of_int (List.length bad_list));; *)
Printf.printf "List.length bad_list = %d\n" (List.length bad_list);;

(* 打印每个元组 *)

List.iter (fun (x, y) -> Printf.printf "(%d, %d) " x y) bad_list;;


(*
  如果你尝试将一个元组模式匹配到一个列表中，你将得到一个类型错误。
  为了匹配一个元组，你需要将其括起来，就像你在定义元组时所做的那样。
*)

print_endline "";;

let incorrect_list = [1, 2, 3]

(* 打印两个列表 *)
let () =
  match incorrect_list with
  | [(a, b, c)] -> Printf.printf "Incorrect list: (%d, %d, %d)\n" a b c
  | _ -> Printf.printf "Incorrect list does not match expected pattern\n"

(*
  在OCaml中，数组（Arrays）使用 [| 和 |] 括起来，数组项之间用分号 ; 分隔。
  与列表不同，数组是可变的，这意味着你可以在数组中添加、删除或更新元素。
*)

(*
  如果在OCaml中试图用逗号 , 来分隔列表项，你会得到一个包含元组的列表，这通常不是你所期望的结果。
*)
let bad_list = [1, 2];; (* Has type "(int * int) list" *)
(* print_endline (string_of_int (List.length bad_list));; *)
Printf.printf "List.length bad_list = %d\n" (List.length bad_list);;

(* 打印每个元组 *)
List.iter (fun (x, y) -> Printf.printf "(%d, %d) " x y) bad_list;;

print_endline "";;

(*
  在OCaml中，可以使用 List.nth 函数来访问列表中的单个元素。List.nth 函数接收一个列表和一个索引，返回该索引处的元素。值得注意的是，OCaml列表的索引是从0开始的。
*)
Printf.printf "List.nth my_list 1 = %d\n" (List.nth my_list 1);;

(*
  在OCaml中，列表操作非常强大，尤其是通过高阶函数（higher-order functions）如 map 和 filter 可以方便地进行列表处理。
*)

let result_list = List.map (fun x -> x * 2) my_list;;
let rl = List.filter (fun x -> x mod 2 = 0) my_list;;

(* 打印每个元素 *)
List.iter (fun x -> Printf.printf "%d " x) result_list;;
print_endline "";;

(* 打印每个元素 *)
List.iter (fun x -> Printf.printf "%d " x) rl;;
print_endline "";;

(*
  在OCaml中，可以使用 :: 构造符（通常称为 "cons"）将一个元素添加到列表的开头。这个操作是非常常见的基本列表操作。
*)

let new_list = 1 :: [2; 3];;
(* 打印每个元素 *)
List.iter (fun x -> Printf.printf "%d " x) new_list;;
print_endline "";;

(*
  :: 构造符只能将单个元素添加到列表的开头。如果需要将两个列表结合起来，需要使用 @ 操作符，它可以将两个列表连接成一个新的列表。
*)

let combined_list = [1; 2] @ [3; 4];;
(* 打印每个元素 *)
List.iter (fun x -> Printf.printf "%d " x) combined_list;;
print_endline "";;

(*
  在OCaml中，可以使用 List.rev 函数来反转列表中的元素。
*)

let reversed_list = List.rev my_list;;
(* 打印每个元素 *)
List.iter (fun x -> Printf.printf "%d " x) reversed_list;;
print_endline "";;

(*
  在OCaml中，数组（arrays）是一种常用的数据结构，可以通过 |[]| 语法来定义和访问。与列表不同，数组允许你在常数时间内随机访问和修改元素。
*)
let my_array = [|1; 2; 3|];;

(* 打印每个元素 *)
Array.iter (fun x -> Printf.printf "%d " x) my_array;;
print_endline "";;

(*
  在OCaml中，可以通过索引来访问和修改数组中的元素。数组的索引从0开始，使用 array.(index) 语法来进行访问和修改。
*)

Printf.printf "my_array.(1) = %d\n" my_array.(1);;

(*** Strings and characters ***)

(*
  在OCaml中，字符串（strings）是一种不可变的数据结构，可以通过 "..." 语法来定义。字符串是由字符组成的列表，可以通过索引来访问和修改。
*)
let my_str = "Hello world!";;
Printf.printf "my_str = %s\n" my_str;;

(* 使用单引号表示字符字面值。 *)
let my_char = 'a' ;;
Printf.printf "my_char = %c\n" my_char;;

(* 单引号和双引号是不可互换 *)
(* let bad_str = 'syntax error';; (* Error: Syntax error *) *)

(*
  这会给你一个单字符的字符串，而不是一个字符。
*)
let single_cha_str = "a";;
Printf.printf "single_cha_str = %s\n" single_cha_str;;


(*
  在OCaml中,字符串可以使用"^"操作符进行连接。
*)
let some_str = "hello" ^ " " ^ "world";;
Printf.printf "some_str = %s\n" some_str;;

(*
  字符串不是字符数组。
  你不能在表达式中混合使用字符和字符串。
  你可以使用 "String.make 1 my_char" 将字符转换为字符串。
  在一些额外的库（如 Core.Std）中有更方便的函数用于这个目的，但这些库可能默认没有安装和/或加载。
*)
let ocaml = (String.make 1 'O') ^ "Caml";;
Printf.printf "ocaml = %s\n" ocaml;;

(*
  这是一个打印函数
*)
Printf.printf "%d %s\n" 99 "bottles of beer";;

(* 还有未格式化的读取和写入函数。 *)
print_string "Enter your name: ";;
(* print_endline "Hello world" ;; *)
let line = read_line ();;
Printf.printf "Hello, %s!\n" line;;

(*** 用户定义的数据类型 ***)

(*
  你可以使用 "type some_type =" 结构来定义类型。就像这个无用的类型别名：
*)
(* type my_int = int;; *)

(*
  更有趣的类型包括所谓的类型构造器。
  构造器必须以大写字母开头。
*)
type ml = Ocaml | StandardML ;;
let ocaml_lang = Ocaml ;; (* lang : ml = Ocaml *)
let sml_lang = StandardML ;; (* lang : ml = StandardML *)

(* Use Match deal with ML type *)
let match_ml = function
  | Ocaml -> Printf.printf "OCaml\n"
  | StandardML -> Printf.printf "Standard ML\n";;

match_ml ocaml_lang;;
match_ml sml_lang;;

(*
  你可以使用 "type some_type = | Constructor1 | Constructor2" 来定义一个枚举类型。
  枚举类型的值是有限的，只能是定义的构造器之一。
*)

(* 类型构造器不需要是空的。 *)
type my_number = PlusInfinity | MinusInfinity | Real of float ;;

let match_my_number = function
  | PlusInfinity -> Printf.printf "+∞\n"
  | MinusInfinity -> Printf.printf "-∞\n"
  | Real x -> Printf.printf "Real %f\n" x;;

let plus_inf = PlusInfinity ;; (* plus_inf : my_number = PlusInfinity *)
let minus_inf = MinusInfinity ;; (* minus_inf : my_number = MinusInfinity *)
let my_num = Real 3.14 ;; (* my_num : my_number = Real 3.14 *)

match_my_number my_num;;
match_my_number plus_inf;;
match_my_number minus_inf;;

(* 可以用来实现多态算术。*)
type number = Int of int | Float of float ;;
let match_number = function
  | Int x -> Printf.printf "Int %d\n" x
  | Float x -> Printf.printf "Float %f\n" x;;

let add a b = match (a, b) with
  | (Int x, Int y) -> Int (x + y)
  | (Float x, Float y) -> Float (x +. y)
  | (Int x, Float y) -> Float (float_of_int x +. y)
  | (Float x, Int y) -> Float (x +. float_of_int y);;


let int1 = Int 2 ;;
let int2 = Int 2 ;;
let sum = add int1 int2 ;;
match_number sum;; (* Int 0 why is zero *)
let float1 = Float 2.0 ;;
let float2 = Float 2.0 ;;
let sum = add float1 float2 ;;
match_number sum;;

(*
  平面上的点，本质上是一个类型受限的元组
*)

type point2d = Point of float * float ;;
let my_point = Point (3.0, 4.0) ;;

(*
let get_x = function
  | Point (x, _) -> x;;
let get_y = function
  | Point (_, y) -> y;;
*)
let display_point = function
  | Point (x, y) -> Printf.printf "(%f, %f)\n" x y;;

display_point my_point;;

(*
  类型可以被参数化，就像这个"任意类型的列表的列表"类型。'a 可以被任何类型替代。
*)

type 'a list_of_lists = 'a list list ;;
(* type int_list_of_lists = int list list ;; *)

let my_list = [[1; 2]; [3; 4; 5]] ;;
let my_list2 = [[1; 2]; [3; 4; 5]; [6; 7; 8]] ;;

let count_elements (ll : 'a list_of_lists) : int =
  List.fold_left (fun acc l -> acc + List.length l) 0 ll

let n_int = count_elements my_list ;;
Printf.printf "n_int = %d\n" n_int;;
let n_int2 = count_elements my_list2 ;;
Printf.printf "n_int2 = %d\n" n_int2;;

(*
  这些特性允许创建有用的可选类型
*)
type 'a option = None | Some of 'a ;;

let display_option = function
  | None -> Printf.printf "None\n"
  | Some x -> Printf.printf "Some %d\n" x;;

let x = Some 42 ;;
let y = None ;;

display_option x;;
display_option y;;

(*
  类型也可以是递归的。就像这个类型，它类似于内置的整数列表。
*)
type my_int_list = EmptyList | IntList of int * my_int_list ;;
let my_int_list = IntList (1, IntList (2, IntList (3, EmptyList))) ;;

let rec display_int_list = function
  | EmptyList -> Printf.printf "[]\n"
  | IntList (x, xs) -> Printf.printf "%d :: " x; display_int_list xs;;

display_int_list my_int_list;;

(* Trees *)

(*
  二叉树是一个递归的数据结构，它可以用一个节点和两个子树来定义。
  一个节点可以是一个叶子，也可以是一个有两个子节点的节点。
*)

type 'a tree = Leaf | Node of 'a tree * 'a * 'a tree ;;
let my_tree = Node (Node (Leaf, 2,  Leaf), 1 , Node (Leaf, 3, Leaf)) ;;

let rec display_tree = function
  | Leaf -> Printf.printf ""
  | Node (left, x, right) ->
    Printf.printf "%d " x;
    display_tree left;
    display_tree right;;

display_tree my_tree;;

print_endline "";;

(*
  Records
*)

(* 一个具有命名字段的值的集合 *)

(*
type animal =
  {
    name : string;
    age : int;
    species : string;
  };; (* type animal = { name : string; age : int; species : string } *)

let my_pet = {name = "Bobby"; age = 3; species = "Dog"} ;;

let display_animal a =
  Printf.printf "Name: %s\n" a.name;
  Printf.printf "Age: %d\n" a.age;
  Printf.printf "Species: %s\n" a.species;;

display_animal my_pet;;

*)

(*** Pattern matching ***)

(*
模式匹配在某种程度上类似于命令式语言中的switch语句，但提供了更强大的表达能力。

尽管看起来可能很复杂，但它实际上归结为将参数与精确值、谓词或类型构造器进行匹配。
类型系统是使它如此强大的原因。
*)

(* Matching exact values.  *)

let is_zero x = match x with
  | 0 -> true
  | _ -> false;; (* _ 是通配符 *)

Printf.printf "is_zero 0 = %b\n" (is_zero 0);;

(*
  或者，你可以使用 "function" 关键字。
  function 关键字是OCaml中用于创建匿名函数并立即进行模式匹配的简便方法。它等价于使用 match ... with 结构，但语法更加简洁。
*)

let is_zero = function
  | 0 -> true
  | _ -> false;;

Printf.printf "is_zero 0 = %b\n" (is_zero 0);;

(* 匹配谓词，也称为"带守卫的模式匹配"。 *)



let abs x =
  match x with
    | x when x < 0 -> -x
    | x -> x
;;

let result = abs (-3);;
Printf.printf "abs (-3) = %d\n" result;;

(* 匹配类型构造器 *)

type animal = Dog of string | Cat of string ;;

let say x =
  match x with
  | Dog x -> x ^ " says Woof!"
  | Cat x -> x ^ " say meow"
;;

let dog = say (Dog "Bobby");;
Printf.printf "%s\n" dog;;
let cat = say (Cat "mow");;
Printf.printf "%s\n" cat;;

(* 然而，模式匹配必须是穷尽的 *)
type color = Red | Green | Blue ;;
let what_color = function
  | Red -> "Red"
  | Green -> "Green"
  | Blue -> "Blue"
;;

let color_red = what_color Red;;
let color_green = what_color Green;;
let color_blue = what_color Blue;;
Printf.printf "color = %s\n" color_red;;
Printf.printf "color = %s\n" color_green;;
Printf.printf "color = %s\n" color_blue;;

(*
let what_color x =
   match x with
   | Red -> "color is red"
   | Blue -> "color is blue"
   (* Won't compile! You have to add a _ case or a Green case
      to ensure all possibilities are accounted for *)
;;
*)

(*
  另外，match语句按顺序检查每个情况。
  所以，如果一个 _ 情况出现在最前面，后面的所有情况都将无法被匹配到！
*)

(*
  如果没有穷尽模式匹配，OCaml会发出警告。
  为了避免这种情况，可以使用 "_" 通配符来匹配所有其他情况。
*)

(* 使用模式匹配遍历数据结构 *)

(*
  递归类型可以通过模式匹配轻松遍历。
  让我们看看如何遍历内置列表类型的数据结构。
  尽管内置的cons运算符（"::"）看起来像一个中缀运算符，
  但它实际上是一个类型构造器，可以像其他构造器一样进行匹配。
*)

(*
let rec sum_list l =
    match l with
    | [] -> 0
    | head :: tail -> head + (sum_list tail)
;;
*)
let rec sum_list = function
  | [] -> 0
  | x :: xs -> x + sum_list xs;;

let sum = sum_list [1; 2; 3; 4; 5];;
Printf.printf "sum = %d\n" sum;;

(*
  内置的cons语法稍微模糊了结构，所以我们将创建自己的列表来进行演示。
*)
type int_list = Nil | Cons of int * int_list ;;
let my_int_list = Cons (1, Cons (2, Cons (3, Cons (4, Nil)))) ;;

let rec sum_int_list = function
  | Nil -> 0
  | Cons (x, xs) -> x + sum_int_list xs;;
let sum = sum_int_list my_int_list;;
Printf.printf "sum = %d\n" sum;;

(*
  实现一个检查列表是否已排序的函数
*)
let rec is_sorted l = match l with
  | x :: y :: tail -> x <= y && is_sorted (y :: tail)
  | _ -> true;;

let sorted = is_sorted [1; 2; 3; 4; 5];;
Printf.printf "sorted = %b\n" sorted;;

(*
  OCaml强大的类型推断猜测 l 的类型是 int list，
  因为 <= 运算符被用于 l 的元素上
*)

(* 反转list *)
let rec rev (l: 'a list): 'a list =
  match l with
  | [] -> []
  | x :: xs -> rev xs @ [x];; (* @ 是连接操作符 *)

let reversed = rev [1; 2; 3; 4; 5];;
Printf.printf "reversed = %s\n" (String.concat " " (List.map string_of_int reversed));;
(* 这个函数可以适用于任何元素类型的列表 *)

(*** 高阶函数 ***)

(** 函数在OCaml中是一等公民 **)

let rec transform (f: 'a -> 'b) (l: 'a list): 'b list =
  match l with
  | [] -> []
  | x :: xs -> f x :: transform f xs ;;

let double = transform (fun x -> x * 2) [1; 2; 3; 4; 5];;
Printf.printf "double = %s\n" (String.concat " " (List.map string_of_int double));;

(*
  让我们来综合运用我们学到的所有概念
*)
let rec filter (pred: 'a -> bool) (l: 'a list): 'a list =
  begin match l with
  | [] -> []
  | x :: xs ->
    let rest = filter pred xs in
    if pred x then x :: rest else rest
  end
;;

(*
  在这里，in 后面使用的 rest 就是在 let 绑定中定义的 rest。让我详细解释：

  作用域：
    let 绑定创建了一个新的作用域。
    in 关键字后面的表达式是这个新作用域的主体。
  绑定顺序：
    首先，filter pred xs 被求值，其结果被绑定到 rest。
    然后，in 后面的表达式在知道 rest 的值的情况下被求值。
  rest 的使用：
    在条件语句 if pred x then x :: rest else rest 中，两次使用的 rest 都是指向刚刚通过 let 绑定创建的 rest。
  闭包效果：
    这种结构创建了一个小的闭包，其中 rest 在 if 语句中可用
*)

let result = filter (fun x -> x mod 2 = 0) [1; 2; 3; 4; 5];;
Printf.printf "result = %s\n" (String.concat " " (List.map string_of_int result));;

(*
  你可以使用高阶函数来创建更高阶的函数。
  例如，我们可以使用 filter 函数来实现一个函数，该函数接受一个谓词函数和一个列表，
  并返回一个新列表，其中包含所有满足谓词的元素。
*)

(*** Mutability ***)

(* 记录和变量是不可变的：你不能改变变量指向的对象 *)

(** 尽管 OCaml 主要强调不可变性，但它也提供了创建可变字段的能力，包括多态可变字段 **)

type counter = { mutable count: int };;
let c = { count = 0 };; (* 创建记录 *)
Printf.printf "c.count = %d\n" c.count;;
c.count <- 1;; (* 修改可变字段 *)
Printf.printf "c.count = %d\n" c.count;;

(*
  请注意，我们使用 <- 运算符来修改可变字段。
  请注意，我们使用 { count = 0 } 来创建记录。
  这是一种简写，它等同于 { count = 0; }。
*)

(* OCaml 的标准库确实提供了 ref 类型，这是一种更简单、更常用的方式来实现单字段的可变性。 *)

(* type 'a ref = { mutable contents: 'a };;*)
(*
  davirian@daviriandeMBP learn_x % dune exec learn_x
  File "bin/main.ml", line 843, characters 0-38:
  843 | type 'a ref = { mutable contents: 'a };;
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Error (warning 34 [unused-type-declaration]): unused type ref.

  File "bin/main.ml", line 843, characters 16-36:
  843 | type 'a ref = { mutable contents: 'a };;
  ^^^^^^^^^^^^^^^^^^^^
  Error (warning 69 [unused-field]): unused record field contents.

  这些警告出现的原因是：

  OCaml 标准库已经定义了 ref 类型，您不需要再次定义它。
  您的代码中使用的 ref、! 和 := 实际上是使用的标准库中的定义，而不是您自己定义的类型。
*)
let counter = ref 0;; (* 创建一个引用 *)
Printf.printf "counter.contents = %d\n" counter.contents;;
Printf.printf "counter.contents = %d\n" !counter;; (* 读取引用的内容 *)
counter := !counter + 1;; (* 修改引用的内容 *)
Printf.printf "counter.contents = %d\n" !counter;;

(*
  请注意，我们使用 := 运算符来修改引用的内容。
  请注意，我们使用 !counter 来读取引用的内容。
  请注意，我们使用 ref 0 来创建引用。
  这是一种简写，它等同于 { contents = 0; }。
*)
```

## 进一步阅读
- 访问官方网站获取编译器并阅读文档：[http://ocaml.org/](http://ocaml.org/)
- OCaml 快速教程：[https://ocaml.org/docs/up-and-running](https://ocaml.org/docs/up-and-running)
- 完整的在线 OCaml v5 游乐场：[https://ocaml.org/play](https://ocaml.org/play)
- 最新（2022 年）书籍（免费在线版本）“Real World OCaml”:[ https://www.cambridge.org/core/books/real-world-ocaml-functional-programming-for-the-masses/052E4BCCB09D56A0FE875DD81B1ED571](https://www.cambridge.org/core/books/real-world-ocaml-functional-programming-for-the-masses/052E4BCCB09D56A0FE875DD81B1ED571)
- 康奈尔大学在线互动教材《OCaml 编程：正确+高效+美丽》：[https://cs3110.github.io/textbook/cover.html](https://cs3110.github.io/textbook/cover.html)
- 尝试 OCaml Pro 的交互式教程和基于 Web 的解释器：[http://try.ocamlpro.com/](http://try.ocamlpro.com/)
