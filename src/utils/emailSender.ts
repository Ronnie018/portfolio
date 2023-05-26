interface iEmailSender {
  subject: string;
  content: string;
}

class EmailSender implements iEmailSender {
  subject: string;
  content: string;

  constructor(subject: string = '', content: string = '') {
    this.subject = subject;
    this.content = content;
  }

  sendEmail() {
    const url = `mailto:rondinelibrt18@gmail.com?subject=${this.subject}&body=${this.content}`;
    const linkElm: HTMLAnchorElement = document.createElement('a');
    linkElm.href = url;
    linkElm.click();
  }

  validate() {
    return this;
  }
}

export default EmailSender;