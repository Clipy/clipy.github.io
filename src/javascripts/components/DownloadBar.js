import React from 'react';
import styles from '../../stylesheets/download-bar';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <button className={styles.button}>
          ダウンロード
        </button>
      </div>
    );
  }
}
