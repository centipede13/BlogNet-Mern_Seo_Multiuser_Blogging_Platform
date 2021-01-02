import Layout from "../components/Layout";
import ContactForm from "../components/form/ContactForm";

function Contact() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2>Contact Form</h2>
            <hr />
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
