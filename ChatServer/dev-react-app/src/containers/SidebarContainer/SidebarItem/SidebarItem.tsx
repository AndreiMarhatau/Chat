import React from "react"
import styles from './SidebarItem.scss';
import { styleNames } from "../../../services/styleNames";
import { IItemData } from "../interfaces/IItemData";
import { Card, CardContent, Typography } from "@material-ui/core";

const sn = styleNames(styles);



const SidebarItem: React.FC<IItemData> = (data) => {
  return (
    <Card className={sn('sidebar-item')}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="body2" component="p">
          {data.message}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SidebarItem;