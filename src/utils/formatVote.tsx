export function formatVoteCount(count: number): string {  
    if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}mil`;
    if (count >= 1_000) return `${(count / 1_000).toFixed(1)}k`;                                                                                                                                   
    return String(count);
  }