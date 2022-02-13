import {Box, useBreakpointValue} from '@chakra-ui/react';
import {useAppSelector} from '../store';
import {SectionModel} from '../store/types';
import AddSection from './AddSection';
import Section from './Section';

const SectionsList = () => {
  const sections: Array<SectionModel> = useAppSelector((state) => state.sections);
  const width = useBreakpointValue({
    base: '100%',
    sm: '50%',
    md: '33%',
    lg: '25%',
  });
  const style = useBreakpointValue({
    base: {pr: 0, display: 'block', nowrap: false, mt: 4, maxHeight: 'unset'},
    sm: {pr: 4, display: 'flex', nowrap: true, mt: 0, maxHeight: '100%'},
  });

  return (
    <Box
      p={4}
      whiteSpace={style?.nowrap ? 'nowrap' : 'unset'}
      overflow="auto"
      display={style?.display}
      height="100%"
    >
      {sections.map((section) => (
        <Box
          key={section.id}
          minWidth={width}
          pr={style?.pr}
          display="inline-flex"
          mb="auto"
          mt={style?.mt}
          maxHeight={style?.maxHeight}
        >
          <Section section={section} />
        </Box>
      ))}
      <Box minWidth={width} display="inline-flex" mt={style?.mt}>
        <AddSection />
      </Box>
    </Box>
  );
};

export default SectionsList;
