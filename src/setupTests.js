import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

window.localStorage = {};

Enzyme.configure({ adapter: new Adapter() });
