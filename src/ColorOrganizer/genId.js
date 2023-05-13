export const genId = (len = 10) => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = '';

  for (let i = 0; i < len; i++) {
    const randomIdx = Math.floor(Math.random() * chars.length);
    id += chars.charAt(randomIdx);
  }

  return id;
}