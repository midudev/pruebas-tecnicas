import configStyles from '@/styles/configStyles'

const styles = {
  configStyles,
  boxPrincipal: {
    p: '3%',
    height: '100vh',
    width: '100wh',
    minHeight: '500px',
    display: 'flex',
    justifyContent: 'space-between'
  },

  boxLeft: {
    height: '100%',
    width: '68%'
  },

  textBookList: {
    transition: 'all .2s'
  },

  textBookListTraparent: {
    color: 'transparent'
  },

  boxInputs: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%'
  },

  select: {
    width: '100%',
    height: '50%'
  },

  boxContainerBook: {
    width: '100%',
    height: '80%',
    display: 'flex',
    justifyContent: 'end',
    flexDirection: 'column'
  },

  gridContainerBooksLeft: {
    width: '100%',
    height: '95%',
    overflow: 'auto',
    justifyContent: 'center'
  },

  button: {
    minWidth: '1px',
    color: 'white',
    width: '2rem',
    height: '2rem'
  },

  boxRight: {
    height: '100%',
    width: '30%',
    bgcolor: '#202020',
    borderRadius: '1rem',
    borderColor: configStyles.primary,
    p: '1%'
  },

  gridContainerBooksRight: {
    width: '100%',
    height: '90%',
    overflow: 'auto',
    justifyContent: 'center'
  }
}

export default styles
