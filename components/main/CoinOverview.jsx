import React, { PureComponent } from 'react';

import Heading from '../../../doit-ui/Heading';
import InlineList from '../../../doit-ui/InlineList';

import CoinDashlet from './CoinDashlet';

class CoinOverview extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Heading level={3}>주식 현재가</Heading>
        <InlineList>
          <CoinDashlet name="삼성전자" priceLabel="64,000원" />
          <CoinDashlet name="SK하이닉스" priceLabel="88,000원" />
          <CoinDashlet name="LG화학" priceLabel="567,000원" />
        </InlineList>
      </React.Fragment>
    );
  }
}

export default CoinOverview;
