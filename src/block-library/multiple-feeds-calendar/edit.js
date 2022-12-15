/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { Button } from '@wordpress/components';
import { useState, useRef } from '@wordpress/element';
import validator from 'validator';
import './editor.scss';
import errorIcon from '../../../assets/images/form-error.svg';

const textDomain = 'ucla-multiple-feeds-calendar';

const Exit = ({ attributes, setAttributes }) => {
    const {
        feeds = [],
        className = false
    } = attributes;
    const newFeedNameRef = useRef();
    const newFeedUrlRef = useRef();
    const errorMsgRef = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    let clickedAddButton = false;

    /**
     * 
     * @param {*} nameRef - reference to name input element for feed being added
     * @param {*} urlRef - reference to URL input element for feed being added
     * 
     * 
     *  
     */

    const addFeedHandler = (nameRef, urlRef) => {
        clickedAddButton = true;
        const name = nameRef.current.value;
        const url = urlRef.current.value;

        if (validateName(nameRef.current) && validateUrl(urlRef.current)) {
            clickedAddButton = false;
            feeds.push([name, url]);
            nameRef.current.value = '';
            urlRef.current.value = '';
            updateFeeds(feeds);
        }
    }

    const updateNameHandler = (e, index) => {
        validateName(e.target);
        const newFeed = [e.target.value, feeds[index][1]]
        feeds[index] = newFeed;
        updateFeeds(feeds);
    }

    const updateUrlHandler = (e, index) => {
        validateUrl(e.target);
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

    const validateName = (el) => {
        if (!el.value.length) {
            setErrorMessage('Please enter a name.');
            return false;
        } else {
            setErrorMessage('');
            return true;
        }
    }

    const validateUrl = (el) => {
        if (el.id === 'feed-list-add-url' && !clickedAddButton) {
            console.log("hasn't clicked add yet");
            return;
        }

        if (!validator.isURL(el.value)) {
            setErrorMessage('Please enter a valid  URL.');
            return false;
        } else {
            setErrorMessage('');
            return true;
        }
    }


    return (
        <div className="feed-list">
            <h3>{__("Manage Calender Feeds", textDomain)}</h3>
            <p class="text__help">Please save the your changes using the update button at the top of this page once all changes are complete otherwise changes will be lost. </p>
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
                    <input onChange={function (e) { validateName(e.target) }} type="text" className="feed-list__input-feed-name text__input" placeholder={__("Enter Feed Name", textDomain)} ref={newFeedNameRef} />
                    <input onChange={function (e) { validateUrl(e.target) }} id="feed-list-add-url" type="url" className="feed-list__input-feed-url text__input" placeholder={__("Enter Feed URL", textDomain)} ref={newFeedUrlRef} />
                    <Button className="feed-list__add-button btn btn--lightbg" isPressed={true} onClick={function () { addFeedHandler(newFeedNameRef, newFeedUrlRef) }}>{__('Add', textDomain)}</Button>
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
            <input type="text" onChange={function (name) { updateNameHandler(name, index) }} className="feed-list__input-feed-name text__input" placeholder={__("Enter Feed Name", textDomain)} value={name} />
            <input type="url" onChange={function (name) { updateUrlHandler(name, index) }} className="feed-list__input-feed-url text__input" placeholder={__("Enter Feed URL", textDomain)} value={url} />
            <Button className="feed-list__remove-button btn btn--lightbg" isPressed={true} onClick={function () { removeFeedHandler(index) }}> Remove</Button>
        </li >
    )
}

const ErrorMessage = ({ message = '' }) => {
    return (message.length) ?
        <figure class="alert alert--error" role="alert">
            <img src={errorIcon} alt="error" />
            <figcaption>{message}</figcaption>
        </figure> :
        <></>;
}

export default Exit;