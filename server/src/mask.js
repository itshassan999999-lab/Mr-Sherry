// Removes personal data from chat text before anything is sent to the AI.
// Pattern based: catches emails, phones, card-like numbers, passwords, keys and
// one-time codes. It cannot catch every name or street address.
const PATTERNS = [
  [/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, "[email]"],
  [/\b(?:\d[ -]?){13,19}\b/g, "[card number]"],
  [/(?:\+?\d{1,3}[\s.-]?)?(?:\(\d{2,4}\)|\d{2,4})[\s.-]?\d{3,4}[\s.-]?\d{3,4}\b/g, "[phone]"],
  [/\b(password|passcode|pwd|pw)\b(\s*(?:is|:|=)\s*|\s+)\S+/gi, "$1: [hidden]"],
  [/\b(code|otp|verification code|2fa code)\b(\s*(?:is|:|=)\s*)\d{4,8}\b/gi, "$1$2[code]"],
  [/\b(?:sk|pk|pit|rk|whsec|xox[abp])[-_][A-Za-z0-9_-]{12,}\b/g, "[secret]"],
  [/\bey[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g, "[secret]"],
  [/\b\d{3}-\d{2}-\d{4}\b/g, "[id number]"],
];

export function maskText(text) {
  let out = String(text ?? "");
  for (const [re, replacement] of PATTERNS) out = out.replace(re, replacement);
  return out;
}

// Speaker names are replaced by their role, so customer names never leave the browser's chat.
export function maskChat(chat) {
  return {
    mode: chat.mode || "",
    rolesGuessed: !!chat.rolesGuessed,
    agency: maskText(chat.agency || "").slice(0, 120),
    text: maskText(chat.text || ""),
    messages: (Array.isArray(chat.messages) ? chat.messages : []).map((m) => ({
      role: ["agent", "customer", "bot"].includes(m.role) ? m.role : "unknown",
      text: maskText(m.text),
    })),
  };
}
