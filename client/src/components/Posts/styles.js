import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(3),
    padding: theme.spacing(3),
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
    '& button': {
      transition: '0.3s all ease',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  },
}));
