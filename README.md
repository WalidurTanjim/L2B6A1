# Level-2 Assignment-01 Q/A

This repository contains a collection of **TypeScript questions written in English and answered in Bangla**, including code examples.
The purpose of this document is to help Bangla-speaking learners understand important TypeScript concepts such as:

- Differences between **type** and **interface**
- Usage of **keyof**
- Difference among **any**, **unknown** and **never**
- Working with **enums**
- Examples of **union** and **intersection** types

All answers are short, simple, and easy to understand with real TypeScript code examples.
You can use this README as:
- A study note
- A quick reference guide
- An interview preparation sheet
- A learning resource for TypeScript in Bangla


## Blogs:

#### ❓ **Question 1:** What are some differences between **interfaces** and **types** in TypeScript?

✔ Answer 1:   
**Interfaces:**
-  **interface** কীওয়ার্ড দিয়ে ঘোষণা করা হয়
-  extends দিয়ে অন্য **interface** কে **extend** করতে পারে
-  একই নামে একাধিকবার **interface** লেখা যায় (auto-merge হয়)
-  **Object**, **Class** এর **structure** তৈরি করতে বেশি ব্যবহৃত হয়

```
interface User {
    name: string;
    age: number;
}

interface User {
    email: string;
}

const person: User = {
    name: "Rakib",
    age: 25,
    email: "test@mail.com"
};
```

**Type:**
- **type** কীওয়ার্ড দিয়ে ঘোষণা করা হয়
- **& (intersection)** দিয়ে অন্য টাইপ merge করা হয়
- একই নামে দ্বিতীয়বার **type** লিখলে **error** দেয়
- **Primitive**, **Union**, **Tuple**, **Function** সহ সব কিছুর জন্য ব্যবহার করা যায়

```
type Person = {
    name: string;
    age: number;
};

// Error: Duplicate identifier
// type Person = {
//      email: string;
// };

type Employee = Person & { salary: number };

const emp: Employee = {
    name: "Hasan",
    age: 30,
    salary: 50000
};
```


#### ❓ **Question 2:** What is the use of the **keyof** keyword in TypeScript? Provide an example.

✔ Answer 2: **keyof** ব্যবহার করা হয় কোনো object বা type এর সবগুলো key কে একটি ইউনিয়ন টাইপ হিসেবে পেতে। এটি সাধারণত type-safe access, dynamic key handling এবং generic utility function তৈরির জন্য ব্যবহৃত হয়।        

**সুবিধা:**
- ভুল key access বন্ধ করে
- object key গুলো auto-suggest করে 
- TypeScript কোডকে আরও নিরাপদ করে

- **keyof কীভাবে কাজ করে:**
```
type User = {
    name: string;
    age: number;
    email: string;
};

type UserKeys = keyof User;

// Output type: "name" | "age" | "email"
```

- **keyof দিয়ে type-safe function:**
```
function getValue(obj: User, key: keyof User) {
    return obj[key];
}

const user: User = {
    name: "Rakib",
    age: 25,
    email: "test@mail.com"
};

console.log(getValue(user, "email"));  // valid
// console.log(getValue(user, "salary")); // Error
```


#### ❓ **Question 3:** Explain the difference between **any**, **unknown** and **never** types in TypeScript.

✔ Answer 3:   
- **any:** যেকোনো টাইপ হতে পারে। TypeScript কোনো টাইপ চেক করে না। সবচেয়ে কম নিরাপদ
```
let data: any = 10;
data = "Hello";
data = true;

// কোনো টাইপ চেক হবে না
console.log(data.toUpperCase()); // error হতে পারে
```
- **unknown:** যেকোনো ডেটা রাখা যায়, কিন্তু ব্যবহার করার আগে টাইপ চেক করতে হয়। any এর চেয়ে নিরাপদ
```
let value: unknown = "Hello";

// সরাসরি ব্যবহার করা যাবে না
// value.toUpperCase(); // Error

if (typeof value === "string") {
    console.log(value.toUpperCase()); // Type safe
}
```

- **never:** এমন টাইপ যা কখনো ঘটে না। সাধারণত এমন function যার রিটার্ন হয় না (error বা infinite loop)
```
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}
```


#### ❓ **Question 4:** What is the use of **enums** in TypeScript? Provide an example of a numeric and string enum.

✔ Answer 4: **Enum** ব্যবহার করা হয় নির্দিষ্ট কিছু মানকে একটি গ্রুপে রাখার জন্য। এটি কোডকে **পঠনযোগ্য (readable)** এবং **টাইপ-সেফ (type-safe)** করে।

✨ TypeScript এ **numeric enums** এবং **string enums** দুই ধরনের **enum** আছে।  

- **numeric enum:**  
``` 
enum Direction {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT
}

console.log(Direction.UP);    // 1
console.log(Direction.DOWN);  // 2
console.log(Direction.LEFT);  // 3
```

- **string enum:**
```
enum Role {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

function checkRole(role: Role) {
    console.log(role);
}

checkRole(Role.ADMIN); // "admin"
checkRole(Role.USER);  // "user"
```

#### ❓ **Question 5:** Provide an example of using **union** and **intersection** types in TypeScript.

✔ Answer 5:   
**Union Type:** Union টাইপ ব্যবহার করলে একটি ভ্যারিয়েবল একাধিক টাইপের যেকোনো একটি মান নিতে পারে।   

``` 
let value: string | number;

value = "Hello"; // valid
value = 100;     // valid
// value = true; // invalid
```


**Intersection Type**: Intersection টাইপ ব্যবহার করলে একাধিক টাইপের সব প্রপার্টি একই ভ্যারিয়েবল এ থাকতে হবে।   

```
type Person = {
    name: string;
};

type Employee = {
    id: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
    name: "Hasan",
    id: 101
};
```