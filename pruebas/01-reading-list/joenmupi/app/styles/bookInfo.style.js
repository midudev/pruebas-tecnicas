import configStyles from '@/styles/configStyles'

const styles = {
  configStyles,
  button: {
    minWidth: '1px',
    color: 'white',
    width: '2rem',
    height: '2rem'
  },

  boxChip: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '.5rem'
  },

  textSubtitleInfo: {
    fontWeight: 500,
    color: configStyles.primary
  },

  textTitleInfo: {
    color: 'white',
    fontWeight: 'bold'
  },

  DialogAction: {
    justifyContent: 'center'
  }
}

export default styles
