const filter = {
    textSearch: "",
};

const getFilter = () => filter;

const setFilter = ({ textSearch: update }) => {
    if (typeof update === "string") {
        filter.textSearch = update;
    }
};

export { getFilter, setFilter };
