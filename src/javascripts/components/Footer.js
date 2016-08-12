import React from 'react';
import styles from '../../stylesheets/footer';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div>SNS</div>
        <span className={styles.copyright}>2015-2016 Clipy Project</span>
      </div>
    );
  }
}
