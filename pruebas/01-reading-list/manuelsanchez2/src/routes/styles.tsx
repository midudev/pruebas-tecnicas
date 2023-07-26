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

export const OuterWrapperStyles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2rem',
  width: '100%',
  minH: '75vh',
  p: '20px',
  mx: 'auto',
})

export const InnerWrapperStyles = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: 'var(--max-width-inner)',
  mx: 'auto',
  mb: '2rem',
  md: {
    flexDirection: 'row',
    mb: '0',
  },
})
