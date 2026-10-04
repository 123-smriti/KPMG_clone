import { useEffect, useRef, useState } from 'react';
import Container from '../common/Container.jsx';
import Icon from '../common/Icon.jsx';
import { SEARCH_PANEL_ID } from '../../utils/constants.js';
import { SEARCH_MIN_LENGTH, isValidSearchTerm } from '../../utils/validators.js';

export default function SearchPanel({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const [term, setTerm] = useState('');
  const [hasError, setHasError] = useState(false);

  // Move focus into the input when the panel opens
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleChange = (event) => {
    setTerm(event.target.value);
    setHasError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // No search backend yet: only the minimum-length rule is enforced.
    setHasError(!isValidSearchTerm(term));
  };

  return (
    <div id={SEARCH_PANEL_ID} className={`search-panel ${isOpen ? 'search-panel--open' : ''}`.trim()}>
      <Container>
        <form className="search-panel__form" role="search" onSubmit={handleSubmit} noValidate>
          <label htmlFor="site-search-input" className="visually-hidden">Search the site</label>
          <input
            ref={inputRef}
            id="site-search-input"
            type="search"
            className="search-panel__input"
            placeholder="Search"
            value={term}
            onChange={handleChange}
            aria-invalid={hasError}
            aria-describedby="site-search-message"
          />
          <button type="submit" className="btn btn--primary">Search</button>
          <button type="button" className="icon-button" aria-label="Close search" onClick={onClose}>
            <Icon name="close" />
          </button>
        </form>
        <p id="site-search-message" className="search-panel__message" role={hasError ? 'alert' : undefined}>
          {hasError ? `Search terms must include ${SEARCH_MIN_LENGTH} or more characters.` : ''}
        </p>
      </Container>
    </div>
  );
}
