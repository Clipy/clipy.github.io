import React from 'react';
import styles from '../../stylesheets/snippet';

export default class extends React.Component {
  render() {
    return (
      <section className={`${styles.container} row`}>
        <div className="col-sm-12">
          <div className="col-sm-7">
            <div className={styles.image} />
          </div>
          <div className="col-sm-5">
            <h2>スニペットを設定</h2>
            <p>
              保存しておきたい定型文、テンプレートを管理、編集が出来ます。
              よく使う定型文を必要な時に呼び出し、利用出来ます。
            </p>
          </div>
        </div>
      </section>
    );
  }
}
