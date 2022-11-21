const uclaCalendarIcsFeedsBlock = {
    filterCalendars: function (e) {
        /** loop through feeds selected, set cookie, then form reloads page so that php block gets new cookie  */
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
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const f = document.getElementById('ucla-select-calendars__form');
    if (typeof f !== 'undefined') {
        f.addEventListener('submit', uclaCalendarIcsFeedsBlock.filterCalendars);
    }
});

