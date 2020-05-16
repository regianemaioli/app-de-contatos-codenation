import React from 'react';

const Contact = ({data: {avatar, name, phone, country, admissionDate, company, department}}) => {

  //const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');
  // need to review
  const formatDate = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  const [{ value: dd },,{ value: mm },,{ value: yyyy }] = formatDate.formatToParts(new Date(admissionDate));

  return (
    <article className="contact" data-testid="contact">
      <span className="contact__avatar" data-testid="contact-avatar">
        <img src={avatar} alt={name} />
      </span>

      <span className="contact__data" data-testid="contact-name">
        {name}
      </span>

      <span className="contact__data" data-testid="contact-phone">
        {phone}
      </span>

      <span className="contact__data" data-testid="contact-country">
        {country}
      </span>

      <span className="contact__data" data-testid="contact-date">
        {`${dd}/${mm}/${yyyy}`}
      </span>

      <span className="contact__data" data-testid="contact-company">
        {company}
      </span>

      <span className="contact__data" data-testid="contact-department">
        {department}
      </span>
    </article>
  );
}

export default Contact;