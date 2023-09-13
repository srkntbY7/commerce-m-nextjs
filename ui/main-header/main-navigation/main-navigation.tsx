import Link from 'next/link';

import {
  NavigationContainer,
  NavigationList,
  NavigationItem,
} from './main-navigation.styles';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>
          <Link href='/categories/clothing'>Clothing</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href='/categories/accessories'>Accessories</Link>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};
export default MainNavigation;
