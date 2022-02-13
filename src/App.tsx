import {Flex} from '@chakra-ui/react';
import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import EditDialog from './components/EditDialog';
import Header from './components/Header';
import SectionsList from './components/SectionsList';
import TopBar from './components/TopBar';

function App() {
  const {i18n, t} = useTranslation();

  return (
    <>
      <Helmet
        titleTemplate={`%s - ${t('app.title')}`}
        defaultTitle={t('app.title')}
        htmlAttributes={{lang: i18n.language}}
      >
        <meta name="description" content={t('app.description')} />
      </Helmet>
      <Flex direction={'column'} height="100vh">
        <Header />
        <TopBar />
        <SectionsList />
        <EditDialog />
      </Flex>
    </>
  );
}

export default App;
