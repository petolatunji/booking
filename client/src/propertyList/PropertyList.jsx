import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
      <div className='pListItem'>
        <img
          src='https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          alt=''
          className='pListImg'
        />
        <div className='pListTitles'>
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className='pListItem'>
        <img
          src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
          className='pListImg'
        />
        <div className='pListTitles'>
          <h1>Apartments</h1>
          <h2>5000 apartments</h2>
        </div>
      </div>
      <div className='pListItem'>
        <img
          src='https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='pListImg'
        />
        <div className='pListTitles'>
          <h1>Resorts</h1>
          <h2>215 resorts</h2>
        </div>
      </div>
      <div className='pListItem'>
        <img
          src='https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
          className='pListImg'
        />
        <div className='pListTitles'>
          <h1>Villas</h1>
          <h2>100 Villas</h2>
        </div>
      </div>
      <div className='pListItem'>
        <img
          src='https://images.unsplash.com/photo-1475087542963-13ab5e611954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
          className='pListImg'
        />
        <div className='pListTitles'>
          <h1>Cabins</h1>
          <h2>233 cabins</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
