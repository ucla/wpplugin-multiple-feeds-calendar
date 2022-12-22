/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************************!*\
  !*** ./src/block-library/multiple-feeds-calendar/view.js ***!
  \***********************************************************/
const uclaCalendarIcsFeedsBlock = {
  /**
   * 
   * Methods for modifying display of calendar filter and adding select all and unselect all links
   */
  getUnselectSelectAllLinkComponent: function () {
    const d = document;
    const wrapper = d.createElement('div');
    wrapper.classList = "ics-calendar__filter-select-all-links";
    const unselectLink = d.createElement('a');
    const unselectLinkContent = d.createTextNode('Unselect All');
    unselectLink.append(unselectLinkContent);
    unselectLink.addEventListener('click', function (e) {
      this.unselectAllCalFilters(e);
    }.bind(this));
    const separationEl = d.createElement('span');
    const separationElContent = d.createTextNode(' \\ ');
    separationEl.append(separationElContent);
    const selectLink = d.createElement('a');
    const selectLinkContent = d.createTextNode('Select All');
    selectLink.append(selectLinkContent);
    selectLink.addEventListener('click', function (e) {
      this.selectAllCalFilters(e);
    }.bind(this));
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
};
document.addEventListener('DOMContentLoaded', function () {
  /**
   * Add filter header and select all and unselect all links after load
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
    filterWrapper.append(calFilter);
    calFilter.classList = "ics-calendar-color-key ics-calendar-color-key--visible";
    calFilterWrapper.prepend(filterWrapper);
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map