import Link from 'next/link';
import Image from 'next/image';

import { LogoContainer } from './logo.styles';

const Logo = () => {
  return (
    <LogoContainer>
      <Link href='/'>
        <Image
          src='/images/logo/commerce_m_logo.jpg'
          alt='Commerce M Logo'
          width={50}
          height={50}
        />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
