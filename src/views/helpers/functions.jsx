import Macy from "macy";
import React from "react";

export const Masonry = () => {
    var macyInstance = new Macy({
        container: `#masonry`,
        trueOrder: true,
        waitForImages: false,
        columns: 2,
        breakAt: {
            768: 1
        }
    });
    return macyInstance;
}

export const CalPercent = (totalRepositories, totalContributions) => {
    var result = 0;
    result = Math.round(totalContributions / totalRepositories);
    return (
        <React.Fragment>
            <div className="card-footer bg-secondary">
                <h3 className="mb-0 text-center text-white">This user has an average of <span className="badge bg-success">{result} Contributions</span> per repository</h3>
            </div>
        </React.Fragment>
    );
}

export const IntFormat = (number) => {
    var result = new Intl.NumberFormat('en-US').format(number);
    return result;
}