# TypeScript Type Error with Array Argument

This repository demonstrates a common TypeScript error involving type mismatches when passing arrays to functions expecting specific argument types.

## The Bug

The `bug.ts` file contains a function `greeter` that expects a string. However, it's called with an array of strings which leads to a compilation error.

## The Solution

The `bugSolution.ts` file presents several approaches to fix the bug: iterating through the array and handling the array as input.