const ApiEndpoints = {
  stock: (name) => `https://stock.indianapi.in/stock?name=${name}`,
  trending: () => `https://stock.indianapi.in/trending`,
  mutualFunds: () => `https://stock.indianapi.in/mutual_funds`,
};

export default ApiEndpoints