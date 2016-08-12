import React from 'react';
import styles from '../../stylesheets/save-history';

export default class extends React.Component {
  render() {
    return (
      <section className={`${styles.container} row`}>
        <div className="col-sm-12">
          <div className="col-sm-5">
            <h2>コピーをクリップ<br/ >ボードに履歴保存</h2>
            <p>
              コピーしたテキスト、画像などを履歴としてクリップボードに保存することができます。
              ペーストしたい場所にいつでも呼び出し利用できます。
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
