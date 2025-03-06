import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Beginner-Friendly',
    Svg: require('@site/static/img/front_page_image_1.svg').default,
    description: (
      <>
      Offers step-by-step beginner-friendly guidance for easy Google Play app publishing.
      </>
    ),
  },
  {
    title: ' Focus on Key Requirements',
    Svg: require('@site/static/img/front_page_image_2.svg').default,
    description: (
      <>
        Learn how to configure store settings, provide store listing details, and meet Google Play's requirements.
      </>
    ),
  },
  {
    title: 'Troubleshooting Made Easy',
    Svg: require('@site/static/img/front_page_image_3.svg').default,
    description: (
      <>
       Identify common mistakes and learn how to fix them efficiently for a hassle-free launch.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
