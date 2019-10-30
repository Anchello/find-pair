import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timer from '../components/Timer';
import { startTimer } from '../actions';

const intervalLength = 1000;

class TimerContainer extends React.Component {
  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  stopTimer = () => {
    if (this.interval) clearInterval(this.interval);
  };

  startTimer = () => {
    const { tick } = this.props;
    this.interval = setInterval(tick, intervalLength);
  };

  render() {
    const { remainingTime } = this.props;
    if (!remainingTime) this.stopTimer();
    return (
      <Timer remainingTime={remainingTime} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerContainer);

TimerContainer.propTypes = {
  remainingTime: PropTypes.number.isRequired,
  tick: PropTypes.func.isRequired,
};
