

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.IkAApWm9.js","_app/immutable/chunks/CIwRvB1r.js","_app/immutable/chunks/DEDqjojZ.js","_app/immutable/chunks/fL05G3Zf.js"];
export const stylesheets = [];
export const fonts = [];
