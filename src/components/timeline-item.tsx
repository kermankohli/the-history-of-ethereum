import * as React from 'react';

import { css, StyleSheet } from 'aphrodite/no-important';
import { TWITTER_BLUE } from '@constants/index';

const styles = StyleSheet.create({
  timelineItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '@media (max-width: 800px)': {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
  dateAndDotContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '@media (max-width: 800px)': {
      flexDirection: 'row-reverse',
      alignItems: 'flex-start',
      marginBottom: '1em'
    }
  },
  timelineItem: {
    background: '#141414',
    padding: '1.5em',
    borderRadius: '0.75em',
    flex: 1
  },
  outerDot: {
    background: 'rgb(255, 255, 255, 0.25)',
     borderRadius: '50%', 
     width: '20px', 
     height: '20px', 
     zIndex: 0, 
     display: 'flex', 
     justifyContent: 'center', 
     alignItems: 'center', 
     marginRight: '2em',
     marginLeft: '1em'
  }, 
  innerDot: {
    background: 'white', 
    borderRadius: '50%', 
    width: '10px', 
    height: '10px', 
    zIndex: 1
  }, 
  link: {
    color: '#CFCFCF', 
    fontSize: '0.6em', 
    marginTop: '0.5em', 
    textTransform: 'uppercase'
  }
});

function parseForTwitter(text: string): any {
  // This is a hack. Please do not judge lmao.
  let parts: any[] = text.split(" ");
  for (var i = 0; i < parts.length; i += 1) {
    let text: string = parts[i];
    if (text.charAt(0) == '@') {
      parts[i] = 
        <a 
          target="_blank" 
          href={`http://twitter.com/${text}`} 
          key={i} style={{color: '#4A90E2'}}>
          {`${parts[i]} `}
        </a>;
    } else {
      parts[i] = <a>{`${parts[i]} `}</a>;
    }
  }
  return (
    <div style={{}}>
      {parts}
    </div>
  );
}

function domainFromUrl(url: string): string {
  let result: string = '';
  let match: any;

  if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
      result = match[1]
      if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
          result = match[1]
      }
  }
  return result;
}


class TimelineItem extends React.Component<IEvent> {
  public render() {
    return (
      <div className={css(styles.timelineItemContainer)}>
        <div className={css(styles.dateAndDotContainer)}>
          <p style={{color: 'white', fontSize: '0.75em', width: '5em'}}>{this.props.date}</p>
          <div className={css(styles.outerDot)}>
            <div className={css(styles.innerDot)}/>
          </div>
        </div>
        <div className={css(styles.timelineItem)}>
          <h3 style={{color: '#CFCFCF', marginBottom: '0.5em'}}>{this.props.title}</h3>
          <div style={{lineHeight: '1em', margin: '0.5em 0', letterSpacing: '0.025em', color: TWITTER_BLUE}}>
            {parseForTwitter(this.props.description)}
          </div>
          <a href={this.props.link} target='_blank' className={css(styles.link)}>
            {domainFromUrl(this.props.link)}
          </a>
        </div>
      </div>
    )
  }
};

export default TimelineItem;