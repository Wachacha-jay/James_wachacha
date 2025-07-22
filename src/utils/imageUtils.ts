// Modified to always prepend Vite's BASE_URL in production & dev
export const cleanImagePath = (relativePath: string) => {
  // Ignore external links
  if (
    !relativePath ||
    relativePath.startsWith('http://') ||
    relativePath.startsWith('https://')
  ) {
    return relativePath;
  }
  // Remove any accidental leading/trailing slashes for safety
  let base = import.meta.env.BASE_URL || '/';
  if (!base.endsWith('/')) base += '/';
  // Remove leading slash from the relativePath (if present)
  let path = relativePath.replace(/^\/+/, '');
  const finalPath = `${base}${path}`.replace(/\/{2,}/g, '/');
  return finalPath;
};