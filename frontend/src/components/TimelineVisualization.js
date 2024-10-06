import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EventIcon from '@mui/icons-material/Event';

// Utility function to format dates
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const TimelineVisualization = () => {
  const [preLaunchEvents, setPreLaunchEvents] = useState([]);
  const [postReturnEvents, setPostReturnEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/rodent/379'); // Your backend endpoint
        const metadata = response.data;

        // Parse and separate pre-launch and post-return events
        setPreLaunchEvents(metadata.pre_launch_events);
        setPostReturnEvents(metadata.post_return_events);
      } catch (err) {
        setError('Error fetching metadata');
        console.error(err);
      }
    };

    fetchMetadata();
  }, []);

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: '#1a1a2e', padding: 2, borderRadius: 2 }}> {/* Dark blue background with padding */}

      {/* Pre-Launch Events */}
      <Typography
        variant="h6"
        color="#ffffff"
        gutterBottom
        sx={{ fontWeight: 'bold', mt: 3, mb: 2 }}
      >
        Pre-Launch Events
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={3} // Adds spacing between the cards
        mb={4}
      >
        {preLaunchEvents.map((event, index) => (
          <Card
            key={index}
            sx={{
              background: 'linear-gradient(135deg, #ff7f7f, #ff4b4b)', // Red gradient for Pre-Launch cards
              color: 'white',
              borderRadius: '12px',
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.05)' },
              width: '30%', // Controls width of each card
              minWidth: '250px', // Ensures cards don't get too small on smaller screens
              height: '250px', // Fixed height for cards
            }}
          >
            <CardContent>
              <RocketLaunchIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{event.event}</Typography>
              <Typography variant="body1" sx={{ mt: 1, color: '#ffffff99' }}>
                {formatDate(event.date)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Post-Return Events */}
      <Typography
        variant="h6"
        color="#ffffff"
        gutterBottom
        sx={{ fontWeight: 'bold', mt: 3, mb: 2 }}
      >
        Post-Return Events
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={3} // Adds spacing between the cards
      >
        {postReturnEvents.map((event, index) => (
          <Card
            key={index}
            sx={{
              background: 'linear-gradient(135deg, #f8c291, #f6b93b)', // Yellow gradient for Post-Return cards
              color: 'white',
              borderRadius: '12px',
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.05)' },
              width: '30%', // Controls width of each card
              minWidth: '250px', // Ensures cards don't get too small on smaller screens
              height: '250px', // Fixed height for cards
            }}
          >
            <CardContent>
              <EventIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{event.event}</Typography>
              <Typography variant="body1" sx={{ mt: 1, color: '#ffffff99' }}>
                {formatDate(event.date)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TimelineVisualization;
