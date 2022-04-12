import { render } from '@testing-library/react';
import JobList from './components/JobList'
import { createTheme, WuiProvider } from '@welcome-ui/core'

describe('JobList', () => {
  test('Should render without crash', async () => {
    const theme = createTheme()
    render(<WuiProvider theme={theme}>
      <JobList />
      </WuiProvider>
    )
})
})
