import React from 'react';
import styles from '../../stylesheets/special-thanks';

export default class extends React.Component {
  render() {
    return (
      <section className={`${styles.container} row`}>
        <div className="col-sm-12">
          <h2>スペシャルサンクス</h2>
          <div className={styles.image} />
          <p className={styles.description}>
            Clipmenuをオープンソースとして公開していただき
            @naotaka氏に感謝いたします。このコードがなければ
            リメイクという形で公開はありえませんでした。現状機能が
            被ってしまっていますが、独自機能を追加してさらなる
            機能向上を目指していきます。本当にありがとうございました。
          </p>
        </div>
      </section>
    );
  }
}
