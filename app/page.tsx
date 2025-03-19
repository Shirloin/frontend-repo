import UserList from "@/components/organisms/UserList";
import BaseContainer from "@/components/template/BaseContainer";
import { Box } from "@mui/material";
import CreateUserDialog from "@/components/organisms/CreateUserDialog";
import RefreshButton from "@/components/atoms/RefreshButton";

export default function Home() {

  return (
    <>
      <BaseContainer>
        <Box sx={{ width: "50%", mx: "auto" }}>
          <Box component={"section"} sx={{ display: "flex", justifyContent: "end", gap: 2, mb: 2, width: "100%" }}>
            <CreateUserDialog />
            <RefreshButton />
          </Box>
          <UserList />
        </Box>
      </BaseContainer>
    </>
  )
}