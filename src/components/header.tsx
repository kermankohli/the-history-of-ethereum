import * as React from 'react';

import { css, StyleSheet } from 'aphrodite/no-important';
import { TWITTER_BLUE } from '@constants/index';

const styles = StyleSheet.create({
  container: {
    boxSizing: 'border-box',
    padding: '2em',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  itemsContainer: {
    display: 'flex',
    color: 'white',
    flexDirection: 'row',
    '@media (max-width: 750px)': {
      display: 'none'
    }
  },
  menuItem: {
    fontWeight: 500,
    fontSize: '1em',
    letterSpacing: '0.05em',
    margin: '0 0.5em',
    color: TWITTER_BLUE
  }
});

class Header extends React.Component {
  public render() {
    return (
      <div className={css(styles.container)}>
        <p style={{color: 'white'}}>{`Made with <3 by`}</p>
        <ul className={css(styles.itemsContainer)}>
          <li><a href='https://twitter.com/kermankohli' className={css(styles.menuItem)}>@kermankohli</a></li>
          <p>{` and `}</p>
          <li><a href='https://twitter.com/camirusso' className={css(styles.menuItem)}>@camirusso</a></li>
        </ul>
      </div>
    )
  }
}

export default Header;