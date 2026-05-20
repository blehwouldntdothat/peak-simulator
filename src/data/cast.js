export let cast = [];

export function addCharacter(name, imageURL) {
  cast.push({
    id: crypto.randomUUID(),
    name,
    image: imageURL,
    alive: true,
    deathOrder: null,
    events: []
  });
}

export function resetCast() {
  cast = cast.map(c => ({
    ...c,
    alive: true,
    deathOrder: null,
    events: []
  }));
}
