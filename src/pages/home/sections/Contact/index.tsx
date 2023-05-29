import { useRef } from 'react';
import StContact from './styled';
import ContactForm from '../../../../components/ContactForm';

export default function Contact() {
  return (
    <StContact id='Contact'>
      <div className='container'>
        <div className='description'>
          <p>
            I am a positive, enthusiastic and competent Web Developer who, over
            the years, has built up a diverse range of skills, qualities and
            attributes that guarantee I will perform highly in any role.
          </p>
        </div>
        <div className='form-container'>
          <ContactForm />
        </div>
      </div>
    </StContact>
  );
}
