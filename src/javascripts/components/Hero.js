import React from 'react';
import styles from '../../stylesheets/hero';

export default class extends React.Component {
  render() {
    return (
      <section className={`${styles.container} row`}>
        <div className="col-sm-12">
          <div className="col-sm-4">
            <div className={styles.icon} />
          </div>
          <div className="col-sm-8">
            <div>
              <div className="col-sm-12">
                <h1 className={`${styles.name} col-sm-5`}>Clipy</h1>
                <span className={`${styles.description} col-sm-7`}>
                  クリップボード拡張・<br />スニペット機能を搭載
                </span>
              </div>
              <div className="col-sm-12">
                <button className={styles.downloadButton}>ダウンロード</button>
                <span>Mac 版(OS X 10.9以降)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
