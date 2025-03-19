'use client'
import { useAppDispatch } from "@/hooks/redux";
import { useAuth } from "@/hooks/useAuth";
import { logout } from "@/store/slices/authSlice";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter()
    const dispatch = useAppDispatch();

    const isAuthenticated = useAuth();

    const handleLogout = () => {
        dispatch(logout());
        router.push("/login")
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
                        <Typography variant="h6" color="primary">EBuddy</Typography>
                        {

                            isAuthenticated ?
                                <Button color="inherit" onClick={handleLogout}>Logout</Button> :
                                <Button color="inherit" component={Link} href="/login">Login</Button>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}