import {Box, Heading} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';

const Header = () => {
  const {t} = useTranslation();

  return (
    <Box px={4} py={3} bg="white" borderBottom="1px" borderColor="neutral.40">
      <Heading as="h4" fontSize="md" lineHeight={1.5} fontWeight="medium">
        {`${t('header.title')} - Jiří Hájíček`}
      </Heading>
    </Box>
  );
};

export default Header;
