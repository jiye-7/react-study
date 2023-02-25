import React from 'react';
import Counter from './basic/components/Counter';

export default class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // useEffect처럼 컴포넌트가 처음 보여질 때 호출되는 componentDidMount
  componentDidMount() {
    console.log(`컴포넌트가 마운트 되었음! `);
  }

  // 컴포넌트가 사라질 때 (useEffect에서 반환했던 콜백함수 처럼 작성할 수 있는) componentWillMount
  componentWillUnmount() {
    console.log(`컴포넌트가 곧 언마운트 될 예정!`);
  }

  render() {
    return (
      <div className='container'>
        <div className='banner'>
          Total Count: {this.state.count} {this.state.count > 10 ? '🔥' : '❄️'}
        </div>
        <div className='counters'>
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
