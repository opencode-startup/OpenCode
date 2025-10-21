/**
 * Utility functions for Link component
 */

/**
 * Determines if a URL is external (different domain or protocol)
 * @param href - The URL to check
 * @returns True if the URL is external, false otherwise
 */
export const isExternalUrl = (href: string): boolean => {
  // Check for absolute URLs (http://, https://, //, etc.)
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) {
    try {
      const url = new URL(href, window.location.origin);
      return url.origin !== window.location.origin;
    } catch {
      return true;
    }
  }
  // Check for other protocols (mailto:, tel:, etc.)
  return href.includes(':') && !href.startsWith('/');
};
