module.exports = {
    purge: {
        enabled: true,
        content: ["./*.html"],
    }, // "./*.html"
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                twitterblue: "#1d9bf0",
                linkedinblue: "#0a66c2",
            },
        },
    },
    variants: {
        extend: {
            boxSizing: ["hover", "focus"],
            fontWeight: ["hover", "focus"],
        },
    },
    plugins: [],
};
