import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Save time, Save Money!</h1>
      <span>sign up and we'll send the best deals to you</span>
      <div className='mailInputContainer'>
        <input type='text' placeholder='your email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
