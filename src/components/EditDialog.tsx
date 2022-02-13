import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Textarea,
  Spacer,
  Flex,
  Icon,
  FormLabel,
} from '@chakra-ui/react';
import moment from 'moment';
import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {MdCircle} from 'react-icons/md';
import {AiOutlineDown} from 'react-icons/ai';
import {useAppDispatch, useAppSelector} from '../store';
import {closeEdit, editTask} from '../store/actions';
import {EditModel, PriorityValue, TaskModel} from '../store/types';

const EditDialog = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const {task, open, sectionId}: EditModel = useAppSelector((state) => state.edit);

  const [form, setForm] = useState<TaskModel>({
    id: 0,
    title: '',
    description: '',
    createdAt: '',
    userName: '',
    done: false,
    priority: PriorityValue.NONE,
  });

  useEffect(() => {
    if (open && task) {
      setForm(task);
    }
  }, [open, task]);

  const handleSave = () => {
    dispatch(editTask(sectionId, form));
  };

  const handleClose = () => {
    dispatch(closeEdit());
  };

  return (
    <Modal isOpen={open} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('editDialog.title')}</ModalHeader>
        <ModalCloseButton />
        <Divider color="neutral.40" />
        <ModalBody>
          <Text fontSize="sm" lineHeight="20px" color="neutral.100">
            {`${t('editDialog.createdBy')}: ${form.userName} • ${t(
              'editDialog.createdDate'
            )}: ${moment(form.createdAt).format('D/M/YYYY')} • ${moment(form.createdAt).format(
              'H:m'
            )}`}
          </Text>
          <FormLabel mt={4}>{t('editDialog.taskName')}</FormLabel>
          <Input value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} />
          <Textarea
            placeholder={t('editDialog.descriptionPlaceholder')}
            mt={4}
            value={form.description}
            onChange={(e) => setForm({...form, description: e.target.value})}
          />
          <FormLabel mt={4}>{t('editDialog.priority')}</FormLabel>
          <Menu matchWidth>
            <MenuButton
              p={2}
              width="50%"
              borderRadius="md"
              borderWidth="1px"
              borderColor="neutral.60"
            >
              <Flex>
                {form.priority !== PriorityValue.NONE && (
                  <Icon as={MdCircle} color={`priority.${form.priority}`} mr={2} />
                )}
                {t(`priority.${form.priority}`)}
                <Spacer />
                <AiOutlineDown />
              </Flex>
            </MenuButton>
            <MenuList minWidth="inherit">
              <MenuItem
                icon={<Icon as={MdCircle} color="priority.high" />}
                onClick={() => setForm({...form, priority: PriorityValue.HIGH})}
              >
                {t('priority.high')}
              </MenuItem>
              <MenuItem
                icon={<Icon as={MdCircle} color="priority.medium" />}
                onClick={() => setForm({...form, priority: PriorityValue.MEDIUM})}
              >
                {t('priority.medium')}
              </MenuItem>
              <MenuItem
                icon={<Icon as={MdCircle} color="priority.low" />}
                onClick={() => setForm({...form, priority: PriorityValue.LOW})}
              >
                {t('priority.low')}
              </MenuItem>
              <MenuItem onClick={() => setForm({...form, priority: PriorityValue.NONE})}>
                {t('priority.none')}
              </MenuItem>
            </MenuList>
          </Menu>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={handleClose}>
            {t('action.cancel')}
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {t('action.save')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditDialog;
