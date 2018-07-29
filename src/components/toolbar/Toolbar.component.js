import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { restart, cheat, historyStep } from 'actions';

class Toolbar extends React.Component {
  constructor() {
    super();
    this.state = {
      historyStep: 0,
    };
  }

  historyGo(event) {
    let value = +event.nativeEvent.target.value;
    this.props.historyStep(value);
    this.setState({
      historyStep: value,
    });
  }

  componentDidUpdate({ historyLength }) {
    if (historyLength < this.props.historyLength) {
      this.setState({
        historyStep: this.props.historyLength,
      });
    }
  }

  render() {
    let { restart, cheat, historyLength } = this.props;
    return (
      <div className="fifteen-board-toolbar">
        <button className="fifteen-board-button" onClick={restart}>
          Restart
        </button>
        <button className="fifteen-board-button" onClick={cheat}>
          Cheat
        </button>
        {historyLength > 1 && (
          <div className="slidecontainer">
            <label>
              <span>Time travel:</span>{' '}
              <input
                type="range"
                onChange={event => this.historyGo(event)}
                min="1"
                max={historyLength}
                value={this.state.historyStep}
              />
            </label>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ board }) => {
  return {
    historyLength: board.historyLength,
  };
};

const mapDispatchToProps = {
  restart,
  cheat,
  historyStep,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
