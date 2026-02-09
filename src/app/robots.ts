export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: "https://luis.outframe.dev",
  };
}
