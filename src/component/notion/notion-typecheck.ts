
export function hasProperties(obj: any): obj is { properties: any } {
  return 'properties' in obj;
}