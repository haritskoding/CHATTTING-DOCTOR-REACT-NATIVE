/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({ isMe }) => {
    if (isMe) {
        return <IsMe />;
    }
    return <Other />;


}

export default ChatItem;

