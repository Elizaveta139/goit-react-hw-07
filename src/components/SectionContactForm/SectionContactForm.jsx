import ContactForm from '../ContactForm/ContactForm';
import img from '../../../src/assets/close-up-smiley-woman-with-phone.jpg';
import css from './SectionContactForm.module.css';
// import 'animate.css';

export default function SectionContactForm() {
  return (
    <div className={css.wrapForm}>
      <ContactForm />

      <img className={css.img} src={img} alt="Phone in girl's hands" width="500" height="500" />
    </div>
  );
}
