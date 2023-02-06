import React,{
  useState,
  useEffect
} from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  styled,
  useTheme,
  Avatar,
} from '@mui/material';
import "./StatsCard.css"
import { Visibility, People, ShoppingCart, TrendingUp } from '@mui/icons-material';


const StyledAvatar = styled(Avatar)(({ theme, iconColor }) => ({
  backgroundColor: iconColor,
  color: theme.palette.getContrastText(iconColor),
}));


const MetricCard = ({ title, value, Icon, color }) => {

  
  return (
    <Card
    id='stats'
  
    >
      <CardContent
      >
        <Grid container spacing={2} alignItems="center"
        >
          <Grid item>
            <StyledAvatar iconColor={color}>
              <Icon />
            </StyledAvatar>
          </Grid>
          <Grid item>
            <Typography color="textSecondary" gutterBottom
            style={{
              color:"white",
              textTransform:"uppercase",
              fontSize:"1rem",
              fontWeight:"bold",
              letterSpacing:"1px"
            }}
            >
              {title}
            </Typography>
            <Typography variant="h6">{value}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  
  '& .MuiCardContent-root': {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiTypography-root': {
      fontSize: ({ title }) => (title ? 14 : 24),
    },
  },
}));

const DashboardAdmin = () => {

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Grid container spacing={4}
    
    >

      {/* <Grid item xs={12} sm={6} md={3}>
      <div className="card-container">
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-front">
          Front of Card
        </div>
        <div className="card-back">
          Back of Card
        </div>
      </div>
    </div>
      </Grid> */}

      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Visits"
          value={1234}
          Icon={Visibility}
          color="#3f51b5"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard title="Users" value={567} Icon={People} color="#4caf50" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
        className="card-front"
          title="Orders"
          value={891}
          Icon={ShoppingCart}
          color="#ff9800"
        />
        


      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Revenue"
          value="$7,000"
          Icon={TrendingUp}
          color="#e53935"
        />
      </Grid>

       
            

    </Grid>
  );
};

export default DashboardAdmin;
