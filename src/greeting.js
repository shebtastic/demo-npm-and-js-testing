function greeting(name) {
  const knownPeople = ["Felix", "Mareike"];
  if (knownPeople.includes(name)) {
    return `hello friend, ${name}`;
  } else {
    return `hello stranger, ${name}`;
  }
}

export { greeting };
