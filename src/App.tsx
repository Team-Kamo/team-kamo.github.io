import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Card, CardContent, Link, useMediaQuery } from "@mui/material";
import Code from "@mui/icons-material/Code";
import GetApp from "@mui/icons-material/GetApp";
import NavigateNext from "@mui/icons-material/NavigateNext";
import { Icon } from "@mdi/react";
import { mdiMicrosoftWindows, mdiPenguin, mdiApple, mdiGit } from "@mdi/js/mdi";

const darkTheme = createTheme({
    typography: {
        button: {
            textTransform: "none",
            textDecoration: "none",
        },
    },
    palette: {
        mode: "dark",
    },
});

function App() {
    const pc: boolean = useMediaQuery("(min-width:600px)");
    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h5" sx={{ flexGrow: 1 }}>
                                Team-Kamo
                            </Typography>
                            <Link href="https://github.com/Team-Kamo">
                                <IconButton
                                    size="large"
                                    aria-label="github link"
                                    aria-controls="menu-appbar"
                                    color="inherit"
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </Link>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Box sx={{ flexGrow: 1, my: 10 }}>
                    <Typography variant="h1" gutterBottom align="center">
                        Octane
                    </Typography>
                    <Typography variant="h2" gutterBottom align="center">
                        The simple, easy virtual clipboard software
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Link href="/octane-demo-an.mp4">
                            <Button
                                variant="contained"
                                endIcon={<NavigateNext />}
                                size="large"
                            >
                                Visit our presentation slide
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box sx={{ flexGrow: 1, mx: pc ? 10 : 0, my: 10 }}>
                    <Typography variant="h3" gutterBottom align="center">
                        Downloads
                    </Typography>
                    <Card variant="outlined">
                        <CardContent>
                            <Box>
                                <Typography variant="h4" gutterBottom>
                                    Server
                                </Typography>
                                <Icon
                                    path={mdiMicrosoftWindows}
                                    title="Windows"
                                    size={1}
                                />
                                <Icon
                                    path={mdiPenguin}
                                    title="Linux"
                                    size={1}
                                />
                                <Icon path={mdiApple} title="Mac" size={1} />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "right",
                                }}
                            >
                                <Link href="https://team-kamo.github.io/server">
                                    <Button
                                        variant="outlined"
                                        endIcon={<Code />}
                                    >
                                        API document
                                    </Button>
                                </Link>
                                <Link href="https://github.com/Team-Kamo/server">
                                    <Button
                                        variant="outlined"
                                        endIcon={
                                            <Icon
                                                path={mdiGit}
                                                title="Git"
                                                size={1}
                                            />
                                        }
                                        sx={{ mx: 2 }}
                                    >
                                        Visit repository
                                    </Button>
                                </Link>
                                <Link href="https://github.com/Team-Kamo/server/releases">
                                    <Button
                                        variant="outlined"
                                        endIcon={<GetApp />}
                                    >
                                        Download release
                                    </Button>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card variant="outlined">
                        <CardContent>
                            <Box>
                                <Typography variant="h4" gutterBottom>
                                    GUI Client
                                </Typography>
                                <Icon
                                    path={mdiMicrosoftWindows}
                                    title="Windows"
                                    size={1}
                                />
                                <Icon path={mdiApple} title="Mac" size={1} />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "right",
                                }}
                            >
                                <Link href="https://github.com/Team-Kamo/gui-client">
                                    <Button
                                        variant="outlined"
                                        endIcon={
                                            <Icon
                                                path={mdiGit}
                                                title="Git"
                                                size={1}
                                            />
                                        }
                                        sx={{ mx: 2 }}
                                    >
                                        Visit repository
                                    </Button>
                                </Link>
                                <Link href="https://github.com/Team-Kamo/gui-client/releases">
                                    <Button
                                        variant="outlined"
                                        endIcon={<GetApp />}
                                    >
                                        Download release
                                    </Button>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card variant="outlined">
                        <CardContent>
                            <Box>
                                <Typography variant="h4" gutterBottom>
                                    CLI(Python)
                                </Typography>
                                <Icon
                                    path={mdiPenguin}
                                    title="Linux"
                                    size={1}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "right",
                                }}
                            >
                                <Link href="https://github.com/Team-Kamo/cli-client">
                                    <Button
                                        variant="outlined"
                                        endIcon={
                                            <Icon
                                                path={mdiGit}
                                                title="Git"
                                                size={1}
                                            />
                                        }
                                    >
                                        Visit repository
                                    </Button>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card variant="outlined">
                        <CardContent>
                            <Box>
                                <Typography variant="h4" gutterBottom>
                                    API-Client(C++ SDK/Python ffi binding)
                                </Typography>
                                <Icon
                                    path={mdiMicrosoftWindows}
                                    title="Windows"
                                    size={1}
                                />
                                <Icon
                                    path={mdiPenguin}
                                    title="Linux"
                                    size={1}
                                />
                                <Icon path={mdiApple} title="Mac" size={1} />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "right",
                                }}
                            >
                                <Link href="https://team-kamo.github.io/api-client">
                                    <Button
                                        variant="outlined"
                                        endIcon={<Code />}
                                    >
                                        API document
                                    </Button>
                                </Link>
                                <Link href="https://github.com/Team-Kamo/api-client">
                                    <Button
                                        variant="outlined"
                                        endIcon={
                                            <Icon
                                                path={mdiGit}
                                                title="Git"
                                                size={1}
                                            />
                                        }
                                        sx={{ ml: 2 }}
                                    >
                                        Visit repository
                                    </Button>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ flexGrow: 1, m: 2 }}>
                    <Typography variant="body2" gutterBottom align="center">
                        ©2022 Team-Kamo
                    </Typography>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default App;
