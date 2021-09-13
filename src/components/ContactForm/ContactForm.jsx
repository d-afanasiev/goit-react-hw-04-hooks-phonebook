import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import css from "./ContactForm.module.css";

export default function ContactForm({ formSubmitHandler }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else {
      setNumber(value);
    }
    // this.setState({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let idFullName = uuidv4();
    const totalState = {
      id: idFullName,
      name: name,
      number: number,
    };

    formSubmitHandler(totalState);

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="sendName" className={css.name}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={handleChange}
        className={css.inputName}
        id="sendName"
      />
      <label htmlFor="sendTel">Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        className={css.inputTel}
        onChange={handleChange}
        value={number}
        id="sendTel"
      />
      <button type="submit" className={css.submitName}>
        Add contact
      </button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     let idFullName = uuidv4();
//     const totalState = {
//       id: idFullName,
//       name: this.state.name,
//       number: this.state.number,
//     };

//     this.props.formSubmitHandler(totalState);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       filter: "",
//       name: "",
//       number: "",
//     });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form className={css.form} onSubmit={this.handleSubmit}>
//         <label htmlFor="sendName" className={css.name}>
//           Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//           value={name}
//           onChange={this.handleChange}
//           className={css.inputName}
//           id="sendName"
//         />
//         <label htmlFor="sendTel">Number</label>
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//           className={css.inputTel}
//           onChange={this.handleChange}
//           value={number}
//           id="sendTel"
//         />
//         <button type="submit" className={css.submitName}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

ContactForm.propTypes = {
  formSubmitHandler: PropTypes.func,
};

// export default ContactForm;
