import React, { FC, useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import Typewriter from 'typewriter-effect'
import { Button, Card, CircularProgress, FormControl, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import { SelectChangeEvent } from '@mui/material/Select'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Height } from '@mui/icons-material'
// import 'react-phone-input-2/lib/style.css'
interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}
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
const exps: Array<Exp> = [
  {
    label: 'Startups',
    value: '60+',
  },
  {
    label: 'Projects Delivered',
    value: '100+',
  },
  {
    label: 'Countries',
    value: '14+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <>
      <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
        <Typography
          sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
        >
          {value}
        </Typography>
        <Typography color="text.secondary" variant="h5">
          {label}
        </Typography>
      </Box>
    </>
  )
}

const servicesOptions = [
  { label: 'Web Development', value: 'Web Development' },
  { label: 'App Development', value: 'App Development' },
  { label: 'Web Design', value: 'Web Design' },
]
const HomeHero: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    services: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showForm, setShowForm] = useState(true)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setIsSubmitted(false)
    try {
      const response = await axios.post('https://itcom.up.railway.app/contact-details', formData)

      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          services: '',
          message: '',
        })
        setIsSubmitted(true)
        setShowForm(false)
        setTimeout(() => {
          setIsSubmitted(false)
          setShowForm(true)
        }, 3000)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }
  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
              }}
            >
              <Box sx={{ ...landingPageStyles.typewriterBox, margin: '0 auto' }}>
                <Typography
                  variant="h1"
                  sx={{ ...landingPageStyles.gradientText, fontWeight: 'bold', fontSize: '50px' }}
                >
                  <Typewriter
                    options={{
                      strings: [
                        'Elevating Businesses through Web App Development.',
                        'Transforming Ideas into Innovative Apps.',
                        'Crafting Web Solutions for a Digital Future.',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'black', lineHeight: 1.6, fontSize: '17px', fontWeight: 400 }}>
                  {
                    'we blend cutting-edge technology with creativity to deliver exceptional IT solutions tailored to your business needs. As a leading service-based company, we offer a wide range of services that encompass web app development, iOS and Android app development, AI solutions, and more.'
                  }
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 }, display: 'flex' }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained">
                    Get Started
                  </StyledButton>
                </ScrollLink>
                {/* <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="outlined" startIcon={<PlayArrowIcon />}>
                    Watch Video
                  </StyledButton>
                </ScrollLink> */}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            {/* Sertificate badge */}

            <Box>
              <Card sx={{ margin: '15px auto' }}>
                {isLoading ? (
                  <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <CircularProgress />
                  </Box>
                ) : isSubmitted ? (
                  <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Typography variant="h2" sx={{ color: '#3a1abf' }}>
                      Thank you for your submission!
                    </Typography>
                  </Box>
                ) : showForm ? (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      name="name"
                      margin="normal"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      margin="normal"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <Box mt={2} mb={3}>
                      <PhoneInput
                        country={'us'}
                        value={formData.phoneNumber}
                        countryCodeEditable={false}
                        onChange={(phoneNumber) => setFormData((prevData) => ({ ...prevData, phoneNumber }))}
                        inputProps={{
                          name: 'phoneNumber',
                          required: true,
                        }}
                        inputStyle={{ width: '100%', height: '52px' }}
                      />
                    </Box>
                    <FormControl fullWidth sx={{ marginBottom: 1 }}>
                      <Select
                        // value={age}
                        // onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        name="services"
                        value={formData.services}
                        onChange={handleSelectChange}
                      >
                        <MenuItem value="">
                          <em>Select a service</em>
                        </MenuItem>
                        {servicesOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <TextField
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      name="message"
                      margin="normal"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    <Button sx={{ mt: 4, mb: 4 }} variant="contained" color="primary" fullWidth type="submit">
                      Submit
                    </Button>
                  </form>
                ) : null}
              </Card>
              {/* <Image src="/images/home-hero.jpg" width={775} height={787} alt="Hero img" /> */}
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}
        <Box sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)', mt: 5, py: 4, px: 7, borderRadius: 4 }}>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mb={3}>
            <Typography
              sx={{
                // position: 'relative',
                color: '#3a1abf',
                fontSize: '40px',
                fontWeight: 'inherit',
                backgroundColor: 'unset',
              }}
            >
              Why Choose Us
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero
