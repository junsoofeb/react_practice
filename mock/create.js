const getRandomNumber = (min, max) => {
  const range = max - min + 1;
  return parseInt(Math.random() * range + min, 10);
}


const createData = (index) => {
  switch(getRandomNumber(0, 2)) {
    case 1: {
      return {
        id: `DOIT${index}`,
        code: 'DOIT',
        name: 'LG화학',
        totalPrice: getRandomNumber(346392, 357430),
        currentPrice: getRandomNumber(565000, 569000),
        amount: getRandomNumber(10, 30),
        datetime: '2020/01/20 11:23:45',
      };
    }
    case 2: {
      return {
        id: `ETH${index}`,
        code: 'ETH',
        name: 'SK하이닉스',
        totalPrice: getRandomNumber(615123	, 645456),
        currentPrice: getRandomNumber(85000, 90000),
        amount: getRandomNumber(10, 30),
        datetime: '2020/01/20 11:23:45',
      };
    }
    default: {
      return {
        id: `BTX${index}`,
        code: 'BTX',
        name: '삼성전자',
        totalPrice: getRandomNumber(3542980, 3749820),
        currentPrice: getRandomNumber(63000, 65000),
        amount: getRandomNumber(10, 30),
        datetime: '2020/01/20 11:23:45',
      };
    }
  }
}

module.exports = function() {
  return {
    users: [],
    transactions: Array(100).fill('').map((_, index) => createData(index)),
  };
};
