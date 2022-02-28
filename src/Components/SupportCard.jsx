import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const SupportCard = ({ item, changeHoverState, hovered }) => {
  return hovered ? (
    <Card sx={styles.hoverContainer}>
      <CardContent>
        <Typography sx={styles.question} color='text.secondary' gutterBottom>
          {item !== 'Near' && 'What is NEAR?'}
          {item !== 'Polygon' && 'What is Polygon?'}
        </Typography>
        <Typography variant='body1' sx={styles.hoverDescription}>
          {item !== 'Near' &&
            'Through simple, secure, and scalable technology, NEAR empowers millions to invent and explore new experiences. Business, creativity, and community are being reimagined for a more sustainable and inclusive future.'}
          {item !== 'Polygon' &&
            'Polygon believes in Web3 for all. Polygon is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.'}
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <Card elevation={0} sx={styles.container}>
      <CardMedia
        onMouseEnter={() => changeHoverState(true)}
        onMouseLeave={() => changeHoverState(false)}
        component='img'
        image={`./${item}.png`}
        alt={item}
        sx={styles.image}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary' sx={styles.description}>
          {item === 'Near' && 'Awarded a grant from NEAR Protocol to build Chainwhiz on NEAR chain'}
          {item === 'Polygon' &&
            'Awarded a grant from the Polygon Team to help build Chainwhiz on Polygon Mainnet'}
        </Typography>
      </CardContent>
    </Card>
  )
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#131313'
  },
  question: { fontSize: 14, color: '#D7FF2E' },
  hoverContainer: {
    padding: '3%',
    '@media screen and (min-width:920px)': {
      marginX: '20%',
      height: '85%'
    }
  },
  image: { objectFit: 'contain', height: '15rem', width: '15rem' },
  description: {
    width: '70%',
    textAlign: 'center',
    margin: 'auto',
    '@media screen and (max-width:720px)': {
      width: '80%'
    }
  },
  hoverDescription: { lineHeight: '25px', fontWeight: 400 }
}
export default SupportCard
