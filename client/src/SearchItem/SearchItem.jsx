import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6QVgzepvQTqyByztHysMV5-kuicdjv_mvA&usqp=CAU'
        alt=''
        className='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>Tower Street Apartments</h1>
        <span className='siDistance'> 1km from center</span>
        <span className='siTaxiOp'> Free airport taxi</span>
        <span className='siSubtitle'> Apartment with Air condition</span>
        <span className='siFeatures'> 1bathroom . 9" bed</span>
        <span className='siCancelOp'> Free cancellation</span>
        <span className='siCancelOpSubtitle'>
          You can cancel later, so use in this great price today!
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>Excellent</span>
          <button>8.0</button>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>#50,000</span>
          <span className='siTaxOp'>Includes charges</span>
          <button className='siCheckButton'>See Availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
