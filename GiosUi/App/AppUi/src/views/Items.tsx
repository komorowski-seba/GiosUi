import { Card, CardContent, Typography } from "@mui/material";

export default function Users(): JSX.Element {
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">Users</Typography>
            <Typography>Lista użytkowników.</Typography>
            </CardContent>
        </Card>
    );
}