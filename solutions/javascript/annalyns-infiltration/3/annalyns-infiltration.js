export function canExecuteFastAttack(kIsAwake) {
  return (!kIsAwake);
}

export function canSpy(kIsAwake, aIsAwake, pIsAwake) {
  return (kIsAwake || aIsAwake || pIsAwake);
}

export function canSignalPrisoner(aIsAwake, pIsAwake) {
  return (pIsAwake && !aIsAwake);
}

export function canFreePrisoner(kIsAwake, aIsAwake, pIsAwake, dog) {
  return ((!aIsAwake && dog) || (!aIsAwake && !kIsAwake && pIsAwake))
}
