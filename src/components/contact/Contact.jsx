import "./contact.css";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='cSection'>
        <form>
          <h1 className='cTitle'>Let's Keep in Touch</h1>
          <div className='formItem'>
            <label>Name</label>
            <input type='text' placeholder='John Doe' />
          </div>
          <div className='formItem'>
            <label>Email</label>
            <input type='email' placeholder='johndoe@gmail.com' />
          </div>
          <div className='formItem'>
            <label>Message</label>
            <textarea rows={10} placeholder='Write your message..'></textarea>
          </div>
          <button className='formButton'>Send</button>
        </form>
      </div>
      <div className='cSection'>SVG</div>
    </div>
  );
};

export default Contact;
