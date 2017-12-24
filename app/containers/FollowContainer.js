import { connect } from 'react-redux';
import Follow from 'holochain-web-components/Follow';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line no-unused-vars
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
