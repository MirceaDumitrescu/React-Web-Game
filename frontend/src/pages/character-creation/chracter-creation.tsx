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
          <input name='charName' type='text' className='char__input__name' />
        </div>
        <div className='char__stats'>
          {/* Here the stats will varry depending on the class the user will select */}
          <div className='char__stats__cont'>
            <p className='char__stat'>ATK</p>
            <p className='char_value'>25</p>
          </div>
          <div className='char__stats__cont'>
            <p className='char__stat'>DEF</p>
            <p className='char__value'>10</p>
          </div>
          <div className='char__stats__cont'>
            <p className='char__stat'>INT</p>
            <p className='char__value'>15</p>
          </div>
        </div>
        <button className='char__btn'>Save</button>
      </div>
      <div className='char__preview'>
        {/* Here the user can preview his character based on the class he selects. */}
        <h3>Your character here!</h3>
      </div>
    </div>
  )
}

export default CharacterCreation
