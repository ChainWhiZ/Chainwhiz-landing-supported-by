import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const SupportCard = ({ item, changeHoverState, hovered }) => {
  return hovered ? (
    <Card id='hover-container'>
      <CardContent>
        <Typography id='question' color='text.secondary' gutterBottom>
          {item !== 'Near' && 'What is NEAR?'}
          {item !== 'Polygon' && 'What is Polygon?'}
        </Typography>
        <Typography variant='body1' id='hover-description'>
          {item !== 'Near' &&
            'Through simple, secure, and scalable technology, NEAR empowers millions to invent and explore new experiences. Business, creativity, and community are being reimagined for a more sustainable and inclusive future.'}
          {item !== 'Polygon' &&
            'Polygon believes in Web3 for all. Polygon is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.'}
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <Card elevation={0} id='container'>
      <CardMedia
        onMouseEnter={() => changeHoverState(true)}
        onMouseLeave={() => changeHoverState(false)}
        component='img'
        image={`./${item}.png`}
        alt={item}
        id='card-image'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary' id='description'>
          {item === 'Near' && 'Awarded a grant from NEAR Protocol to build Chainwhiz on NEAR chain'}
          {item === 'Polygon' &&
            'Awarded a grant from the Polygon Team to help build Chainwhiz on Polygon Mainnet'}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SupportCard
