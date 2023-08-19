import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme, styled } from '@mui/material/styles'
import { IconButton, useMediaQuery } from '@mui/material'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import Typewriter from 'typewriter-effect'

import { data } from './popular-course.data'
import { CourseCardItem } from '@/components/course'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-70px !important', md: '-28px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const landingPageStyles = {
  banner: {
    backgroundImage: "url('your-banner-image-url')",
    backgroundSize: 'cover',
    height: '400px',
    // width: "700px",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
  },
  typewriterBox: {
    width: '100%', // Adjust this width as needed
  },
  formCard: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '16px',
    width: '30%', // Adjust this width as needed
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)', // Add box shadow
  },
  gradientText: {
    background: 'linear-gradient(90deg, #3f51b5 30%, #f50057 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  content: {
    textAlign: 'center',
    padding: '32px',
  },
}

const HomePopularCourse: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  return (
    <Box
      id="popular-course"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box sx={{ ...landingPageStyles.typewriterBox }}>
              <Typography
                variant="h6"
                sx={{ ...landingPageStyles.gradientText, fontWeight: 'bold', fontSize: '40px', mt: 7 }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Trending Tech We've Worked With.",
                      'AI and Machine Learning Solutions.',
                      'Mobile Apps for iOS and Android.',
                      'Cutting-edge Web Applications.',
                      'Blockchain and Cryptocurrency Projects.',
                      'Cloud Computing and Serverless Architecture.',
                      'Innovative Internet of Things (IoT) Solutions.',
                      'Enhancing Cybersecurity for the Digital Age.',
                      'Virtual Reality (VR) and Augmented Reality (AR) Experiences.',
                      'Data Analytics and Business Intelligence.',
                      'Exploring the Potential of Quantum Computing.',
                      'Transforming Ideas into Reality.',
                      'Crafting Web Solutions for a Digital Future.',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <Slider {...sliderConfig}>
              {data.map((item) => (
                <CourseCardItem key={String(item.id)} item={item} />
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomePopularCourse
