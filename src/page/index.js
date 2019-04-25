import Nerv from 'nervjs';
import TodoBox from '../component/todoBox/todoBox';
import Layout from '../layout/index.js';

class App extends Nerv.Component {
  render() {
    return (
      <Layout>
        <TodoBox />
      </Layout>
    );
  }
}

Nerv.render(<App />, document.querySelector('#app'));
