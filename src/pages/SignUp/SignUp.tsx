import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button, { ButtonProps}  from "@mui/material/Button";
import { styled }from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header";

const SignUpCta = styled(Button)<ButtonProps>(({ theme }) => ({
  fontSize: '1.5rem',
  fontFamily: 'var(--primary-font)',
  fontWeight: 400,
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  '&hover': {
    backgroundColor: blue[700],
  }
}));

const SignInCta = styled(Button)<ButtonProps>(({ theme }) => ({
    fontSize: '1.5rem',
    fontFamily: 'var(--primary-font)',
    fontWeight: 400,
    color: blue[500],
    '&hover': {
      backgroundColor: blue[700],
    }
  }));

function SignUp() {
  return (
    <>
      <Header />
      <Stack direction="row" justifyContent="center" alignItems="center" mt={2}>
        <Card
          component="form"
          variant="outlined"
          sx={{ maxWidth: 500, padding: 2 }}
        >
          <Typography variant="body1" sx={{color: "var(--color-black)", fontSize: "2rem", fontWeight: "500", mb: 2}}>
            Create an Account and start sharing your stories.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2
          }}>
          <TextField label="First Name" 
          variant="filled" 
          sx={{mb: 2, width: 230}}
          slotProps={{
            inputLabel: {
              sx: {
                fontSize: '1.4rem',
                fontWeight: '300',
              },
            },
          }}/>
          <TextField label="Last Name" variant="filled" sx={{mb: 2, width: 230}}          slotProps={{
            inputLabel: {
              sx: {
                fontSize: '1.4rem',
                fontWeight: '300',
              },
            },
          }}/>
          </Box>
          <TextField label="Email Address" type="email" variant="filled" fullWidth sx={{mb: 2}}          slotProps={{
            inputLabel: {
              sx: {
                fontSize: '1.4rem',
                fontWeight: '300',
              },
            },
          }}/>
          <TextField label="Username" variant="filled" fullWidth sx={{mb: 2}}          slotProps={{
            inputLabel: {
              sx: {
                fontSize: '1.4rem',
                fontWeight: '300',
              },
            },
          }}/>
          <TextField label="Password" type="password" variant="filled" fullWidth sx={{mb: 2}}          slotProps={{
            inputLabel: {
              sx: {
                fontSize: '1.4rem',
                fontWeight: '300',
              },
            },
          }}/>
          <TextField label="Confirm Password" type="password" variant="filled" fullWidth sx={{mb: 2}}          slotProps={{
            inputLabel: {
              sx: {
                fontSize: '1.4rem',
                fontWeight: '300',
              },
            },
          }}/>
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <SignUpCta variant="contained"  component="a" href="/signin" sx={{ textTransform:  'capitalize', textAlign: 'center'}}>Create Account
          </SignUpCta>
          </Box>
            <Typography variant="body1" sx={{color: "var(--color-black)", fontSize: "1.8rem", fontWeight: "300", mt: 1, textAlign: 'center'}}>
                Already have an account?           
                <SignInCta variant="text"  component="a" href="/signin" sx={{ textTransform:  'capitalize', textAlign: 'center'}}>Sign In
                </SignInCta>
            </Typography>
        </Card>
      </Stack>
    </>
  );
}

export default SignUp;
