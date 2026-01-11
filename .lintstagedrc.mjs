export default {
  "*.{js,jsx,ts,tsx}": (filenames) => ["turbo run lint --filter=...[HEAD]", `prettier --write ${filenames.join(" ")}`],
};
