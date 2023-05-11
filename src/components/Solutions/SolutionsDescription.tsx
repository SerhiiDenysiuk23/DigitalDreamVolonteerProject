import React, {FC} from 'react';
import styles from "./SolutionsSection.module.scss"

const SolutionsDescription: FC<{achievement: string}> = ({achievement}) => {
    const description = "Grammarly is not just a spell checker. The company has gone further and helps to build communication properly through algorithms - assesses intonation, clarity of statements, gives contextual clues. Its applications and extensions are used by more than 30 million people every day. The company does not disclose the number of paid subscriptions and earnings. But it boasts huge investments. In two rounds, Grammarly raised $ 200 million. The founders estimate the company at more than $ 1 billion, and the Pitchbook analytics service and Forbes experts raise the bar to $ 2.5 billion. This is a compliment to Ukrainian engineering talents. more than 200 people."
    const title = "Grammarly"
    const shortDesc = "Service for spell checking and correct communication"
    return (
        <div className={styles.solutionDescription}>
            <h2>{title}</h2>
            <h5>{shortDesc}</h5>
            <p className={"p-18-hind " + styles.description}>{description}</p>
            <p className={"p-18-hind " + styles.starBefore}>{achievement}</p>
            <a className={styles.moreDetails} href="#">More details →</a>
        </div>
    );
};

export default SolutionsDescription;