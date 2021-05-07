// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {combineReducers} from 'redux';

import announcement from './announcement';
import channel from './channel';
import clientUpgrade from './client_upgrade';
import i18n from './i18n';
import recentEmojis from './recent_emojis';
import root from './root';
import search from './search';
import selectServer from './select_server';
import team from './team';
import thread from './thread';
import threads from './threads';
import user from './user';
import emoji from './emoji';
import post from './post';

export default combineReducers({
    announcement,
    channel,
    clientUpgrade,
    i18n,
    recentEmojis,
    root,
    search,
    selectServer,
    team,
    thread,
    user,
    emoji,
    post,
    threads,
});
