import React, { Fragment } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StatsCard = ({ title, length, icon }) => {
  return (
    <Item>
      {title}
      <br />
      {Array.from({ length: length }).map((a, i) => (
        <Fragment key={i}>{icon}</Fragment>
      ))}
    </Item>
  );
};

export default StatsCard;
