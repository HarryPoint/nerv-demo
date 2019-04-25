import Nerv from 'nervjs';
import './index.css';

class Layout extends Nerv.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Layout;
