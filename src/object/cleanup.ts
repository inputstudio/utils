/**
 * Delete some properties from an object and returns a new one
 *
 * @param {Object} obj - The initial object
 * @param {Array} properties - List of property to remove from the former object
 * @returns {Object} The new object
 */
export function cleanup(obj: Object, properties: Array<string>): Object {
  const newObject = structuredClone(obj);

  properties.forEach((property) => delete newObject[property as keyof typeof obj]);

  return newObject;
}
