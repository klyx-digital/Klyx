export function twitterShareUrl({ title, url }) {
  const base = "https://twitter.com/intent/tweet";
  const params = new URLSearchParams({
    text: title,
    url,
  });
  return `${base}?${params.toString()}`;
}

// Même principe pour Facebook, LinkedIn, Email…
export function facebookShareUrl(url) {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
}
export function linkedinShareUrl(url) {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;
}
export function mailtoShareUrl({ title, url }) {
  return `mailto:?subject=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(url)}`;
}
