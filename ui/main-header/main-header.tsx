import BrandHeader from './brand-header/brand-header';
import MainNavigation from './main-navigation/main-navigation';
import VerticalLine_8 from '../../ui/vertical-line-8/vertical-line-8';

const MainHeader = () => {
  return (
    <header>
      <BrandHeader />

      <VerticalLine_8 />
      <MainNavigation />
    </header>
  );
};

export default MainHeader;
