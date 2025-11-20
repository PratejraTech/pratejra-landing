/**
 * Fetches and extracts description from a webpage
 * @param url - The URL to fetch the description from
 * @returns Promise resolving to the extracted description or empty string
 */
export async function fetchProjectDescription(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'text/html',
      },
    });
    
    if (!response.ok) {
      return '';
    }
    
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Try to find subtitle, h2, or meta description
    const subtitle = doc.querySelector('h2, .subtitle, [class*="subtitle"]');
    if (subtitle) {
      return subtitle.textContent?.trim().substring(0, 150) || '';
    }
    
    const metaDesc = doc.querySelector('meta[name="description"]');
    if (metaDesc) {
      return metaDesc.getAttribute('content')?.substring(0, 150) || '';
    }
    
    const firstP = doc.querySelector('p');
    if (firstP) {
      return firstP.textContent?.trim().substring(0, 150) || '';
    }
    
    return '';
  } catch (error) {
    // Error handling - in production, consider using a proper logging service
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error fetching description from ${url}:`, error);
    }
    return '';
  }
}

