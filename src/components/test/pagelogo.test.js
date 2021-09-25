import renderer from 'react-test-renderer';
import PageLogo from '../PageLogo';

it('renders correctly', () => {
  const tree = renderer
    .create(<PageLogo />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
