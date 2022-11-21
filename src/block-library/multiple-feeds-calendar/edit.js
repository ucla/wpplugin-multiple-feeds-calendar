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
 * 
 */

import { Button } from '@wordpress/components';
import { useState, useRef } from '@wordpress/element';

import './editor.scss';

const Exit = ({ attributes, setAttributes }) => {
    const {
        feeds = [],
        className = false
    } = attributes;
    const newFeedNameRef = useRef();
    const newFeedUrlRef = useRef();
    const [numFeeds, setNumFeeds] = useState(feeds.length);

    const addFeedHandler = (nameRef, urlRef) => {
        const name = nameRef.current.value;
        const url = urlRef.current.value;
        if (name !== '' && url !== '') {
            feeds.push([name, url]);
            nameRef.current.value = '';
            urlRef.current.value = '';
            setAttributes({ feeds: feeds });
            setNumFeeds(feeds.length);
        } else {
            // empty fields error messaging
        }
    }

    const updateFeedHandler = (ref) => {

    }

    const removeFeedHandler = (ref) => {

    }

    return (
        <div className="feed-list">
            <h4>{__("Manage Calender Feeds")}</h4>
            <p>Description of block functionality, etc. goes here.</p>
            <ul className="feed-list__list-wrapper">
                {
                    feeds.map(([name, url]) => {
                        return (
                            <FeedListItem
                                name={name}
                                url={url}
                                feedUpdateHandler={updateFeedHandler}
                                feedRemoveHandler={removeFeedHandler}
                            />
                        )
                    })
                }
                <li className="feed-list__list-item">
                    <input type="text" className="feed-list__input-feed-name" placeholder="Enter Feed Name" ref={newFeedNameRef} />
                    <input type="url" className="feed-list__input-feed-url" placeholder="Enter Feed URL" ref={newFeedUrlRef} />
                    <Button className="feed-list__btn feed-list__btn-feed-add" isPressed={true} onClick={function () { addFeedHandler(newFeedNameRef, newFeedUrlRef) }}>Add</Button>
                </li >
            </ul>
        </div>
    )
}

const FeedListItem = ({ updateFeedHandler, removeFeedHandler, name, url }) => {
    const nameRef = useRef();
    const urlRef = useRef();

    return (
        <li className="feed-list__list-item">
            <input type="text" className="feed-list__input-feed-name" placeholder="Enter Feed Name" value={name} ref={nameRef} />
            <input type="url" className="feed-list__input-feed-url" placeholder="Enter Feed URL" value={url} ref={urlRef} />
            <Button isPressed={true} onClick={function () { updateFeedHandler(nameRef, urlRef) }}>Update</Button>
            <Button isPressed={true} onClick={function () { removeFeedHandler(nameRef, urlRef) }}> Remove</Button>
        </li >
    )
}

export default Exit;