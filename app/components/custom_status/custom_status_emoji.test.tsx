// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';

import * as CustomStatusSelectors from '@selectors/custom_status';

import CustomStatusEmoji from '@components/custom_status/custom_status_emoji';
import { renderWithRedux } from 'test/testing_library';

jest.mock('@selectors/custom_status');

describe('components/custom_status/custom_status_emoji', () => {
    const getCustomStatus = () => {
        return {
            emoji: 'calendar',
            text: 'In a meeting',
        };
    };
    (CustomStatusSelectors.getCustomStatus as jest.Mock).mockReturnValue(getCustomStatus);
    (CustomStatusSelectors.isCustomStatusEnabled as jest.Mock).mockReturnValue(true);
    it('should match snapshot', () => {
        const wrapper = renderWithRedux(
            <CustomStatusEmoji />,
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with props', () => {
        const wrapper = renderWithRedux(
            <CustomStatusEmoji
                emojiSize={34}
            />,
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should not render when EnableCustomStatus in config is false', () => {
        (CustomStatusSelectors.isCustomStatusEnabled as jest.Mock).mockReturnValue(false);
        const wrapper = renderWithRedux(
            <CustomStatusEmoji />,
        );

        expect(wrapper.toJSON()).toBeNull();
    });

    it('should not render when getCustomStatus returns null', () => {
        (CustomStatusSelectors.isCustomStatusEnabled as jest.Mock).mockReturnValue(true);
        (CustomStatusSelectors.getCustomStatus as jest.Mock).mockReturnValue(() => null);
        const wrapper = renderWithRedux(
            <CustomStatusEmoji />,
        );

        expect(wrapper.toJSON()).toBeNull();
    });
});
