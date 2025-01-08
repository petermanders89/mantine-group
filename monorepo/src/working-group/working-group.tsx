import { Group, createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({});

export function WorkingGroup() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        This does work!
      </Group>
    </MantineProvider>
  )
}
