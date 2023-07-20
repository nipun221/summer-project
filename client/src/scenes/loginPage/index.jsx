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
                    fontSize="clamp(2rem, 3.5rem, 5rem)"
                    color="primary"
                >
                    THE OPEN CLOG
                </Typography>
            </Box>
            <Box 
                width={isNonMobileScreens ? "50%" : "93%"} 
                p="2rem" m="2rem auto" 
                borderRadius="1.5rem" 
                bacgroundColor={theme.palette.background.alt}
            >
                <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                Flush away the crap at The Social Dump - The social media platform for your shittiest posts!
                </Typography>
                <Form />
            </Box>
        </Box>
    );
};

export default LoginPage;
