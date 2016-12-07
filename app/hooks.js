import { bindActionCreators } from 'redux';
import * as IndexActions from './redux/modules/index';

export function hook({ dispatch }) {
  const indexActions = bindActionCreators(IndexActions, dispatch);

  return () => {
    indexActions.fetchPosts(0, 9);
  };
}
