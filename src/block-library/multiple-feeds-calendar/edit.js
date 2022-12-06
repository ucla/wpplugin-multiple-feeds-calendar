/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Test feeds:
 * https://calendar.google.com/calendar/ical/ucla.esat%40gmail.com/public/basic.ics
 * https://calendar.google.com/calendar/ical/eloving%40g.ucla.edu/public/basic.ics
 * https://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics
 * https://community.ucla.edu/api/v1/ucla/holidays.ics
 * https://community.ucla.edu/api/v1/ucla/gateway.ics
 * https://community.ucla.edu/api/v1/program/staffassembly.ics
 * 
 */

import { Button } from '@wordpress/components';
import { useState, useRef } from '@wordpress/element';
import validator from 'validator';
import './editor.scss';

const textDomain = 'ucla-multiple-feeds-calendar';

const Exit = ({ attributes, setAttributes }) => {
    const {
        feeds = [],
        className = false
    } = attributes;
    const newFeedNameRef = useRef();
    const newFeedUrlRef = useRef();
    const errorMsgRef = useRef();
    const [errorMessage, setErrorMessage] = useState('')

    const validateUrl = (value) => {
        if (!validator.isURL(value)) {
            setErrorMessage('Please enter a valid URL')
        }
    };


    const addFeedHandler = (nameRef, urlRef) => {
        const name = nameRef.current.value;
        const url = urlRef.current.value;
        if (name !== '' && url !== '') {
            feeds.push([name, url]);
            nameRef.current.value = '';
            urlRef.current.value = '';
            updateFeeds(feeds);
        } else {
            // empty fields error messaging
        }
    }

    const updateNameHandler = (e, index) => {
        const newFeed = [e.target.value, feeds[index][1]]
        feeds[index] = newFeed;
        updateFeeds(feeds);
    }

    const updateUrlHandler = (e, index) => {
        const newFeed = [feeds[index][0], e.target.value]
        feeds[index] = newFeed;
        updateFeeds(feeds);
    }

    const updateFeeds = (feeds) => {
        setAttributes({ feeds: [...feeds] });
    }


    const removeFeedHandler = (index) => {
        feeds.pop(index)
        updateFeeds(feeds);
    }


    return (
        <div className="feed-list">
            <h4>{__("Manage Calender Feeds")}</h4>
            <p>Please save the your changes using the update button at the top of this page once all changes are complete otherwise changes will be lost. </p>
            <ErrorMessage message={errorMessage} />
            <ul className="feed-list__list-wrapper">
                {
                    feeds.map(([name, url], i) => {
                        return (
                            <FeedListItem
                                name={name}
                                url={url}
                                updateNameHandler={updateNameHandler}
                                updateUrlHandler={updateUrlHandler}
                                removeFeedHandler={removeFeedHandler}
                                index={i}
                            />
                        )
                    })
                }
                <li className="feed-list__list-item">
                    <input type="text" className="feed-list__input-feed-name" placeholder={__("Enter Feed Name", textDomain)} ref={newFeedNameRef} />
                    <input type="url" className="feed-list__input-feed-url" placeholder={__("Enter Feed URL", textDomain)} ref={newFeedUrlRef} />
                    <Button className="feed-list__btn feed-list__btn-feed-add" isPressed={true} onClick={function () { addFeedHandler(newFeedNameRef, newFeedUrlRef) }}>{__('Add', textDomain)}</Button>
                </li >
            </ul>
        </div>
    )
}

const FeedListItem = ({ updateNameHandler, updateUrlHandler, removeFeedHandler, name, url, index }) => {
    const nameRef = useRef();
    const urlRef = useRef();

    return (
        <li className="feed-list__list-item">
            <input type="text" onChange={function (name) { updateNameHandler(name, index) }} className="feed-list__input-feed-name" placeholder={__("Enter Feed Name", textDomain)} value={name} />
            <input type="url" onChange={function (name) { updateUrlHandler(name, index) }} className="feed-list__input-feed-url" placeholder={__("Enter Feed URL", textDomain)} value={url} />
            <Button isPressed={true} onClick={function () { removeFeedHandler(index) }}> Remove</Button>
        </li >
    )
}

const ErrorMessage = ({ message = null }) => {
    return (message) ? <div className="errorMsg">{message}</div> : <></>;
}

export default Exit;