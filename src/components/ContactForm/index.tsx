import EmailSender from '../../utils/emailSender';
import EmailForm from './styled';
import { useRef, FormEvent } from 'react';

const ContactForm = () => {
  const email = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const emailSender = new EmailSender(
        email?.current?.value,
        subject?.current?.value
      );

      emailSender.validate().sendEmail();
    } catch (e: Error | any) {
      window.alert(e.message);
    }
  }

  return (
    <EmailForm onSubmit={handleSubmit}>
      <h2>Contact</h2>
      <label htmlFor='email' className='email'>
        <span>Email</span>
        <input
          type='email'
          name='email'
          id='email'
          ref={email}
          className='input'
        />
      </label>
      <label htmlFor='subject' className='subject'>
        <span>Subject</span>
        <input
          type='text'
          name='subject'
          id='subject'
          ref={subject}
          className='input'
        />
      </label>
      <label htmlFor='content' className='content'>
        <span>Message</span>
        <textarea
          name='content'
          id='content'
          ref={content}
          className='input textarea'
        />
      </label>
      <button className='btn-submit'>Send</button>
    </EmailForm>
  );
};

export default ContactForm;
