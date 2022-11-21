import './character-creation.scss'

function CharacterCreation() {
  return (
    <div className='char'>
      <div className='char__container'>
        <h2 className='char__title'>Create your character:</h2>
        <h3 className='char__container__title'>Choose your class:</h3>
        <div className='char__config'>
          <button className='char__btn'>Mage</button>
          <button className='char__btn'>Ranger</button>
          <button className='char__btn'>Warrior</button>
          <button className='char__btn'>Assassin</button>
        </div>
        <div className='char__input'>
          <label>Character name:</label>
          <input name='charName' type='text' />
        </div>
        <div className='char__stats'>
          <div className='char__stats__cont'>
            <p className='char__stat'>ATK</p>
            <p className='char_value'>25</p>
          </div>
          <div className='char_stats_cont'>
            <p className='char__stat'>DEF</p>
            <p className='char__value'>10</p>
          </div>
          <div>
            <p>INT</p>
            <p>15</p>
          </div>
        </div>
      </div>
      <div className='char__preview'>
        <h3>Your character here!</h3>
      </div>
    </div>
  )
}

export default CharacterCreation
