/*
In order to use the most current version of React > 16,
we now need to install "enzyme adapters" to provide full compatibility with React.

add a src/setupTests.js file to configure the enzmye adapter for our tests.
The disableLifecyleMethods portion is needed to allow us to modify props
through different tests*/

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
