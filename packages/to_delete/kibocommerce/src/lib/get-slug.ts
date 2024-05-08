// Remove trailing and leading slash, usually included in nodes
// returned by the Kedemmarket API
const getSlug = (path: string) => path.replace(/^\/|\/$/g, '')

export default getSlug
