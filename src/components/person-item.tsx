import * as React from 'react';

import { css, StyleSheet } from 'aphrodite/no-important';
import linkedin from '@image/linkedin.png';

interface IPersonItem {
  photo: any,
  name: string,
  title: string,
  description: string,
  linkedIn: string,
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  imageContainer: {
    maxWidth: '4em'
  },
  textContainer: {
    marginTop: '0.5em'
  },
  image: {
    objectFit: 'contain',
    maxWidth: '100%',
    marginTop: '0.25em'
  },
  linkedIn: {
    height: '1em',
    marginLeft: '0.5em'
  }
});

class PersonItem extends React.Component<IPersonItem> {
  public render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.imageContainer)}>
          <img className={css(styles.image)} src={this.props.photo}/>
        </div>
        <div className={css(styles.textContainer)}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p style={{fontSize: '1.25em'}}>{this.props.name}</p>
            <a target='_blank' href={`https://www.linkedin.com/in/${this.props.linkedIn}`} style={{lineHeight: 0}}>
              <img className={css(styles.linkedIn)} src={linkedin}/>
              </a>
          </div>
          <p style={{color: '#7F7F7F'}}>{this.props.title}</p>
          <p style={{color: '#BEBEBE'}}>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default PersonItem;