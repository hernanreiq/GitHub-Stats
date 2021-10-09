import Macy from "macy";

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