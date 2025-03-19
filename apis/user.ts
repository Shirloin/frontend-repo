import { ApiResponse } from "@/types/ApiResponse"
import axios from "./axios"
import axiosModule from "axios"
import { User } from "@/types/User"

export const UserService = {
    async fetchUsers(): Promise<ApiResponse<User[]>> {
        try {
            const response = await axios.get<ApiResponse<User[]>>("/api/users")
            return response.data
        } catch (error) {
            if (axiosModule.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || "Network error");
            } else {
                throw new Error("Fail to fetch users");
            }
        }
    },
    async createUser(user: User): Promise<ApiResponse<User>> {
        try {
            const response = await axios.post<ApiResponse<User>>("/api/users", user)
            return response.data
        } catch (error) {
            if (axiosModule.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || "Network error");
            } else {
                throw new Error("Fail to create user");
            }
        }
    },
    async updateUser(user: User): Promise<ApiResponse<User>> {
        try {
            const response = await axios.put<ApiResponse<User>>(`/api/users/${user.id}`, user)
            return response.data
        } catch (error) {
            if (axiosModule.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || "Network error");
            } else {
                throw new Error("Fail to update user");
            }
        }
    },
    async deleteUser(id: string): Promise<ApiResponse<User>> {
        try {
            const response = await axios.delete<ApiResponse<User>>(`/api/users/${id}`)
            return response.data
        } catch (error) {
            if (axiosModule.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || "Network error");
            } else {
                throw new Error("Fail to delete user");
            }
        }
    },
}