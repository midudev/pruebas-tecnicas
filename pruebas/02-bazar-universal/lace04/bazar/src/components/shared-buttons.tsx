import { BASE_URL } from '@/constants/global';
import React, { Component } from 'react';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

export const shareUrl = `${BASE_URL}/items/6`;

export const FacebookButton = () => {
  return (
    <div className='mt-2'>
      <FacebookShareButton
        url={shareUrl}
        quote={'Facebook'}
        className='Demo__some-network__share-button'
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
};

export const TwitterButton = () => {
  return (
    <div className='mt-2'>
      <TwitterShareButton
        url={shareUrl}
        className='Demo__some-network__share-button'
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
};

export const WhatsappButton = () => {
  return (
    <div className='mt-2'>
      <WhatsappShareButton
        url={shareUrl}
        title={'MacBook Pro - Apple'}
        className='Demo__some-network__share-button'
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};
