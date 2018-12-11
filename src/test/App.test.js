import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/AppHome';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Test from '../components/AppTest';
import { shallow, mount } from 'enzyme';


Enzyme.configure({
  adapter: new Adapter()
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Get state', () => {
  const wrapper = mount(<App />);
  expect(wrapper.state('aanvraag')).toEqual('hallo')
})

test('Get test state', () => {
  const wrapper = mount(<Test />);
  expect(wrapper.state('test')).toEqual('test')
})

