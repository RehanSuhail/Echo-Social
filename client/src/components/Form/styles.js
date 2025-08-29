import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      transition: '0.3s all ease-in-out',
      '&:hover': {
        transform: 'scale(1.02)',
      },
      '& .MuiInputBase-root': {
        borderRadius: 10,
        background: 'rgba(255,255,255,0.9)',
      },
    },
  },
  paper: {
    padding: theme.spacing(3),
    borderRadius: 20,
    boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(5px)',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing(2),
  },
  fileInput: {
    width: '100%',
    margin: '10px 0',
    border: '2px dashed rgba(0,183,255,0.5)',
    borderRadius: 10,
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: '0.3s all ease-in-out',
    '&:hover': {
      borderColor: 'rgba(0,183,255,0.8)',
      backgroundColor: 'rgba(0,183,255,0.05)',
    },
  },
  buttonSubmit: {
    marginBottom: 10,
    background: 'linear-gradient(45deg, #00b7ff, #1de9b6)',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 25px',
    borderRadius: 15,
    boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
    transition: '0.3s all ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0px 10px 25px rgba(0,0,0,0.25)',
    },
  },
}));
