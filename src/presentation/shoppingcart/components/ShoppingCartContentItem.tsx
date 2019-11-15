import React, { Key } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  TextField,
  Paper
} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Clear";
import ShoppingCartItem from "../../../domain/shoppingcart/ShoppingCartItem";

const useStyles = makeStyles((theme: Theme) => ({
  itemContainer: {
    margin: theme.spacing(1)
  },
  itemImage: {
    padding: theme.spacing(0, 1)
  },
  quantityField: {
    marginTop: theme.spacing(1),
    width: 100
  }
}));

interface ShoppingCartProps {
  key: Key;
  cartItem: ShoppingCartItem;
  onRemoveCartItem: (item: ShoppingCartItem) => void;
  onEditQuantityCartItem: (item: ShoppingCartItem, quantity: number) => void;
}

const ShoppingCartContentItem: React.FC<ShoppingCartProps> = ({
  key,
  cartItem,
  onRemoveCartItem,
  onEditQuantityCartItem
}) => {
  const classes = useStyles();

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onEditQuantityCartItem(cartItem, +event.target.value);
  };

  return (
    <React.Fragment>
      <Paper className={classes.itemContainer}>
        <ListItem key={key}>
          <img
            height={100}
            className={classes.itemImage}
            src={cartItem.image}
            alt={cartItem.title}
          />
          <ListItemText
            primary={cartItem.title}
            secondary={
              <TextField
                id="standard-number"
                label="Quantity"
                type="number"
                className={classes.quantityField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="none"
                value={cartItem.quantity}
                onChange={handleQuantityChange}
              />
            }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <RemoveIcon onClick={() => onRemoveCartItem(cartItem)} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </React.Fragment>
  );
};

export default ShoppingCartContentItem;
