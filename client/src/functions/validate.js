import DOMPurify from "dompurify"

export function isTextValid(text) {
  return Boolean(DOMPurify.sanitize(text, { ALLOWED_TAGS: [] }).trim())
}
