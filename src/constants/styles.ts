import { StyleSheet } from 'aphrodite';

export const FOOTER_HEIGHT: string = '12em';
export const TWITTER_BLUE: string = '#4A90E2';

export const GLOBAL_STYLES = StyleSheet.create({
  topDiv: {
    display: 'flex',
    flexDirection: 'column'
  },
  sectionDiv: {
    display: 'flex',
    justifyContent: 'center',
    maxwidth: '100%',
  },
  contentDiv: {
    margin: '2em auto',
    maxWidth: '800px',
    '@media (max-width: 800px)': {
      margin: '2em 2em',
    }
  }
})