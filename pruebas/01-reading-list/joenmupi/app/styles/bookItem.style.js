import configStyles from '@/styles/configStyles'

const styles = {
  configStyles,
  gridItemBook: {
    p: '1%',
    height: '50%'
  },

  boxItemBookContainer: {
    width: '100%',
    height: '100%',
    borderRadius: '.2rem',
    overflow: 'hidden'
  },

  boxImgBackground: (img) => {
    return {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      transition: 'all .3s',
      ':hover': {
        transform: 'scale(1.1)'
      }
    }
  },

  boxInfo: {
    transition: 'all .3s',
    background: 'linear-gradient(0deg, #131313 0%, rgba(0, 0, 0, 0) 70%)',
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    p: '3%',
    ':hover': {
      transform: 'scale(.91)'
    }
  },

  boxButtonContainer: {
    display: 'flex',
    justifyContent: 'end',
    width: '100%',
    height: '10%'
  },

  boxTitleBookContainer: {
    height: '90%',
    width: '100%',
    display: 'flex',
    alignItems: 'end'
  },

  textTitleBook: {
    color: 'white'
  }
}

export default styles
