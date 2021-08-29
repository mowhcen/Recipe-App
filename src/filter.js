/**
 * filter input value of searchbar
 */
const filter = {
    textSearch: "",
};

/**
 *
 * @returns filter object
 */
const getFilter = () => filter;

/**
 * change filter object value
 * @param {*} param0
 */
const setFilter = ({ textSearch: update }) => {
    if (typeof update === "string") {
        filter.textSearch = update;
    }
};

/**
 * export function for use
 */
export { getFilter, setFilter };
