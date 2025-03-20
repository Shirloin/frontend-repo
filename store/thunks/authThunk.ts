import { AuthService } from "@/apis/auth";
import { User } from "@/types/User";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const register = createAsyncThunk(
    "auth/register",
    async (data: User, { rejectWithValue }) => {
        try {
            const response = await AuthService.register(data);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);