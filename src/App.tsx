import { Grommet, PageHeader, grommet as defaultTheme } from 'grommet'
import { deepMerge } from 'grommet/utils'

const theme = deepMerge(defaultTheme, {
  global: {
    font: {
      size: '16px',
    },
  },
})

function App() {
  return (
    <>
        <Grommet theme={theme} full>
            <PageHeader
                title="Audrey Serene"
                subtitle="Full Stack Software Engineer"
                />
        </Grommet>
    </>
  )
}

export default App
