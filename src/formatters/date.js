export const formatLongDateTime = new Intl.DateTimeFormat(
  typeof navigator !== "undefined" ? navigator.languages : "en",
  {
    dateStyle: "full",
    timeStyle: "medium",
  }
).format
