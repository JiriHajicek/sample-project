import {
  Box,
  Checkbox,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';
import {MdDelete, MdEdit, MdMoreVert} from 'react-icons/md';
import {useAppDispatch} from '../store';
import {openEditTask, removeTask, toggleTask} from '../store/actions';
import {TaskModel} from '../store/types';

type TaskProps = {
  sectionId: number;
  task: TaskModel;
};

const Task = ({sectionId, task}: TaskProps) => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(sectionId, task.id));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(sectionId, task.id));
  };

  const handleEditTask = () => {
    dispatch(openEditTask(sectionId, task));
  };

  return (
    <Box
      border="1px"
      borderLeft="4px"
      px={2}
      borderRadius={4}
      borderColor="neutral.40"
      borderLeftColor={`priority.${task.priority}`}
    >
      <HStack spacing={2}>
        <Checkbox
          size="lg"
          variant="primary"
          py={4}
          isChecked={task.done}
          onChange={handleToggleTask}
        />
        <Text fontSize="sm" lineHeight="20px" isTruncated>
          {task.title}
        </Text>
        <Spacer />
        <Box>
          <Menu placement="bottom-end">
            <MenuButton
              as={IconButton}
              icon={<MdMoreVert size="1rem" />}
              variant="ghost"
              size="xs"
            />
            <MenuList>
              <MenuItem icon={<MdEdit />} onClick={handleEditTask}>
                {t('task.editTask')}
              </MenuItem>
              <MenuItem icon={<MdDelete />} onClick={handleRemoveTask} color="priority.high">
                {t('action.delete')}
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Box>
  );
};

export default Task;
