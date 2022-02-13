import {
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import moment from 'moment';
import {useTranslation} from 'react-i18next';
import {MdCheck, MdEvent, MdList, MdOutlineSort, MdSettings} from 'react-icons/md';
import {useAppDispatch} from '../store';
import {changeGlobalFilter, removeAll, removeAllDone} from '../store/actions';
import {FilterValue} from '../store/types';

const TopBar = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const handleRemoveAll = () => {
    dispatch(removeAll());
  };

  const handleRemoveAllDoneTasks = () => {
    dispatch(removeAllDone());
  };

  const handleFilterChange = (value: FilterValue) => {
    dispatch(changeGlobalFilter(value));
  };

  return (
    <Box mx={4} py={3} borderBottom="1px" borderColor="neutral.40">
      <Flex justify="space-between" align="end">
        <Box>
          <Heading as="span" fontSize="md" lineHeight={1.5} color="black">
            {t('topBar.today')}
          </Heading>
          <Text as="span" fontSize="sm" ml={3} color="black">
            {moment().format('ddd D MMM')}
          </Text>
        </Box>
        <Box>
          <Menu placement="bottom-end">
            <MenuButton as={IconButton} icon={<MdOutlineSort />} size="sm" />
            <MenuList>
              <MenuItem icon={<MdList />} onClick={() => handleFilterChange(FilterValue.ALL)}>
                {t('topBar.showAllTasks')}
              </MenuItem>
              <MenuItem icon={<MdCheck />} onClick={() => handleFilterChange(FilterValue.DONE)}>
                {t('topBar.viewCompleteTasks')}
              </MenuItem>
              <MenuItem icon={<MdEvent />} onClick={() => handleFilterChange(FilterValue.TODO)}>
                {t('topBar.viewTodoItems')}
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu placement="bottom-end">
            <MenuButton as={IconButton} icon={<MdSettings />} size="sm" ml={3} />
            <MenuList>
              <MenuItem icon={<MdList />} onClick={handleRemoveAll}>
                {t('action.clearAll')}
              </MenuItem>
              <MenuItem icon={<MdCheck />} onClick={handleRemoveAllDoneTasks}>
                {t('topBar.clearAllDoneTask')}
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default TopBar;
