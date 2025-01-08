import { Group, createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({});

export function NotWorkingGroup() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <h1>This does not work</h1>
      </Group>
    </MantineProvider>
  )
}
