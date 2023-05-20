import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SecurityIcon from '@mui/icons-material/Security';
import StatsCard from './StatsCard';

const CharacterCard = ({ characterData, onClick }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card
      sx={{ maxWidth: 400, m: 1 }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={onClick}>
      <CardHeader sx={{ textAlign: 'center' }} title={characterData.name} />
      <CardMedia
        sx={{ objectFit: 'contain' }}
        component='img'
        height='194'
        image={characterData.image}
        alt='character image'
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid xs={12} sm={4}>
            <StatsCard
              title='Health'
              length={characterData.health}
              icon={
                <FavoriteIcon
                  sx={{ color: (theme) => theme.palette.error.main }}
                />
              }
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <StatsCard
              title='Speed'
              length={characterData.speed}
              icon={
                <RocketLaunchIcon
                  sx={{ color: (theme) => theme.palette.info.main }}
                />
              }
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <StatsCard
              title='Damage'
              length={characterData.damage}
              icon={
                <SecurityIcon
                  sx={{ color: (theme) => theme.palette.success.main }}
                />
              }
            />
          </Grid>
        </Grid>
      </CardContent>
      <Collapse in={expanded} timeout='auto'>
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {characterData.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CharacterCard;
