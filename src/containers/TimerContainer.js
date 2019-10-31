import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timer from '../components/Timer';
import { startTimer } from '../actions';

const intervalLength = 1000;

class TimerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  stop() {
    if (this.interval) clearInterval(this.interval);
  }

  start() {
    const { tick } = this.props;
    this.interval = setInterval(tick, intervalLength);
  }

  render() {
    const { remainingTime, isFinish } = this.props;
    if (isFinish) this.stop();
    return (
      <Timer remainingTime={remainingTime} isFinish={isFinish} />
    );
  }
}

const mapStateToProps = (state) => ({
  remainingTime: state.timer,
});

const mapDispatchToProps = (dispatch) => ({
  tick: () => {
    dispatch(startTimer());
  },
});

TimerContainer.propTypes = {
  remainingTime: PropTypes.number.isRequired,
  tick: PropTypes.func.isRequired,
  isFinish: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerContainer);
