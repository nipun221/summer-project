import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    return (
        <Box>
            <Box width="100%" bacgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
                <Typography 
                    fontWeight="bold"
                    fontFamily="monoco" 
                    fontSize="clamp(2rem, 3.5rem, 5rem)"
                    color="#ff79c6"
                >
                    THE SOCIAL CLOG
                </Typography>
            </Box>
            <Box>
                <Typography fontWeight="300" variant="h3" align="center" sx={{ mb: "1.5rem" }}>
                    Flush away the crap at The Social Clog - The social media platform for your shittiest posts!
                </Typography>
            </Box>
            <Box 
                width={isNonMobileScreens ? "30%" : "90%"} 
                p="3rem" m="2rem auto" 
                borderRadius="1.5rem" 
                bacgroundColor={theme.palette.background.alt}
                sx={{border: 5, borderColor: '#ff79c6'}}
            >
                <Form />
            </Box>
        </Box>
    );
};

export default LoginPage;
