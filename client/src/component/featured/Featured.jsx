import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img
          src='https://cdn.pixabay.com/photo/2014/03/08/22/32/escalator-283448_960_720.jpg'
          alt=''
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Austrialia</h1>
          <h3>123 Properties</h3>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          src='https://cdn.pixabay.com/photo/2022/07/05/16/53/graz-7303533_960_720.jpg'
          alt=''
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Styria</h1>
          <h3>532 Properties</h3>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          src='https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg'
          alt=''
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Nigeria</h1>
          <h3>419 Properties</h3>
        </div>
      </div>
    </div>
  )
}

export default Featured
