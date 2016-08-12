import React from 'react';
import styles from '../../stylesheets/open-source';

export default class extends React.Component {
  render() {
    return (
      <section className={`${styles.container} row`}>
        <div className="col-sm-12">
          <h2>オープンソース</h2>
          <p>
            Clipyはオープンソースで公開されています。
            バグや不具合、要望等ありましたら、Issue、PullRequestなどお待ちしています！
            日本語でも大丈夫です！
          </p>
          <button>Github</button>
          <div className={styles.image} />
        </div>
      </section>
    );
  }
}
