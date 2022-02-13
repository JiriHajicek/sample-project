import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import {useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {MdCheck, MdDelete, MdEdit, MdMoreVert} from 'react-icons/md';
import {useAppDispatch, useAppSelector} from '../store';
import {removeSection, sectionMarkAllDone} from '../store/actions';
import {FilterValue, PriorityValue, SectionModel, TaskModel} from '../store/types';

import AddTaskInput from './AddTaskInput';
import Task from './Task';

type SectionProps = {
  section: SectionModel;
};

const Section = ({section}: SectionProps) => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const globalFilter: FilterValue = useAppSelector((state) => state.globalFilter);
  const [filter, setFilter] = useState(FilterValue.ALL);

  const filteredTasks = useMemo(() => {
    const taskPriorityValue = (priority: PriorityValue) =>
      (priority === PriorityValue.HIGH && 3) ||
      (priority === PriorityValue.MEDIUM && 2) ||
      (priority === PriorityValue.LOW && 1) ||
      0;

    const sortTasks = (task: TaskModel, nextTask: TaskModel) =>
      taskPriorityValue(nextTask.priority) - taskPriorityValue(task.priority);

    const checkFilter = (task: TaskModel, filter: FilterValue) =>
      filter === FilterValue.ALL ||
      (filter === FilterValue.DONE && task.done) ||
      (filter === FilterValue.TODO && !task.done);

    return section.tasks
      .filter((task) => checkFilter(task, globalFilter) && checkFilter(task, filter))
      .sort(sortTasks);
  }, [globalFilter, filter, section.tasks]);

  const handleRemoveSection = () => {
    dispatch(removeSection(section.id));
  };

  const handleSectionMarkAllDone = () => {
    dispatch(sectionMarkAllDone(section.id));
  };

  return (
    <Box p={4} bg="white" borderRadius={4} width="100%" display="flex" flexDirection="column">
      <Flex>
        <Heading as="h4" fontSize="md" lineHeight={1.5}>
          {section.title}
        </Heading>
        <Spacer />
        <Menu placement="bottom-end">
          <MenuButton as={IconButton} icon={<MdMoreVert size="1rem" />} variant="ghost" size="xs" />
          <MenuList>
            <MenuItem icon={<MdCheck />} onClick={handleSectionMarkAllDone}>
              {t('section.markAllDone')}
            </MenuItem>
            <MenuItem icon={<MdEdit />}>{t('action.edit')}</MenuItem>
            <MenuItem icon={<MdDelete />} onClick={handleRemoveSection} color="priority.high">
              {t('section.deleteList')}
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {!!section.tasks.length && (
        <>
          <Box my={4}>
            <HStack spacing={6}>
              <Button
                size="xs"
                fontSize="md"
                variant="unstyled"
                onClick={() => setFilter(FilterValue.ALL)}
                color={filter === FilterValue.ALL ? 'checkBoxColor.50' : 'neutral.900'}
              >
                {t('section.all')}
                <Box
                  mt={2}
                  height="2px"
                  bg={filter === FilterValue.ALL ? 'checkBoxColor.50' : 'transparent'}
                />
              </Button>
              <Button
                size="xs"
                fontSize="md"
                variant="unstyled"
                onClick={() => setFilter(FilterValue.TODO)}
                color={filter === FilterValue.TODO ? 'checkBoxColor.50' : 'neutral.900'}
              >
                {t('section.todo')}
                <Box
                  mt={2}
                  height="2px"
                  bg={filter === FilterValue.TODO ? 'checkBoxColor.50' : 'transparent'}
                />
              </Button>
              <Button
                size="xs"
                fontSize="md"
                variant="unstyled"
                onClick={() => setFilter(FilterValue.DONE)}
                color={filter === FilterValue.DONE ? 'checkBoxColor.50' : 'neutral.900'}
              >
                {t('section.done')}
                <Box
                  mt={2}
                  height="2px"
                  bg={filter === FilterValue.DONE ? 'checkBoxColor.50' : 'transparent'}
                />
              </Button>
            </HStack>
          </Box>
          <Box overflow={'auto'}>
            <VStack spacing={3} align="stretch">
              {filteredTasks.map((task) => (
                <Task key={task.id} sectionId={section.id} task={task} />
              ))}
            </VStack>
          </Box>
        </>
      )}
      <Box mt={4}>
        <AddTaskInput sectionId={section.id} />
      </Box>
    </Box>
  );
};

export default Section;
