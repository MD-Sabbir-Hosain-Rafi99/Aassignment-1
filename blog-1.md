1. Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.
Ans: any use korle TypeScript type checking kore na.
let value: any = "Hello";
value.toUpperCase();

unknown use korle age type check korte hoy.
let value: unknown = "Hello";
if (typeof value === "string") {
  value.toUpperCase();
}
Eita code k safe rakhe.