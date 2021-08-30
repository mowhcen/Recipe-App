/**
 * store filter value of searchbar
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
 * store user search text
 * @param {*get} updates
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
