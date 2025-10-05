declare global {
  interface ImportMeta {
    env: {
      [key: string]: string;
    };
  }
}

export const env = (key: string, fallback?: string) => {
  const v = import.meta?.env?.[key] ?? (globalThis as any)?.process?.env?.[key];
  if (v == null) {
    if (fallback !== undefined) return fallback;
    if (import.meta?.env?.MODE !== 'production') {
      throw new Error(`Missing env: ${key}`);
    }
    return '';
  }
  return String(v);
};
