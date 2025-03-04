import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';
import withToggle from '../../hocs/withToggle/withToggle.jsx';
import './info.scss';

const ButtonWrapped = withToggle(Button);

const Info = (props) => {
  const {
    pokemon,
    isToggleChecked,
    onButtonClick,
    onToggleClick,
  } = props;

	const {id, name, catchDate} = pokemon;

  return (
    <Fragment>
      <img className="page__img" src={require(`../../../../images/${id}.png`)} alt={name[0].toUpperCase() + name.slice(1)} />
      <article className="page__info info">
        <h1 className="info__title">{name[0].toUpperCase() + name.slice(1)}</h1>
        <p className="info__text">ID: <span className="info__data">{id}</span></p>
        <p className="info__text">STATUS: <span className="info__data">{isToggleChecked ? 'Caught' : 'Not caught'}</span></p>
        {isToggleChecked && <p className="info__text">CAUGHT: <span className="info__data">{catchDate}</span></p>}
				<ButtonWrapped
          isToggleChecked={isToggleChecked}
          onClick={() => {
            onButtonClick(pokemon);
            onToggleClick();
          }}
				/>
      </article>
    </Fragment>
  );
};

Info.propTypes = {
	pokemon: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isCaught: PropTypes.bool.isRequired,
		catchDate: PropTypes.string,
	}).isRequired,
  isToggleChecked: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
};

export default React.memo(Info);
