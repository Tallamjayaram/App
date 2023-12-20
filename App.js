// App.js
import React, { useState } from 'react';
import { Container, TextField, List, ListItem, Collapse } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  listItem: {
    cursor: 'pointer',
  },
  subcategoryList: {
    paddingLeft: theme.spacing(2),
  },
}));

const categoriesData = [
  {
    name: 'Fashion',
    subcategories: [
      { name: 'Men', subcategories: ['Ethnic Wear', 'Casual Wear'] },
      { name: 'Women', subcategories: ['Dresses', 'Shoes'] },
    ],
  },
  {
    name: 'Electronics',
    subcategories: [
      { name: 'Laptops', subcategories: ['Gaming', 'Business'] },
      { name: 'Smartphones', subcategories: ['Android', 'iOS'] },
    ],
  },
];

const CategoryItem = ({ category }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem className={classes.listItem} onClick={handleToggle}>
        {category.name}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className={classes.subcategoryList} component="div" disablePadding>
          {category.subcategories.map((subcategory, index) => (
            <ListItem key={index} button>
              {subcategory.name}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

const App = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <TextField className={classes.textField} label="Search" variant="outlined" fullWidth />
      <List>
        {categoriesData.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </List>
    </Container>
  );
};

export default App;
