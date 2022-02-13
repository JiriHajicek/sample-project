import {Box, Button, HStack, Input, FormControl, FormLabel} from '@chakra-ui/react';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {useAppDispatch} from '../store';
import {addSection} from '../store/actions';

const AddSection = () => {
  const {t} = useTranslation();

  const [writting, setWritting] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as typeof event.target & {
      title: {value: string};
    };
    const title = target.title.value;

    dispatch(addSection(title));
    setWritting(false);

    event.preventDefault();
  };

  return writting ? (
    <Box width="100%">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="title">{t('addSection.title')}</FormLabel>
          <Input id="title" />
        </FormControl>
        <HStack spacing={2} justify="flex-end" mt={2}>
          <Button onClick={() => setWritting(false)} size="sm">
            {t('action.cancel')}
          </Button>
          <Button variant="primary" type="submit" size="sm">
            {t('action.save')}
          </Button>
        </HStack>
      </form>
    </Box>
  ) : (
    <Button width="100%" onClick={() => setWritting(true)}>
      + Add Section
    </Button>
  );
};

export default AddSection;
