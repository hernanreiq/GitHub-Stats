import Macy from "macy";
import Swal from "sweetalert2";

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

export const IntFormat = (number) => {
    var result = new Intl.NumberFormat('en-US').format(number);
    return result;
}

export const CopyThisCode = (url) => {
    navigator.clipboard.writeText(`![User Stats](${url})`);
    Swal.fire({
        icon: 'success',
        title: `Code copied successfully!`,
        text: `Paste this Markdown code into the README.md file of your profile.`
    })
}