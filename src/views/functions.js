export const forkCouter = (data) => {
  return data.reduce((a, b) => a + b.node.forkCount, 0);
};

export const starCouter = (data) => {
  return data.reduce((a, b) => a + b.node.stargazerCount, 0);
};
