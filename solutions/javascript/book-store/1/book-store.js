const MEMO = new Map();
const BOOK_PRICE = 800;
const DISCOUNTS = {
  1: 1,
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.75
};

export const cost = books => {
  const counts = Array(5).fill(0);

  books.map(book => counts[book-1]++);

  function helper(state) {
    const key = state.slice().sort((a,b) => b - a).join(',');

    if (MEMO.has(key))
      return MEMO.get(key);

    if (state.every(v=> v === 0))
      return 0;

    let minCost = Infinity;

    for (let groupSize = 1; groupSize <= 5; groupSize++){
      const availableIndices = state.reduce(
        (arr, count, i) => (count > 0 ? [...arr, i] : arr),
        []
      );

      if (availableIndices.length < groupSize) continue;

      const newState = state.slice();
      for (let i = 0; i < groupSize; i++) {
        newState[availableIndices[i]]--;
      }

      const groupCost = groupSize * BOOK_PRICE * DISCOUNTS[groupSize];
      const totalCost = groupCost + helper(newState);

      minCost = Math.min(minCost, totalCost);
    }

    MEMO.set(key, minCost);

    return minCost;
  }
  return helper(counts);
}
