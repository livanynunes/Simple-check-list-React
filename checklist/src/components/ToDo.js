import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import List from "./List";

export default function ToDo() {
  return (
    <Grid container>
      <Grid item>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Todo Name
            </Typography>
            <Typography variant="body2" component="p">
              To do description
            </Typography>
            <List />
          </CardContent>
          <CardActions>
            {/* <Button size="small"></Button> */}
            <Typography component="p">
              [deleter excluir to-do list aqui]
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
