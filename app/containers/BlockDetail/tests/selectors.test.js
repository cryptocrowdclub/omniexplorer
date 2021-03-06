// import { fromJS } from 'immutable';
// import { fromJS } from 'immutable';
// import { selectBlocksDomain } from '../selectors';
// import { selectBlockDetailDomain } from '../selectors';
import { fromJS } from 'immutable';
import { initialState } from '../reducer';
import makeSelectBlockDetail, { selectBlockDetailDomain } from '../selectors';

describe('selectCrowdsaleDetailDomain', () => {
  it('should select the crodwsaleDetail state', () => {
    const blocksDetailState = fromJS({ loading: true, error: false, block: { transactions: [] } });
    const mockedState = fromJS({ blockDetail: initialState });
    expect(selectBlockDetailDomain(mockedState)).toEqual(blocksDetailState);
  });
});

describe('makeSelectCrowdsaleDetail', () => {
  const blocksSelector = makeSelectBlockDetail();
  it('should select the loading', () => {
    const blocksState = { loading: true };
    const mockedState = fromJS({
      blockDetail: blocksState,
    });
    expect(blocksSelector(mockedState)).toEqual(blocksState);
  });
});
