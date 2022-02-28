import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import SupportCard from './SupportCard'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

const SupportedBy = () => {
  const [nearHover, setNearHover] = useState(false)
  const [polygonHover, setPolygonHover] = useState(false)
  const [buttonHover, setButtonHover] = useState(false)

  return (
    <div style={{ width: '100%', height: '100vh', background: '#131313' }}>
      <Typography
        color={'#fff'}
        variant='h2'
        component={'h1'}
        fontWeight={400}
        sx={{ paddingY: '50px', textAlign: 'center' }}
      >
        Our Biggest <span style={{ color: '#D7FF2E' }}>Cheerleaders</span>
      </Typography>
      <Grid container spacing={3} sx={{ padding: '2rem' }}>
        <Grid item xs={12} sm={6}>
          <SupportCard item={'Near'} changeHoverState={setNearHover} hovered={polygonHover} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SupportCard item={'Polygon'} changeHoverState={setPolygonHover} hovered={nearHover} />
        </Grid>
      </Grid>
      <div style={{ width: '100%', display: 'flex' }}>
        <Button
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          rel='noopener noreferrer'
          target='_blank'
          href='https://medium.com/articles-more-every-week/chainwhiz-smashes-the-benchmarks-of-project-building-with-a-grant-from-near-protocol-42322e39d005'
          sx={{
            margin: 'auto',
            marginY: '40px',
            paddingX: '15px',
            color: '#D7FF2E',
            fontWeight: 800,
            border: buttonHover && '1px solid #D7FF2E',
            borderRadius: '30px'
          }}
        >
          Read Article {buttonHover ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </Button>
      </div>
    </div>
  )
}

export default SupportedBy
