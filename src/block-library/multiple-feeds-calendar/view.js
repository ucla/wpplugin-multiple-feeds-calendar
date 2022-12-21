const uclaCalendarIcsFeedsBlock = {
    filterCalendars: function (e) {
        /** 
         *  Not used at the moment. - ESat 
         * loop through feeds selected, set cookie, then form reloads page so that php block gets new cookie 
         *  
         **/
        //e.preventDefault();
        const selected = e.target.elements[0].selectedOptions;
        const feedIds = [];

        if (selected.length > 0) {
            for (let i = 0; i < selected.length; i++) {
                feedIds.push(selected[i].value)
            };

            console.log(feedIds);
            console.log(document.cookie)


            document.cookie = "ucla-calendar-feeds-plugin=" + feedIds.toString();

            console.log(document.cookie)


        } else {
            // no selection error handling here
            console.log('nothing selected');
        }

        return false;
    },

    getUnselectSelectAllLinkComponent: function () {
        const d = document;
        const wrapper = d.createElement('div');
        wrapper.classList = "ics-calendar__filter-select-all-links";

        const unselectLink = d.createElement('a');
        const unselectLinkContent = d.createTextNode('Unselect All');
        unselectLink.append(unselectLinkContent);
        unselectLink.addEventListener('click', function (e) { this.unselectAllCalFilters(e) }.bind(this));

        const separationEl = d.createElement('span');
        const separationElContent = d.createTextNode(' \\ ');
        separationEl.append(separationElContent)

        const selectLink = d.createElement('a');
        const selectLinkContent = d.createTextNode('Select All');
        selectLink.append(selectLinkContent);
        selectLink.addEventListener('click', function (e) { this.selectAllCalFilters(e) }.bind(this));

        wrapper.append(unselectLink);
        wrapper.append(separationEl);
        wrapper.append(selectLink);
        return wrapper;
    },


    selectAllCalFilters: function (e) {
        e.preventDefault();
        const filters = this.getAllCalFilters();
        filters.forEach(function (filter) {
            if (!filter.checked) filter.click();

        });
    },

    unselectAllCalFilters: function (e) {
        e.preventDefault();
        const filters = this.getAllCalFilters();
        filters.forEach(function (filter) {
            if (filter.checked) filter.click();
        });
    },

    getAllCalFilters: function () {
        return document.querySelectorAll('.ics-calendar-color-key-item input');
    }

}


document.addEventListener('DOMContentLoaded', function () {
    /** 
     * The filter code below is no longer needed for now. Bene and Paul suggested using the filter that
     *  comes with ICS Calendar out of the box
     */
    // const f = document.getElementById('ucla-select-calendars__form');
    // if (typeof f !== 'undefined') {
    //     f.addEventListener('submit', uclaCalendarIcsFeedsBlock.filterCalendars);
    // }

    /**
     * Move the ICS Calendar plugin default filter to below the calendar. Per Bene and Paul mockup.
     * https://www.figma.com/file/jSluE5XyTLaZztyZ2LViif/Calendar?node-id=0%3A1&t=p5QjXwPoMPpgkKGM-1
     * 
     */
    const d = document;
    const calFilter = d.querySelector('.ics-calendar-color-key');
    const calFilterWrapper = d.querySelector('.ics-calendar');
    const filterWrapper = d.createElement('div');
    filterWrapper.classList = 'ics-calendar__filter';

    const header = d.createElement('h4');
    const headerContent = d.createTextNode('Calendar Display Filter');
    header.append(headerContent);

    filterWrapper.append(header);
    const selectUnselectLinks = uclaCalendarIcsFeedsBlock.getUnselectSelectAllLinkComponent();
    filterWrapper.append(selectUnselectLinks);

    if (typeof calFilter !== 'undefined' && typeof calFilterWrapper !== 'undefined') {
        calFilter.remove();
        filterWrapper.append(calFilter)
        calFilter.classList = "ics-calendar-color-key ics-calendar-color-key--visible"
        calFilterWrapper.prepend(filterWrapper);
    }
});

