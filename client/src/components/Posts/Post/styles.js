import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backgroundBlendMode: 'darken',
    transition: '0.3s all ease-in-out',
  },
  border: {
    border: '1px solid rgba(0,183,255,0.2)',
  },
  fullHeightCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 20,
    boxShadow: '0px 8px 25px rgba(0,0,0,0.1)',
    transition: '0.3s all ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0px 15px 40px rgba(0,0,0,0.2)',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 20,
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    background: 'rgba(255,255,255,0.95)',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: '#fff',
    fontWeight: 'bold',
    textShadow: '1px 1px 5px rgba(0,0,0,0.5)',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: '#fff',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 20px',
    color: '#333',
  },
  title: {
    padding: '0 16px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#007bff',
  },
  cardActions: {
    padding: '0 16px 12px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
