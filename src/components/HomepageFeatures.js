import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Linux',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Cài đặt và sử dụng được môi trường Linux (Ubuntu) để học tập và làm việc
      </>
    ),
  },
  {
    title: 'Git',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Biết sử dụng git để quản lý source code trong quá trình phát triển
      </>
    ),
  },
  {
    title: 'Frontend cơ bản',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Sử dụng HTML, CSS để phát triển giao diện web
      </>
    ),
  },
    {
        title: 'Backend cơ bản',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Sử dụng PHP, Mysql để phát triển tính năng web
            </>
        ),
    },
    {
        title: 'Frontend nâng cao',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Sử dụng javascript/jQuery/VueJs để làm dynamic content web
            </>
        ),
    },
    {
        title: 'Backend nâng cao',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Sử dụng Laravel framework để phát triển tính năng nhanh và an toàn
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
