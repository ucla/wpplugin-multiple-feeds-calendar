/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************************!*\
  !*** ./src/block-library/multiple-feeds-calendar/view.js ***!
  \***********************************************************/
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
        feedIds.push(selected[i].value);
      }
      ;
      console.log(feedIds);
      console.log(document.cookie);
      document.cookie = "ucla-calendar-feeds-plugin=" + feedIds.toString();
      console.log(document.cookie);
    } else {
      // no selection error handling here
      console.log('nothing selected');
    }
    return false;
  }
};
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
   * No longer moving to the bottom per Gary S., Paul C., and Bene.
   */
  return;
  const calFilter = document.querySelector('.ics-calendar-color-key');
  const calFilterWrapper = document.querySelector('.ics-calendar');
  const filterWrapper = document.createElement('div');
  filterWrapper.classList = 'ics-calendar__filter';
  const header = document.createElement('h4');
  const headerContent = document.createTextNode('Calendar Display Filter');
  header.appendChild(headerContent);
  filterWrapper.appendChild(header);
  if (typeof calFilter !== 'undefined' && typeof calFilterWrapper !== 'undefined') {
    calFilter.remove();
    filterWrapper.appendChild(calFilter);
    calFilterWrapper.appendChild(filterWrapper);
    calFilter.classList = "ics-calendar-color-key ics-calendar-color-key--visible";
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map