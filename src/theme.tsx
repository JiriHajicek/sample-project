import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  config: {initialColorMode: 'light', useSystemColorMode: false},
  colors: {
    'priority.high': '#E32C1E',
    'priority.medium': '#FF9800',
    'priority.low': '#24A148',

    neutral: {
      10: '#FAFBFC',
      20: '#F4F5F7',
      30: '#EBECF0',
      40: '#DFE1E6',
      50: '#C1C7D0',
      60: '#B3BAC5',
      70: '#A5ADBA',
      80: '#97A0AF',
      90: '#8993A4',
      100: '#7A869A',
      200: '#6B778C',
      300: '#5E6C84',
      400: '#505F79',
      500: '#42526E',
      600: '#344563',
      700: '#253858',
      800: '#172B4D',
      900: '#091E42',
    },
    checkBoxColor: {
      50: '#0065FF',
      100: '#0065FF',
      200: '#0065FF',
      300: '#0065FF',
      400: '#0065FF',
      500: '#0065FF',
      600: '#0065FF',
      700: '#0065FF',
      800: '#0065FF',
      900: '#0065FF',
    },
  },
  components: {
    Button: {
      baseStyle: () => ({
        borderRadius: '4px',
        fontWeight: 'normal',

        _focus: {
          boxShadow: 'unset',
        },
      }),
      variants: {
        ghost: {
          bg: 'unset',
          color: 'neutral.800',
        },
        solid: {
          bg: 'neutral.30',
          color: 'neutral.800',
        },
        primary: {
          bg: '#0065FF',
          color: 'white',
        },
        unstyled: {
          minWidth: 'unset',
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          border: '1px',
          borderColor: 'neutral.200',

          _focus: {
            boxShadow: 'unset',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        color: 'neutral.900',
      },
    },
    Textarea: {
      defaultProps: {
        size: 'sm',
        variant: 'outline',
        focusBorderColor: 'unset',
      },
      baseStyle: {
        color: 'neutral.900',
      },
      variants: {
        outline: {
          bg: 'white',
          borderRadius: '4px',
          borderColor: 'neutral.60',
          color: 'neutral.900',
        },
      },
    },
    Input: {
      defaultProps: {
        size: 'sm',
        variant: 'outline',
        focusBorderColor: 'unset',
      },
      baseStyle: {
        field: {
          color: 'neutral.900',
        },
      },
      variants: {
        outline: {
          field: {
            bg: 'white',
            borderRadius: '4px',
            borderColor: 'neutral.60',
            color: 'neutral.900',
          },
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'neutral.900',
      },
    },
    Menu: {
      baseStyle: {
        item: {
          color: 'neutral.900',
        },
      },
    },
    Modal: {
      baseStyle: {
        header: {
          padding: 4,
          color: 'neutral.900',
        },
        body: {
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 4,
          paddingBottom: 0,
        },
        footer: {
          padding: 4,
        },
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: 'xs',
        lineHeight: '16px',
        color: 'neutral.500',
        marginBottom: 1,
      },
    },
  },
});

export default theme;
