import {Button, FormControl, HStack, Input} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';
import {useAppDispatch} from '../store';
import {addTask} from '../store/actions';

type AddTaskInputProps = {
  sectionId: number;
};

const AddTaskInput = ({sectionId}: AddTaskInputProps) => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as typeof event.target & {
      title: {value: string};
    };
    const title = target.title.value;

    dispatch(addTask(sectionId, title));

    target.title.value = '';

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack spacing={2}>
        <FormControl>
          <Input id="title" placeholder={t('addTaskInput.addTask')} />
        </FormControl>
        <Button variant="primary" size="sm" type="submit">
          {t('action.add')}
        </Button>
      </HStack>
    </form>
  );
};

export default AddTaskInput;
