import React from 'react';
import styles from '../../stylesheets/shortcut';

export default class extends React.Component {
  render() {
    return (
      <section className={`${styles.container} row`}>
        <div className="col-sm-12">
          <div className="col-sm-5">
            <h2>ショートカットで自由に呼び出し</h2>
            <p>
              メインメニュー、履歴メニュー、スニペットメニューなどをショートカットキーを各々に
              設定する事で利用したい時にいつでも呼び出す事が出来ます。
            </p>
          </div>
          <div className="col-sm-7">
            <div className={styles.image} />
          </div>
        </div>
      </section>
    );
  }
}
