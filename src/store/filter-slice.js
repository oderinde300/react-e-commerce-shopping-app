
import { createSlice } from "@reduxjs/toolkit";

const filterInitialstate = {
    filteredItems: [],
    filter: false,
    searchData: [],
    searchResult: [],
    isSearchig: false
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialstate,
    reducers: {
        priceFilterHandler(state, action) {
            const itemsToFilter = action.payload.items.data;
            const pricetoFilterBy1 = action.payload.price;
            const pricetoFilterBy2 = action.payload.price2;
            state.filteredItems = itemsToFilter.filter(item => (item.price * 710) >= pricetoFilterBy1
                && (item.price * 710) <= pricetoFilterBy2);
            state.filter = true;
            console.log(state.filteredItems)
        },
        priceSortHandler(state, action) {
            const itemsToSort = action.payload.items.data;
            state.filteredItems = itemsToSort
            const sortOrder = action.payload.sortOrder;
            if (sortOrder === 'ascending') {
                state.filteredItems = state.filteredItems.sort((a, b) => a.price - b.price);
            };
            if (sortOrder === 'descending') {
                state.filteredItems = state.filteredItems.sort((a, b) => b.price - a.price);
            }
        },
        searchFilter(state, action) {
            state.searchData = action.payload.items;
            const searchTerm = action.payload.searchTerm;
            if (searchTerm.length < 1) {
                state.isSearchig = false;
            } else {
                state.isSearchig = true;
                const newSearchResult = state.searchData.filter(data => {
                    return (Object.values(data).join(" ")
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()));
                });
                state.searchResult = newSearchResult;
            }
        },
    },
});

export const filterSliceActions = filterSlice.actions;

export default filterSlice;