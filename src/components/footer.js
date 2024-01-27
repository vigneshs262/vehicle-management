import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <MDBFooter className='fotter text-center text-black'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <p><strong>Follow Us On</strong></p>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
            <FacebookIcon/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
            <TwitterIcon/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='ln' />
            <LinkedInIcon/>
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
            <InstagramIcon/>
          </MDBBtn>

        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <strong> © 2024 Copyright: </strong>
        <a className='text-black ' href='https://mail.google.com/mail/u/0/?ogbl#inbox/FMfcgzGwJSBHrkmjgJrBXLqSZBGJFvKq?compose=new'>
        <strong>VInfo777@gmail.com</strong>
        </a>
      </div>
    </MDBFooter>
  );
}