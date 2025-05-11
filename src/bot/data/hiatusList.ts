export let hiatusList: string[] = [];

export function isInHiatus(id: string) {
  return hiatusList.includes(id);
}

export function addToHiatus(id: string) {
  if (!isInHiatus(id)) hiatusList.push(id);
}

export function removeFromHiatus(id: string) {
  hiatusList = hiatusList.filter((item) => item !== id);
}
