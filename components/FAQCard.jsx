import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function FAQCard() {
  return (
    <Sheet
      variant="outlined"
      color="neutral"
      sx={{
        p: 4,
        width: '100%',
        display: 'flex',
        flexDirection: 'row', // Change to 'row' if you want the sheet on the right side
        alignItems: 'center', // Center content vertically
      }}
    >
      <Card
        size="lg"
        variant="plain"
        orientation="horizontal"
        sx={{
          textAlign: 'center',
          maxWidth: '100%',
          width: 600,
        }}
      >
        <CardOverflow
          variant="solid"
          color="primary"
          sx={{
            flex: '0 0 200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: 'var(--Card-padding)',
          }}
        >
          <Typography fontSize="xl4" fontWeight="xl" textColor="#fff">
            89
          </Typography>
          <Typography textColor="primary.200">
            FAQs answered, see if yours is one of them.
          </Typography>
        </CardOverflow>
        <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
          <AspectRatio ratio="19/8" objectFit="contain" variant="plain">
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
            />
          </AspectRatio>
          <CardContent>
            <Typography level="title-lg">Need Some Help?</Typography>
            <Typography fontSize="sm" sx={{ mt: 0.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </Typography>
          </CardContent>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              '--variant-borderWidth': '2px',
              borderRadius: 40,
              borderColor: 'primary.500',
              mx: 'auto',
            }}
          >
            See FAQ
          </Button>
        </CardContent>
      </Card>

      {/* Additional content on the right side */}
      <div
        style={{
          marginLeft: '20px', // Add some spacing between the card and the additional content
        }}
      >
        <Typography level="title-lg">About Zameen Visit</Typography>
        <Typography>
         Group is committed to ensuring digital accessibility for individuals with disabilities. 
        <br></br>We are continuously working to improve the accessibility of our web experience for everyone,   <br></br>and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please  <a href=''>let us know.</a>
        </Typography>
      </div>
    </Sheet>
  );
}
