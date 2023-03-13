export function parse(searchParams) {
  return Object.fromEntries([...searchParams]);
}

export function stringify(payload) {
  return "?" + new URLSearchParams(payload).toString();
}
