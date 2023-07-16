import { css } from '~/styled-system/css'

export const HeadlineH2Styles = css({
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  my: '2rem',
  lg: {
    textAlign: 'left',
  },
})

export const wrapperStyles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  lg: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  gap: '2rem',
  width: '100%',
  minH: '75vh',
  p: '2rem',
})
