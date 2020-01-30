import theme from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";

export default {
    ...theme,
    prism: {
        style: okaidia,
    },
    colors: {
        text: 'rgb(86, 156, 214)',
        background: 'rgb(30, 30, 30)',
        link: 'lightblue',
    },
};
