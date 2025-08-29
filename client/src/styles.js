import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 20,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    background: 'linear-gradient(90deg, #00b7ff, #1de9b6)',
    boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
  },
  heading: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.8rem',
  },
  image: {
    marginLeft: '15px',
    height: '50px',
    borderRadius: '10px',  // ✅ fixed
    transition: '0.3s all ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));
