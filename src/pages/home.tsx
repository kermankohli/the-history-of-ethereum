import * as React from 'react';

import { css, StyleSheet } from 'aphrodite/no-important';

import { GLOBAL_STYLES, EVENT_LIST } from '@constants/index';

import TimelineItem from '@components/timeline-item';

import background from '@image/bg.png';

const timelineStyles = StyleSheet.create({
  container: {
    display: 'grid',
    gridGap: '2em',
  },
  line: {
    position: 'absolute',
    width: '2px',
    backgroundColor: 'rgb(255, 255, 255, 0.1)',
    top: '27.5em',
    bottom: 0,
    height: '100%',
    marginLeft: '9px',
  }
});

class Home extends React.Component {
  
  sortedObjects() {
    // TODO: Implement proper sorting by date
    return EVENT_LIST;
  }

  public render() {
    return (
      <div className={css(GLOBAL_STYLES.topDiv)} style={{backgroundImage: `url(${background})`}}>
        <div className={css(GLOBAL_STYLES.sectionDiv)}>
          <div className={css(GLOBAL_STYLES.contentDiv)}>
            <h1>The History of Ethereum</h1>
            <h2>
              This website aims to be a digital history book 
              about the movement we today know as Etheruem.
            </h2>
          </div>
        </div>

        <div className={css(timelineStyles.container, GLOBAL_STYLES.sectionDiv)}>
          <div className={css(GLOBAL_STYLES.contentDiv, timelineStyles.container)}>
              { this.sortedObjects().map(item => {
                  return (
                    <TimelineItem 
                      title={item.title} 
                      description={item.description} 
                      link={item.link} 
                      date={item.date}
                    />
                  )
                })
              }
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
